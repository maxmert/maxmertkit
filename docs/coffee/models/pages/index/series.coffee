exports.model = Backbone.Model.extend
	
	next: ->
		active = @get('active')
		themeActive = @get('themeActive')
		sizeActive = @get('sizeActive')
		widgets = @get('widgets')
		len = widgets.length
		if sizeActive < widgets[active].themes.length - 1
			@set('sizeActive', sizeActive + 1)
		else
			@set('sizeActive', 0)
			if themeActive < widgets[active].themes.length - 1
				@set('themeActive', themeActive + 1)
			else
				@set('themeActive', 0)
				if active < len - 1 then @set( 'active', active + 1) else @set( 'active', 0)

	prev: ->
		active = @get('active')
		themeActive = @get('themeActive')
		sizeActive = @get('sizeActive')
		widgets = @get('widgets')
		len = widgets.length
		if sizeActive < widgets[active].themes.length - 1
			@set('sizeActive', sizeActive + 1)
		else
			@set('sizeActive', 0)
			if themeActive < widgets[active].themes.length - 1
				@set('themeActive', themeActive + 1)
			else
				@set('themeActive', 0)
				if active > 0 then @set( 'active', active - 1) else @set( 'active', len - 1)

	defaults:
		name: ''
		theme: ''
		size: ''
		body: ''
		widgets: []
		active: 0
		themeActive: 0
		sizeActive: 0