chai = require 'chai'
chai.should()
jsdom = require('jsdom').jsdom


global.document = jsdom()
global.window = document.createWindow()
global.jQuery = global.$ = require("jquery").create(window)



kitClass = require '../coffee/maxmertkit.coffee'



describe 'Maxmertkit helpers', ->

	MaxmertkitHelpers = window['MaxmertkitHelpers']
	kit = new MaxmertkitHelpers $('element'), someOption: yes
	kit2 = new MaxmertkitHelpers $('element2'), someOption: yes


	it 'should exist', ->
		MaxmertkitHelpers.should.be.a 'function'


	it 'class instance should be an object', ->
		kit.should.be.an 'object'


	# it 'class instance should have uniq _id', ->
	# 	kit._id.should.be.equal 0
	# 	kit2._id.should.be.equal 1


	it 'should push class instance to an array of instances', ->
		kit._instances.length.should.be.above 0
		kit._instances[0].should.be.an.instanceOf MaxmertkitHelpers


	# it 'class instance should have destroy() method, which pop instance from instances array', ->
	# 	kit2.destroy.should.be.a 'function'			# Check if destroy() exists
	# 	kit2.destroy().should.be.true				# Check if destroy() works
	# 	kit2.should.be.empty						# Check if class instance is empty
	# 	kit._instances.length.should.equal 1		# Check it it was deleted from instances array


	it 'should _extend options', ->
		object =
			rewriteit: no
			donttouch: yes

		kit._extend object, rewriteit: yes

		object.rewriteit.should.be.true
		object.donttouch.should.be.true
