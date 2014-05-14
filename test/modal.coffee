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


    it 'should store in data-kit-modal attribute', ->
        if not el.dataset[ 'data-kit-modal' ]?
            throw new Error('No data-kit-modal attribute')

        el.dataset[ 'data-kit-modal' ].should.be.an 'object'
        el.dataset[ 'data-kit-modal' ].should.be.an.instanceof Modal

    it 'should properly set defaults', ->
        modal.options.toggle.should.be.equal 'modal'
        modal.options.event.should.be.equal 'click'
        modal.options.eventClose.should.be.equal 'click'
        modal.options.dialog.should.be.equal '-dialog'
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
        if el.dataset['data-kit-modal']? then throw new Error "Dataset should be empty after destroy"

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
