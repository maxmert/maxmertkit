# global describe, it, before , beforeEach, after
# require "colors"
chai = require("chai")
chaiAsPromised = require("chai-as-promised")
chai.use chaiAsPromised
chai.should()
wd = undefined
try
	wd = require("wd")
catch err
	wd = require("../../lib/main")

# enables chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness
describe "Selenium tests", ->
	@timeout 10000

	# returning promises and chai-as-promised is the best way
	describe "of chrome browser", ->
		browser = undefined

		chromeConfig =
			browserName: "chrome"
			# version: "5.0"
			platform: "Mac 10.6"
			tags: ["chrome", "maxmertkit", "mac"]
			name: "Maxmertkit chrome test"

		before ->
			browser = wd.promiseChainRemote("ondemand.saucelabs.com", 80, "maxmert", "126afb97-ba64-4552-b73a-bad8ea3dca99")

			# optional extra logging
			browser.on "status", (info) ->
				console.log "\u001b[36m%s\u001b[0m", info
				return

			browser.on "command", (eventType, command, response) ->
				console.log " > \u001b[33m%s\u001b[0m: %s", eventType, command
				return

			browser.on "http", (meth, path, data) ->
				console.log " > \u001b[33m%s\u001b[0m: %s", meth, path
				return

			browser.init chromeConfig

		beforeEach ->
			browser.get "http://maxmert.com"

		after ->
			browser.quit()

		it 'should be a good ti', ->
			browser.title().should.become 'Maxmertkit'

		return




# chai = require("chai")
# chaiAsPromised = require("chai-as-promised")
# chai.use(chaiAsPromised);
# chai.should()
#
# webdriver = require('wd')
#
# chaiAsPromised.transferPromiseness = webdriver.transferPromiseness
#
# # browser = webdriver.remote( "ondemand.saucelabs.com", 80, "maxmert", "126afb97-ba64-4552-b73a-bad8ea3dca99" )
# #
# # browser.on "status", (info) ->
# # 	console.log "\u001b[36m%s\u001b[0m", info
# # 	return
# #
# # browser.on "command", (meth, path) ->
# # 	console.log " > \u001b[33m%s\u001b[0m: %s", meth, path
# # 	return
#
# # desired =
# # 	browserName: "iphone"
# # 	version: "5.0"
# # 	platform: "Mac 10.6"
# # 	tags: ["examples"]
# # 	name: "This is an example test"
#
#
#
# describe 'Browser tests', ->
#
# 	browser = null
#
# 	iphoneConfig =
# 		browserName: "iphone"
# 		version: "5.0"
# 		platform: "Mac 10.6"
# 		tags: ["examples"]
# 		name: "This is an example test"
#
#
# 	before ->
# 		browser = webdriver.promiseChainRemote( "ondemand.saucelabs.com", 80, "maxmert", "126afb97-ba64-4552-b73a-bad8ea3dca99" )
#
# 		browser.on "status", (info) ->
# 			console.log "\u001b[36m%s\u001b[0m", info
# 			return
#
# 		browser.on "command", (meth, path) ->
# 			console.log " > \u001b[33m%s\u001b[0m: %s", meth, path
# 			return
#
# 		browser.init browserName:'chrome'
#
# 	beforeEach  ->
# 		return browser.get "http://maxmert.com/"
#
# 	after ->
# 		return browser.quit()
#
#
# 	it 'should be a good ti', ->
# 		browser.title().should.become 'Maxmertkit'
#
# # browser.init desired, ->
# #   browser.get "http://saucelabs.com/test/guinea-pig", ->
# #     browser.title (err, title) ->
# #       assert.ok ~title.indexOf("I am a page title - Sauce Labs"), "Wrong title!"
# #       browser.elementById "submit", (err, el) ->
# #         browser.clickElement el, ->
# #           browser.eval "window.location.href", (err, href) ->
# #             assert.ok ~href.indexOf("guinea"), "Wrong URL!"
# #             browser.quit()
# #             return
# #
# #           return
# #
# #         return
# #
# #       return
# #
# #     return
# #
# #   return
#
#
#
#
#
# # chai = require 'chai'
# # chai.should()
# # jsdom = require('jsdom').jsdom
# #
# #
# # global.document = jsdom()
# # global.window = document.createWindow()
# # global.jQuery = global.$ = require("jquery").create(window)
# #
# #
# #
# # kitClass = require '../coffee/maxmertkit.coffee'
# #
# #
# #
# # describe 'Maxmertkit helpers', ->
# #
# # 	MaxmertkitHelpers = window['MaxmertkitHelpers']
# # 	kit = new MaxmertkitHelpers $('element'), someOption: yes
# # 	kit2 = new MaxmertkitHelpers $('element2'), someOption: yes
# #
# #
# # 	it 'should exist', ->
# # 		MaxmertkitHelpers.should.be.a 'function'
# #
# #
# # 	it 'class instance should be an object', ->
# # 		kit.should.be.an 'object'
# #
# #
# # 	# it 'class instance should have uniq _id', ->
# # 	# 	kit._id.should.be.equal 0
# # 	# 	kit2._id.should.be.equal 1
# #
# #
# # 	it 'should push class instance to an array of instances', ->
# # 		kit._instances.length.should.be.above 0
# # 		kit._instances[0].should.be.an.instanceOf MaxmertkitHelpers
# #
# #
# # 	# it 'class instance should have destroy() method, which pop instance from instances array', ->
# # 	# 	kit2.destroy.should.be.a 'function'			# Check if destroy() exists
# # 	# 	kit2.destroy().should.be.true				# Check if destroy() works
# # 	# 	kit2.should.be.empty						# Check if class instance is empty
# # 	# 	kit._instances.length.should.equal 1		# Check it it was deleted from instances array
# #
# #
# # 	it 'should _extend options', ->
# # 		object =
# # 			rewriteit: no
# # 			donttouch: yes
# #
# # 		kit._extend object, rewriteit: yes
# #
# # 		object.rewriteit.should.be.true
# # 		object.donttouch.should.be.true
