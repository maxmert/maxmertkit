kitPopup = require '../coffee/popup.coffee'



describe "Maxmertkit Popup", ->

    Popup = window['Popup']
    mkitPopup = window['mkitPopup']

    # Get button element
    el = window.document.getElementById('button-popup')

    popup = mkitPopup.call el, {}

    # Fire event on document
    fireEvent = ( element, ev ) ->
        if document.createEvent
            event = document.createEvent('HTMLEvents')
            event.initEvent(ev, true, false);
            element.dispatchEvent(event)
        else
            element.fireEvent("on#{ev}")



    it 'should store in kitPopup attribute', ->
        if not el.data[ 'kitPopup' ]?
            throw new Error('No kitPopup attribute')

        el.data[ 'kitPopup' ].should.be.an 'object'
        el.data[ 'kitPopup' ].should.be.an.instanceof Popup

    it 'should properly set defaults', ->
        popup.options.toggle.should.be.equal 'popup'
        popup.options.event.should.be.equal 'click'
        popup.options.eventClose.should.be.equal 'click'
        popup.options.dialog.should.be.equal '-content'
        popup.options.autoOpen.should.be.false
        popup.options.selfish.should.be.false
        popup.options.position.vertical.should.be.equal 'top'
        popup.options.position.horizontal.should.be.equal 'center'
        popup.options.offset.vertical.should.be.equal 5
        popup.options.offset.horizontal.should.be.equal 5
        popup.opened.should.be.false
        popup.enabled.should.be.true

    it 'shoud get property from data-target', ->
        popup.options.target.should.be.equal '#popup'

    it 'should save this instance', ->
        popup._instances.should.have.length 1

    it 'should properly set options', ->
        popup = mkitPopup.call el, { target: '#popup1' }
        popup.options.target.should.be.equal '#popup1'
        popup = mkitPopup.call el, { target: '#popup' }
        popup.options.target.should.be.equal '#popup'

    it 'should properly destroy class instance', ->
        popup.destroy()
        popup._instances.should.have.length 0
        if el.data['kitPopup']? then throw new Error "Dataset should be empty after destroy"

        popup = mkitPopup.call el
        popup._instances.should.have.length 1

    it 'should correctly inirialize arrow position', ->
        popup._hasClass("_top_ _center_", popup.target).should.be.true

    it 'should find target ( popup window )', ->
        popup.target.should.exist

    it 'should find closers of popup window', ->
        popup.closers.should.have.length 0

    it 'should initialize global events', ->
        popup.reactor.events['initialize.popup'].should.exist
        popup.reactor.events['open.popup'].should.exist
        popup.reactor.events['close.popup'].should.exist

    it 'should be closed', ->
        popup.opened.should.be.false

    it 'should properly work click event', ->
        popup.opened.should.be.false
        fireEvent el, 'click'
        popup.opened.should.be.true
        popup.close()
        popup.opened.should.be.false

    it 'enabling and disabling should work properly', ->
        popup.enabled.should.be.true
        popup.disable()
        popup.enabled.should.be.false
        popup.enable()
        popup.enabled.should.be.true

    it 'shouldn\'t work when disabled', ->
        popup.opened.should.be.false
        popup.disable()
        fireEvent el, 'click'
        popup.opened.should.be.false
        popup.enable()

    it 'should close ALL other instances of Modal when options.selfish is true', ->
        el2 = window.document.getElementById('button-popup2')

        popup = mkitPopup.call el, {selfish: yes}
        popup2 = mkitPopup.call el2, {selfish: yes}
        popup2._instances.should.have.length 2
        popup2.options.selfish.should.be.true
        popup2.opened.should.be.false

        fireEvent el, 'click'
        popup.opened.should.be.true
        popup2.opened.should.be.false

        fireEvent el2, 'click'
        popup.opened.should.be.false
        popup2.opened.should.be.true

    it 'should fire events', ->
        onactive = no
        beforeactive = no
        failactive = no
        ondeactive = no
        beforedeactive = no
        faildeactive = no

        popup = mkitPopup.call el,
            beforeactive: ->
                beforeactive = yes
            onactive: ->
                onactive = yes
            failactive: ->
                failactive = yes
            beforedeactive: ->
                beforedeactive = yes
            ondeactive: ->
                ondeactive = yes
            faildeactive: ->
                faildeactive = yes

        popup.open()
        popup.close()

        onactive.should.be.true
        beforeactive.should.be.true
        failactive.should.be.false
        ondeactive.should.be.true
        beforedeactive.should.be.true
        faildeactive.should.be.false

    it 'should removeEventListener and add new one if changing options.event', ->
        onactive = no
        beforeactive = no
        failactive = no
        ondeactive = no
        beforedeactive = no
        faildeactive = no

        popup = mkitPopup.call el,
            beforeactive: ->
                beforeactive = yes
            onactive: ->
                onactive = yes
            failactive: ->
                failactive = yes
            beforedeactive: ->
                beforedeactive = yes
            ondeactive: ->
                ondeactive = yes
            faildeactive: ->
                faildeactive = yes


        # Test that new event will not fire
        fireEvent el, 'mouseover'
        fireEvent el, 'mouseover'

        onactive.should.be.false
        beforeactive.should.be.false
        failactive.should.be.false
        ondeactive.should.be.false
        beforedeactive.should.be.false
        faildeactive.should.be.false


        popup = mkitPopup.call el,
            # Change event
            event: "mouseover"

        # Test that new event will fire after setting it inside Button instance
        fireEvent el, 'mouseover'
        fireEvent el, 'mouseover'

        onactive.should.be.true
        beforeactive.should.be.true
        failactive.should.be.false
        ondeactive.should.be.true
        beforedeactive.should.be.true
        faildeactive.should.be.false
