chai = require 'chai'
chai.should()
jsdom = require('jsdom').jsdom
templates = require('../docs/js/templates.js').module.tests


global.document = jsdom templates.layout
global.window = document.parentWindow
global.getComputedStyle = document.defaultView.getComputedStyle


kitClass = require '../coffee/maxmertkit.coffee'


describe 'Maxmertkit helpers', ->

	MaxmertkitHelpers = window['MaxmertkitHelpers']
	kit = new MaxmertkitHelpers document.createElement('div'), someOption: yes
	kit2 = new MaxmertkitHelpers document.createElement('div'), someOption: yes
	kit3 = new MaxmertkitHelpers document.createElement('div'), someOption: yes


	it 'should exist', ->
		MaxmertkitHelpers.should.be.a 'function'


	it 'class instance should be an object', ->
		kit.should.be.an 'object'


	it 'class instance should have uniq _id', ->
		kit._id.should.be.equal 0
		kit2._id.should.be.equal 1
		kit3._id.should.be.equal 2


	it 'should push class instance to an array of instances', ->
		kit._instances.length.should.be.above 0
		kit._instances[0].should.be.an.instanceOf MaxmertkitHelpers


	it 'class instance should have destroy() method, which pop instance from instances array', ->
		kit2.destroy.should.be.a 'function'			# Check if destroy() exists
		kit2.destroy().should.be.true				# Check if destroy() works
		kit2.should.be.empty						# Check if class instance is empty
		kit._instances.should.have.length 2		# Check it it was deleted from instances array


	it 'should _extend options', ->
		object =
			rewriteit: no
			donttouch: yes

		kit._extend object, rewriteit: yes

		object.rewriteit.should.be.true
		object.donttouch.should.be.true

	it 'should be desktop', ->
		kit._isMobile().should.be.false



	describe 'reactor', ->

		MaxmertkitEvent = window['MaxmertkitEvent']
		MaxmertkitReactor = window['MaxmertkitReactor']

		it 'should exist', ->
			kit.reactor.should.be.an 'object'
			kit.reactor.should.be.instanceof MaxmertkitReactor

		it 'should create event', ->
			kit.reactor.registerEvent 'close'
			kit.reactor.events['close'].should.exist
			kit.reactor.events['close'].should.be.instanceof MaxmertkitEvent

			kit.reactor.registerEvent 'open'
			kit.reactor.events['open'].should.exist
			kit.reactor.events['open'].should.be.instanceof MaxmertkitEvent


		it 'should add event listeners', ->
			kit.reactor.addEventListener 'close', -> return ok
			kit.reactor.events['close'].callbacks.should.have.length 1
			kit.reactor.addEventListener 'close', -> return false
			kit.reactor.events['close'].callbacks.should.have.length 2

			kit.reactor.addEventListener 'open', -> return ok
			kit.reactor.events['open'].callbacks.should.have.length 1
