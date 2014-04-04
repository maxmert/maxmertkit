chai = require 'chai'
chai.should()

jsdom = require("jsdom")

describe 'Trying first test', ->
	it 'should be a number', ->
		num = 2
		num.should.be.a( 'number' )