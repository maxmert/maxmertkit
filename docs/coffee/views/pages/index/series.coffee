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
		@$el.css opacity: 0
		setTimeout =>
			@$el.animate opacity: 1
		, 2500
		@$size = @$el.find '#size'
		@$theme = @$el.find '#theme'
		@$name = @$el.find '#name'

		@$size.on 'click', =>
			widgets = @model.get 'widgets'
			active = @model.get 'active'
			themeActive = @model.get 'themeActive'
			sizeActive = @model.get 'sizeActive'

			if sizeActive < widgets[active].sizes.length - 1
				@model.set 'sizeActive', sizeActive + 1
			else
				@model.set 'sizeActive', 0
			
			@sizeChanger()

		@$theme.on 'click', =>
			widgets = @model.get 'widgets'
			active = @model.get 'active'
			themeActive = @model.get 'themeActive'
			sizeActive = @model.get 'sizeActive'
			
			if themeActive < widgets[active].themes.length - 1
				@model.set 'themeActive', themeActive + 1
			else
				@model.set 'themeActive', 0
			@themeChanger()

		@$name.on 'click', =>
			widgets = @model.get 'widgets'
			active = @model.get 'active'
			themeActive = @model.get 'themeActive'
			sizeActive = @model.get 'sizeActive'
			
			if active < widgets.length - 1
				@model.set 'active', active + 1
			else
				@model.set 'active', 0
			@nameChanger()
		
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
		@$el.css display: 'none'
		setTimeout =>
			@$el.fadeIn()
		, 500
		@changer()
		if @$el[0].childNodes[0]?
			$el = $(@$el[0].childNodes[0])
			$el.data 'classes', $el.attr 'class'

	changer: ->
		@$el.removeClass '-start--'
		@$el.addClass '-stop--'

		setTimeout =>
			@$el.removeClass '-stop--'
			@$el.addClass '-start--'
			if @$el[0].childNodes[0]?
				$el = $(@$el[0].childNodes[0])
				$el.attr('class', '')
				$el.attr('class', $el.data('classes'))
				$el.addClass @model.get 'name'
				$el.addClass "-#{@model.get('theme')}-"
				$el.addClass "_#{@model.get('size')}"
		, 500
		