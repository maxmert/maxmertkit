kitButton = require '../coffee/tabs.coffee'



describe "Maxmertkit Tabs", ->

    Tabs = window['Tabs']
    mkitTabs = window['mkitTabs']

    # Get tabs element
    el = window.document.getElementById('tabs1')

    tabs = mkitTabs.call el, {}

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



    it 'should store in data-kit-tabs attribute', ->
        if not el.dataset[ 'data-kit-tabs' ]?
            throw new Error('No data-kit-tabs attribute')

        el.dataset[ 'data-kit-tabs' ].should.be.an 'object'
        el.dataset[ 'data-kit-tabs' ].should.be.an.instanceof Tabs

    it 'should properly set defaults', ->
        tabs.options.toggle.should.be.equal 'tabs'
        tabs.options.target.should.be.equal '#content1'
        tabs.options.event.should.be.equal 'click'

    it 'shoud set property from data-group', ->
        tabs.options.group.should.be.equal 'tabs1'

    it 'should save this instance', ->
        tabs._instances.should.have.length 1

    it 'should properly set options', ->
        mkitTabs.call el, { group: 'test-tabs' }
        tabs.options.group.should.be.equal 'test-tabs'

    it 'should properly destroy class instance', ->
        tabs.destroy()
        tabs._instances.should.have.length 0
        if el.dataset['data-kit-tabs']? then throw new Error "Dataset should be empty after destroy"

        tabs = mkitTabs.call el, { group: 'tabs1' }
        tabs._instances.should.have.length 1

    it 'should initialize global events', ->
        tabs.reactor.events['initialize.tabs'].should.exist
        tabs.reactor.events['active.tabs'].should.exist
        tabs.reactor.events['deactive.tabs'].should.exist

    it 'should be deactivated', ->
        tabs.active.should.be.false

    # it 'should properly work click event', ->
    #     tabs.active.should.be.false
    #     fireClickEvent el
    #     tabs.active.should.be.true

    # it 'enabling and disabling should work properly', ->
    #     tabs.enabled.should.be.true
    #     tabs.disable()
    #     tabs.enabled.should.be.false
    #     tabs.enable()
    #     tabs.enabled.should.be.true

    # it 'shouldn\'t work when disabled', ->
    #     tabs.active.should.be.false
    #     tabs.disable()
    #     fireClickEvent el
    #     tabs.active.should.be.false
    #     tabs.enable()

    # it 'should deactivate ALL other instances of Tabs when options.selfish is true', ->
    #     el2 = window.document.getElementById('tabs2')

    #     tabs2 = mkitTabs.call el2
    #     tabs2._instances.should.have.length 2
    #     tabs2.active.should.be.false

    #     fireClickEvent el
    #     tabs.active.should.be.true
    #     tabs2.active.should.be.false

    #     fireClickEvent el2
    #     tabs.active.should.be.false
    #     tabs2.active.should.be.true

    # it 'should fire events', ->
    #     onactive = no
    #     beforeactive = no
    #     failactive = no
    #     ondeactive = no
    #     beforedeactive = no
    #     faildeactive = no

    #     tabs = mkitTabs.call el,
    #         beforeactive: ->
    #             beforeactive = yes
    #         onactive: ->
    #             onactive = yes
    #         failactive: ->
    #             failactive = yes
    #         beforedeactive: ->
    #             beforedeactive = yes
    #         ondeactive: ->
    #             ondeactive = yes
    #         faildeactive: ->
    #             faildeactive = yes

    #     tabs.activate()
    #     tabs.deactivate()

    #     onactive.should.be.true
    #     beforeactive.should.be.true
    #     failactive.should.be.false
    #     ondeactive.should.be.true
    #     beforedeactive.should.be.true
    #     faildeactive.should.be.false

    # it 'should removeEventListener and add new one if changing options.event', ->
    #     onactive = no
    #     beforeactive = no
    #     failactive = no
    #     ondeactive = no
    #     beforedeactive = no
    #     faildeactive = no

    #     tabs = mkitTabs.call el,
    #         beforeactive: ->
    #             beforeactive = yes
    #         onactive: ->
    #             onactive = yes
    #         failactive: ->
    #             failactive = yes
    #         beforedeactive: ->
    #             beforedeactive = yes
    #         ondeactive: ->
    #             ondeactive = yes
    #         faildeactive: ->
    #             faildeactive = yes


    #     # Test that new event will not fire
    #     fireHoverEvent el
    #     fireHoverEvent el

    #     onactive.should.be.false
    #     beforeactive.should.be.false
    #     failactive.should.be.false
    #     ondeactive.should.be.false
    #     beforedeactive.should.be.false
    #     faildeactive.should.be.false


    #     tabs = mkitTabs.call el,
    #         # Change event
    #         event: "mouseover"

    #     # Test that new event will fire after setting it inside Tabs instance
    #     fireHoverEvent el
    #     fireHoverEvent el

    #     onactive.should.be.true
    #     beforeactive.should.be.true
    #     failactive.should.be.false
    #     ondeactive.should.be.true
    #     beforedeactive.should.be.true
    #     faildeactive.should.be.false
