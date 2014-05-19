chai = require 'chai'
chai.should()
jsdom = require('jsdom').jsdom


# Set heights, because jsdom only simulate dom
document.offsetHeight = 2000
container = window.document.getElementById('container')
container.offsetHeight = 1000

kitAffix = require '../coffee/affix.coffee'
Element = require('jsdom').dom.level3.html.Element



describe "Maxmertkit Affix", ->

    Affix = window['Affix']
    mkitAffix = window['mkitAffix']

    # Get affix element
    el = window.document.getElementById('affix')

    # Fire event on document
    fireScrollEvent = ->
        if document.createEvent
            event = document.createEvent('HTMLEvents')
            event.initEvent('scroll', true, false);
            el.dispatchEvent(event)
        else
            el.fireEvent('onscroll')

    # Create instance of Affix class
    affix = mkitAffix.call el, { offset: 10 }



    it 'should store in data-kit-affix attribute', ->
        if not el.data[ 'kitAffix' ]?
            throw new Error('No data-kit-affix attribute')

        el.data[ 'kitAffix' ].should.be.an 'object'
        el.data[ 'kitAffix' ].should.be.an.instanceof Affix

    it 'should properly get a data-spy attribute or set default', ->
        affix.options.spy.should.be.equal 'affix'

    it 'should properly get a data-offset attribute or set default', ->
        affix.options.offset.should.be.equal 10

    it 'should properly get a data-offset attribute or set default', ->
        mkitAffix.call el, { offset: 15 }
        affix.options.offset.should.be.equal 15

    it 'should save this instance', ->
        affix._instances.should.have.length 1

    it 'should properly destroy class instance', ->
        affix.destroy()
        affix._instances.should.have.length 0
        if el.data['kitAffix']? then throw new Error "Dataset should be empty after destroy"

        affix = mkitAffix.call el, { offset: 15 }
        affix._instances.should.have.length 1

    it 'should get parent container', ->
        affix._getContainer().tagName.should.be.equal 'DIV'

    it 'should initialize global events', ->
        affix.reactor.events['initialize.affix'].should.exist
        affix.reactor.events['start.affix'].should.exist
        affix.reactor.events['stop.affix'].should.exist

    it 'should be started', ->
        affix.started.should.be.true

    it 'should have working stop() method', ->
        affix.stop.should.be.a 'function'
        affix.stop()
        affix.started.should.be.false

    it 'should have working start() method', ->
        affix.start.should.be.a 'function'
        affix.start()
        affix.started.should.be.true

    # it 'should have working scroll event listener and move container properly', ->
    #     affix.el.offsetHeight = 40
    #     document.body.scrollTop = 500
    #     fireScrollEvent()
    #     affix.el.style.position.should.be.equal 'relative'
    #
    #     document.body.scrollTop = 3500
    #     fireScrollEvent()
    #     affix.el.style.position.should.be.equal 'relative'
    #
    #     document.body.scrollTop = -20
    #     fireScrollEvent()
    #     affix.el.style.position.should.be.equal 'relative'


    it 'should fire events', ->
        onactive = no
        beforeactive = no
        failactive = no
        ondeactive = no
        beforedeactive = no
        faildeactive = no

        mkitAffix.call el,
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

        affix.stop()
        affix.start()

        onactive.should.be.true
        beforeactive.should.be.true
        failactive.should.be.false
        ondeactive.should.be.true
        beforedeactive.should.be.true
        faildeactive.should.be.false
