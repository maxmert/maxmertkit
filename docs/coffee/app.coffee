Backbone.Marionette.Renderer.render = (template, data) ->
	Mustache.to_html(template, data);

$.app = new Marionette.Application()
$.app.config = require('./config').config
$.app.contents = require('./contents')
$.app.templates = require('../js/templates.js').module

# Initialize backbone wreqr 1.2 with radio, dont support in current version of marionette
$.app.commands = Backbone.Wreqr.radio.commands

RegionIndex = require("./layouts/index").module
Router = require("./routers/router").module

$.app.addRegions
	main: '#app'

$.app.addInitializer ->
	$.app.router = new Router()
	$.app.router.on 'route', ->
		$.app.vent.trigger 'route'

	Backbone.history.start
		pushState: yes
		silent: off

	# Make all hrefs use Backbone history and router
	$(document).on "click", "a:not([data-bypass])", (evt) ->
		evt.preventDefault()
		href =
			prop: $(this).prop("href")
			attr: $(this).attr("href")

		root = location.protocol + "//" + location.host
		if href.prop and href.prop.slice(0, root.length) is root
			evt.preventDefault()
			Backbone.history.navigate href.attr, true


$.app.main.show new RegionIndex()


$.app.start()
