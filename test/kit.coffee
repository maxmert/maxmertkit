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
			# platform: "Mac 10.6"
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



		it 'should be a good title', ->
			browser.title().should.become 'Maxmertkit'

		return
