kitButton = require '../coffee/button.coffee'



describe "Maxmertkit Button", ->

    Button = window['Button']
    mkitButton = window['mkitButton']

    # Get button element
    el = window.document.getElementById('test-button')

    button = mkitButton.call el, {}

    # Fire event on document
    fireClickEvent = ( element ) ->
        if document.createEvent
            event = document.createEvent('HTMLEvents')
            event.initEvent('click', true, false);
            element.dispatchEvent(event)
        else
            element.fireEvent('onclick')

    fireHoverEvent = ( element ) ->
        if document.createEvent
            event = document.createEvent('HTMLEvents')
            event.initEvent('mouseover', true, false);
            element.dispatchEvent(event)
        else
            element.fireEvent('onmouseover')



    it 'should store in kitButton attribute', ->
        if not el.data[ 'kitButton' ]?
            throw new Error('No kitButton attribute')

        el.data[ 'kitButton' ].should.be.an 'object'
        el.data[ 'kitButton' ].should.be.an.instanceof Button

    it 'should properly set defaults', ->
        button.options.toggle.should.be.equal 'button'
        button.options.type.should.be.equal 'button'
        button.options.event.should.be.equal 'click'

    it 'shoud set property from data-group', ->
        button.options.group.should.be.equal 'test-buttons1'

    it 'should save this instance', ->
        button._instances.should.have.length 1

    it 'should properly set options', ->
        mkitButton.call el, { group: 'test-button' }
        button.options.group.should.be.equal 'test-button'

    it 'should properly destroy class instance', ->
        button.destroy()
        button._instances.should.have.length 0
        if el.data['kitButton']? then throw new Error "Dataset should be empty after destroy"

        button = mkitButton.call el, { group: 'test-button' }
        button._instances.should.have.length 1

    it 'should initialize global events', ->
        button.reactor.events['initialize.button'].should.exist
        button.reactor.events['active.button'].should.exist
        button.reactor.events['deactive.button'].should.exist

    it 'should be deactivated', ->
        button.active.should.be.false

    it 'should properly work click event', ->
        fireClickEvent el
        button.active.should.be.true
        fireClickEvent el
        button.active.should.be.false

    it 'enabling and disabling should work properly', ->
        button.enabled.should.be.true
        button.disable()
        button.enabled.should.be.false
        button.enable()
        button.enabled.should.be.true

    it 'shouldn\'t work when disabled', ->
        button.active.should.be.false
        button.disable()
        fireClickEvent el
        button.active.should.be.false
        button.enable()

    it 'should deactivate ALL other instances of Button when options.selfish is true', ->
        el2 = window.document.getElementById('test-button2')

        button2 = mkitButton.call el2, { selfish: yes }
        button2._instances.should.have.length 2
        button2.options.selfish.should.be.true
        button2.active.should.be.false

        fireClickEvent el
        button.active.should.be.true
        button2.active.should.be.false

        fireClickEvent el2
        button.active.should.be.false
        button2.active.should.be.true

    it 'should fire events', ->
        onactive = no
        beforeactive = no
        failactive = no
        ondeactive = no
        beforedeactive = no
        faildeactive = no

        button = mkitButton.call el,
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

        button.activate()
        button.deactivate()

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

        button = mkitButton.call el,
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
        fireHoverEvent el
        fireHoverEvent el

        onactive.should.be.false
        beforeactive.should.be.false
        failactive.should.be.false
        ondeactive.should.be.false
        beforedeactive.should.be.false
        faildeactive.should.be.false


        button = mkitButton.call el,
            # Change event
            event: "mouseover"

        # Test that new event will fire after setting it inside Button instance
        fireHoverEvent el
        fireHoverEvent el

        onactive.should.be.true
        beforeactive.should.be.true
        failactive.should.be.false
        ondeactive.should.be.true
        beforedeactive.should.be.true
        faildeactive.should.be.false
