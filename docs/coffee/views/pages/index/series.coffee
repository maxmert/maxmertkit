# ModelSocial = require('../../../models/pages/social')

exports.header = Marionette.ItemView.extend
	# model: new ModelSocial.github()
	template: $.app.templates.common.pages.index.series.header


	initialize: ->
		# @listenTo @model, 'change', @render
		@listenTo @model, 'change:size', @sizeChanger
		@listenTo @model, 'change:name', @nameChanger
		@listenTo @model, 'change:theme', @themeChanger
	
	onRender: ->
		@$size = @$el.find '#size'
		@$theme = @$el.find '#theme'
		@$name = @$el.find '#name'
		# @themeChanger()
		# @nameChanger()
		# @sizeChanger()

	sizeChanger: ->
		@$size.removeClass '-start--'
		@$size.addClass '-stop--'
		
		setTimeout =>
			@$size.removeClass '-stop--'
			@$size.addClass '-start--'
			@$size.html "_#{@model.get 'size'}"
		, 500

	themeChanger: ->
		@$theme.removeClass '-start--'
		@$theme.addClass '-stop--'
		
		setTimeout =>
			@$theme.removeClass '-stop--'
			@$theme.addClass '-start--'
			@$theme.html "-#{@model.get 'theme'}-"
		, 500

	nameChanger: ->
		@$name.removeClass '-start--'
		@$name.addClass '-stop--'
		
		setTimeout =>
			@$name.removeClass '-stop--'
			@$name.addClass '-start--'
			@$name.html @model.get 'name'
		, 500






exports.body = Marionette.ItemView.extend
	className: 'dev-series-body -fadein--'
	template: $.app.templates.common.pages.index.series.body


	initialize: ->
		@listenTo @model, 'change:name', @render
		@listenTo @model, 'change:size change:theme', @changer

	onRender: ->
		@changer()

	changer: ->
		@$el.removeClass '-start--'
		@$el.addClass '-stop--'

		setTimeout =>
			@$el.removeClass '-stop--'
			@$el.addClass '-start--'
			if @$el[0].childNodes[0]?
				$el = $(@$el[0].childNodes[0])
				$el.attr('class', '')
				$el.addClass @model.get 'name'
				$el.addClass "-#{@model.get('theme')}-"
				$el.addClass "_#{@model.get('size')}"
		, 500
		