kitScrollspy = require '../coffee/scrollspy.coffee'



describe "Maxmertkit Scrollspy", ->

    Scrollspy = window['Scrollspy']
    mkitScrollspy = window['mkitScrollspy']

    # Get button element
    el = window.document.getElementById('scrollspy')

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
