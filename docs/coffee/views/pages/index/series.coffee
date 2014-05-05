# ModelSocial = require('../../../models/pages/social')

exports.header = Marionette.ItemView.extend
	# model: new ModelSocial.github()
	template: $.app.templates.common.pages.index.series.header


	initialize: ->
		@listenTo @model, 'change', @render



exports.body = Marionette.ItemView.extend
	className: 'dev-series-body'
	template: $.app.templates.common.pages.index.series.body


	initialize: ->
		@listenTo @model, 'change:name', @render
		@listenTo @model, 'change:size change:theme', @changer

	onRender: ->
		@changer()

	changer: ->
		if @$el[0].childNodes[0]?
			$el = $(@$el[0].childNodes[0])
			$el.attr('class', '')
			$el.addClass @model.get 'name'
			$el.addClass "-#{@model.get('theme')}-"
			$el.addClass "_#{@model.get('size')}"