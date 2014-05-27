kitWall = require '../coffee/wall.coffee'



describe "Maxmertkit Wall", ->

    Wall = window['Wall']
    mkitWall = window['mkitWall']

    # Get button element
    el = window.document.getElementById('wall')

    h = 100
    t = 200
    targetH = 300

    wall = mkitWall.call el, {}


    # Fire event on document
    fireEvent = ( element, ev ) ->
        if document.createEvent
            event = document.createEvent('HTMLEvents')
            event.initEvent(ev, true, false);
            element.dispatchEvent(event)
        else
            element.fireEvent("on#{ev}")


    it 'should store in kitWall attribute', ->
        if not el.data[ 'kitWall' ]?
            throw new Error('No kitWall attribute')

        el.data[ 'kitWall' ].should.be.an 'object'
        el.data[ 'kitWall' ].should.be.an.instanceof Wall

    it 'should properly get a data-kind attribute or set default', ->
        wall.options.kind.should.be.equal 'wall'

    it 'should properly set defaults', ->
        wall.options.target.should.be.equal '.-thumbnail'
        wall.options.header.should.be.equal '.-header'
        wall.options.headerFade.should.be.true
        wall.options.speed.should.be.equal 0.7
        wall.options.zoom.should.be.false
        wall.options.height.should.be.equal '100%'
        wall.options.onMobile.should.be.false

    it 'should properly get a data-offset attribute or set default', ->
        mkitWall.call el, { speed: 0.5 }
        wall.options.speed.should.be.equal 0.5

    it 'should save this instance', ->
        wall._instances.should.have.length 1

    it 'should properly destroy class instance', ->
        wall.destroy()
        wall._instances.should.have.length 0
        if el.data['kitWall']? then throw new Error "Dataset should be empty after destroy"

        wall = mkitWall.call el, {}
        wall._instances.should.have.length 1

    it 'should properly get target container', ->
        wall.target.tagName.should.be.equal 'VIDEO'

    it 'should properly get scrolling container for target', ->
        wall.scroller.nodeName.should.be.equal '#document'


    it 'should initialize global events', ->
        wall.reactor.events['initialize.wall'].should.exist
        wall.reactor.events['start.wall'].should.exist
        wall.reactor.events['stop.wall'].should.exist

    it 'should be started', ->
        wall.started.should.be.true

    it 'should have working stop() method', ->
        wall.stop.should.be.a 'function'
        wall.stop()
        wall.started.should.be.false

    it 'should have working start() method', ->
        wall.start.should.be.a 'function'
        wall.start()
        wall.started.should.be.true

    # it 'should have working scroll event listener and activate elements properly', ->
    #     document.body.scrollTop = 300
    #     fireEvent document, 'scroll'
    #     wall._hasClass('_active_', wall.elements[0].element).should.be.true
    #     wall._hasClass('_active_', wall.elements[1].element).should.be.false
    #     wall._hasClass('_active_', wall.elements[2].element).should.be.false
    #     wall._hasClass('_active_', wall.elements[3].element).should.be.false
    #
    #     document.body.scrollTop += 300
    #     fireEvent document, 'scroll'
    #     wall._hasClass('_active_', wall.elements[0].element).should.be.false
    #     wall._hasClass('_active_', wall.elements[1].element).should.be.true
    #     wall._hasClass('_active_', wall.elements[2].element).should.be.false
    #     wall._hasClass('_active_', wall.elements[3].element).should.be.false
    #
    #     document.body.scrollTop += 300
    #     fireEvent document, 'scroll'
    #     wall._hasClass('_active_', wall.elements[0].element).should.be.false
    #     wall._hasClass('_active_', wall.elements[1].element).should.be.false
    #     wall._hasClass('_active_', wall.elements[2].element).should.be.true
    #     wall._hasClass('_active_', wall.elements[3].element).should.be.false
    #
    #     document.body.scrollTop += 300
    #     fireEvent document, 'scroll'
    #     wall._hasClass('_active_', wall.elements[0].element).should.be.false
    #     wall._hasClass('_active_', wall.elements[1].element).should.be.false
    #     wall._hasClass('_active_', wall.elements[2].element).should.be.false
    #     wall._hasClass('_active_', wall.elements[3].element).should.be.true

    # it 'should fire events', ->
    #     onactive = no
    #     beforeactive = no
    #     failactive = no
    #     ondeactive = no
    #     beforedeactive = no
    #     faildeactive = no

    #     mkitWall.call el,
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

    #     wall.stop()
    #     wall.start()

    #     onactive.should.be.true
    #     beforeactive.should.be.true
    #     failactive.should.be.false
    #     ondeactive.should.be.true
    #     beforedeactive.should.be.true
    #     faildeactive.should.be.false
