kitModal = require '../coffee/modal.coffee'



describe "Maxmertkit Modal", ->

    Modal = window['Modal']
    mkitModal = window['mkitModal']

    # Get button element
    el = window.document.getElementById('button-modal')

    modal = mkitModal.call el, {}

    # Fire event on document
    fireEvent = ( element, ev ) ->
        if document.createEvent
            event = document.createEvent('HTMLEvents')
            event.initEvent(ev, true, false);
            element.dispatchEvent(event)
        else
            element.fireEvent("on#{ev}")


    it 'should store in kitModal attribute', ->
        if not el.data[ 'kitModal' ]?
            throw new Error('No kitModal attribute')

        el.data[ 'kitModal' ].should.be.an 'object'
        el.data[ 'kitModal' ].should.be.an.instanceof Modal

    it 'should properly set defaults', ->
        modal.options.toggle.should.be.equal 'modal'
        modal.options.event.should.be.equal 'click'
        modal.options.eventClose.should.be.equal 'click'
        modal.options.dialog.should.be.equal '.-dialog'
        modal.options.backdrop.should.be.false
        modal.options.push.should.be.false
        modal.options.autoOpen.should.be.false
        modal.enabled.should.be.true

    it 'shoud get property from data-target', ->
        modal.options.target.should.be.equal '#modal1'

    it 'should save this instance', ->
        modal._instances.should.have.length 1

    it 'should properly set options', ->
        modal = mkitModal.call el, { target: '#modal2' }
        modal.options.target.should.be.equal '#modal2'
        modal = mkitModal.call el, { target: '#modal1' }
        modal.options.target.should.be.equal '#modal1'

    it 'should properly destroy class instance', ->
        modal.destroy()
        modal._instances.should.have.length 0
        if el.data['kitModal']? then throw new Error "Dataset should be empty after destroy"

        modal = mkitModal.call el, {}
        modal._instances.should.have.length 1

    it 'should find target ( modal window )', ->
        modal.target.should.exist

    it 'should find closers of modal window', ->
        modal.closers.should.have.length 2

    it 'should initialize global events', ->
        modal.reactor.events['initialize.modal'].should.exist
        modal.reactor.events['open.modal'].should.exist
        modal.reactor.events['close.modal'].should.exist

    it 'should be closed', ->
        modal.opened.should.be.false

    it 'should properly work click event', ->
        modal.opened.should.be.false
        fireEvent el, 'click'
        modal.opened.should.be.true

    it 'should have closer element that closing modal propely', ->
        modal.opened.should.be.true
        fireEvent modal.closers[0], 'click'
        modal.opened.should.be.false

    it 'enabling and disabling should work properly', ->
        modal.enabled.should.be.true
        modal.disable()
        modal.enabled.should.be.false
        modal.enable()
        modal.enabled.should.be.true

    it 'shouldn\'t work when disabled', ->
        modal.opened.should.be.false
        modal.disable()
        fireEvent el, 'click'
        modal.opened.should.be.false
        modal.enable()

    it 'should close ALL other instances of Modal when options.selfish is true', ->
        el2 = window.document.getElementById('button-modal2')

        modal2 = mkitModal.call el2
        modal2._instances.should.have.length 2
        modal2.options.selfish.should.be.true
        modal2.opened.should.be.false

        fireEvent el, 'click'
        modal.opened.should.be.true
        modal2.opened.should.be.false

        fireEvent el2, 'click'
        modal.opened.should.be.false
        modal2.opened.should.be.true

    it 'should fire events', ->
        onactive = no
        beforeactive = no
        failactive = no
        ondeactive = no
        beforedeactive = no
        faildeactive = no

        modal = mkitModal.call el,
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

        modal.open()
        modal.close()

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

        modal = mkitModal.call el,
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


        modal = mkitModal.call el,
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
