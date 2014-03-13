_name = "navbar"
_instances = []
_nav = []
_id = 0

class Navbar extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	_nav: _nav
	_direction: 0
	
	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			kind: @$el.data('kind') or 'navbar'
			showOnMousemove: yes
			
			beforeactive: ->
			onactive: ->
			beforeunactive: ->
			onunactive: ->
		
		@options = @_merge _options, @options

		super @$el, @options

		@_setOptions @options

		
		@activate()

	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Navbar. You're trying to set unpropriate option."

			switch key

				when 'image'
					@$image = @options.image

				else
					@options[key] = value
					if typeof value is 'function'
						@[key] = @options[key]



	destroy: ->
		@$el.off ".#{@_name}"
		super

	show: ->
		@$el.removeClass '_hidden_'

	hide: ->
		console.log @_deviceMobile()
		if not @_deviceMobile()
			@$el.addClass '_hidden_'


	activate: ->

		if @options.showOnMousemove
			$(document).on "mousemove.kit", ( event ) =>
				if event.pageY - $(document).scrollTop() <= @$el.height() / 3
					@show()

		$(document).on "scrollstart.kit", ( event ) =>
			@_direction = $(document).scrollTop()
			if @_timer? 
				clearTimeout( @_timer )
				@_timer = null
			@hide()

		$(document).on "scrollstop.kit", =>
			scrollTop = $(document).scrollTop()
			@_direction -= scrollTop
			
			if @_direction > 0
				if scrollTop is 0
					@show()
				else
					@_timer = setTimeout =>
						@show()
					, 5000

	deactivate: ->
		if @$el.hasClass '_active_'
			_beforeunactive.call @

	disable: ->
		@$el.toggelleClass '_disabled_'






# =============== Private methods
		
_rgbToRgba = ( rgb, a ) ->
	_rgb = rgb.split(',')
	_rgba = 'rgba('
	
	for color, index in _rgb
		int = parseInt color.replace( /^\D+/g, '')
		if typeof int is "number"
			_rgba += "#{int},"

	_rgba += "#{a})"

	_rgba

$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Navbar(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Navbar. You passed into the #{_name} something wrong."))
		return


$(window).on 'load', ->
	$('[data-kind="navbar"]').each ->
		$navbar = $(@)
		$navbar.navbar($navbar.data())