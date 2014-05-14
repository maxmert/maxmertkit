kitButton = require '../coffee/button.coffee'



describe "Maxmertkit Button", ->

    Button = window['Button']
    mkitButton = window['mkitButton']

    # Get button element
    el = window.document.getElementById('test-button')


    button = mkitButton.call el, { someoption: yes }

    it 'should store in data-kit-button attribute', ->
        if not el.dataset[ 'data-kit-button' ]?
            throw new Error('No data-kit-button attribute')

        el.dataset[ 'data-kit-button' ].should.be.an 'object'
        el.dataset[ 'data-kit-button' ].should.be.an.instanceof Button

    it 'should properly set defaults', ->
        button.options.toggle.should.be.equal 'button'
        button.options.type.should.be.equal 'button'
        button.options.event.should.be.equal 'click'

    it 'should save this instance', ->
        button._instances.should.have.length 1
