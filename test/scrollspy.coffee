kitScrollspy = require '../coffee/scrollspy.coffee'



describe "Maxmertkit Scrollspy", ->

    Scrollspy = window['Scrollspy']
    mkitScrollspy = window['mkitScrollspy']

    # Get button element
    el = window.document.getElementById('scrollspy')

    h = 100
    t = 200
    targetH = 300
    for elem in document.querySelectorAll "#scrollspy li a"
        target = document.querySelector elem.getAttribute 'href'
        target.offsetTop = t
        target.offsetHeight = targetH
        t += targetH

    scrollspy = mkitScrollspy.call el, {}


    # Fire event on document
    fireEvent = ( element, ev ) ->
        if document.createEvent
            event = document.createEvent('HTMLEvents')
            event.initEvent(ev, true, false);
            element.dispatchEvent(event)
        else
            element.fireEvent("on#{ev}")


    it 'should store in data-kit-scrollspy attribute', ->
        if not el.dataset[ 'data-kit-scrollspy' ]?
            throw new Error('No data-kit-scrollspy attribute')

        el.dataset[ 'data-kit-scrollspy' ].should.be.an 'object'
        el.dataset[ 'data-kit-scrollspy' ].should.be.an.instanceof Scrollspy

    it 'should properly get a data-spy attribute or set default', ->
        scrollspy.options.spy.should.be.equal 'scrollspy'

    it 'should properly get a data-offset attribute or set default', ->
        scrollspy.options.offset.should.be.equal 5

    it 'should properly get a data-offset attribute or set default', ->
        mkitScrollspy.call el, { offset: 15 }
        scrollspy.options.offset.should.be.equal 15

    it 'should save this instance', ->
        scrollspy._instances.should.have.length 1

    it 'should properly destroy class instance', ->
        scrollspy.destroy()
        scrollspy._instances.should.have.length 0
        if el.dataset['data-kit-scrollspy']? then throw new Error "Dataset should be empty after destroy"

        scrollspy = mkitScrollspy.call el, { offset: 15 }
        scrollspy._instances.should.have.length 1

    it 'should properly get target container', ->
        scrollspy.target.tagName.should.be.equal 'BODY'

    it 'should properly get scrolling container for target', ->
        scrollspy.scroller.nodeName.should.be.equal '#document'

    it 'should properly get scrolling container for target', ->
        scrollspy.scroller.nodeName.should.be.equal '#document'

    it 'should initialize global events', ->
        scrollspy.reactor.events['initialize.scrollspy'].should.exist
        scrollspy.reactor.events['start.scrollspy'].should.exist
        scrollspy.reactor.events['stop.scrollspy'].should.exist

    it 'should be started', ->
        scrollspy.started.should.be.true

    it 'should have working stop() method', ->
        scrollspy.stop.should.be.a 'function'
        scrollspy.stop()
        scrollspy.started.should.be.false

    it 'should have working start() method', ->
        scrollspy.start.should.be.a 'function'
        scrollspy.start()
        scrollspy.started.should.be.true

    it 'should have working scroll event listener and activate elements properly', ->
        document.scrollTop = 300
        fireEvent document, 'scroll'
        scrollspy._hasClass('_active_', scrollspy.elements[0].element).should.be.true
        scrollspy._hasClass('_active_', scrollspy.elements[1].element).should.be.false
        scrollspy._hasClass('_active_', scrollspy.elements[2].element).should.be.false
        scrollspy._hasClass('_active_', scrollspy.elements[3].element).should.be.false

        document.scrollTop += 300
        fireEvent document, 'scroll'
        scrollspy._hasClass('_active_', scrollspy.elements[0].element).should.be.false
        scrollspy._hasClass('_active_', scrollspy.elements[1].element).should.be.true
        scrollspy._hasClass('_active_', scrollspy.elements[2].element).should.be.false
        scrollspy._hasClass('_active_', scrollspy.elements[3].element).should.be.false

        document.scrollTop += 300
        fireEvent document, 'scroll'
        scrollspy._hasClass('_active_', scrollspy.elements[0].element).should.be.false
        scrollspy._hasClass('_active_', scrollspy.elements[1].element).should.be.false
        scrollspy._hasClass('_active_', scrollspy.elements[2].element).should.be.true
        scrollspy._hasClass('_active_', scrollspy.elements[3].element).should.be.false

        document.scrollTop += 300
        fireEvent document, 'scroll'
        scrollspy._hasClass('_active_', scrollspy.elements[0].element).should.be.false
        scrollspy._hasClass('_active_', scrollspy.elements[1].element).should.be.false
        scrollspy._hasClass('_active_', scrollspy.elements[2].element).should.be.false
        scrollspy._hasClass('_active_', scrollspy.elements[3].element).should.be.true

    it 'should fire events', ->
        onactive = no
        beforeactive = no
        failactive = no
        ondeactive = no
        beforedeactive = no
        faildeactive = no

        mkitScrollspy.call el,
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

        scrollspy.stop()
        scrollspy.start()

        onactive.should.be.true
        beforeactive.should.be.true
        failactive.should.be.false
        ondeactive.should.be.true
        beforedeactive.should.be.true
        faildeactive.should.be.false
