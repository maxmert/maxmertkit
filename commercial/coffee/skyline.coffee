###
Animating show content when it's in the visible page part (page skyline),
and hide it, when you scroll out.
###

_name = "skyline"
_instances = []
_nav = []
_id = 0

class Skyline extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	_nav: _nav
	_direction: 0
	
	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			kind: @$el.data('kind') or 'skyline'
			delay: @$el.data('delay') or 0							# miliseconds before show; it's better to use css transmission-delay
			class: @$el.data('class') or '-skyline-drop'			# add this class on initialize
			activeClass: @$el.data('active-class') or '-start'	# add this class to show element
		
		@options = @_merge _options, @options

		super @$el, @options

		@_setOptions @options

		
		@activate()

	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Skyline. You're trying to set unpropriate option."

			switch key

				when 'image'
					@$image = @options.image

				else
					@options[key] = value
					if typeof value is 'function'
						@[key] = @options[key]



	destroy: ->
		$(@scroll).off ".#{@_name}"
		$(window).off ".#{@_name}"
		super

	_isActive: ->
		@$el.hasClass @options.activeClass


	activate: ->
		@$el.addClass @options.class
		@scroll = @_getScrollParent(@$el)
		@_refreshSizes()

		$(window).on "resize.#{@_name}.#{@_id}", ( event ) =>
			@_refreshSizes()

		$(@scroll).on "scroll.#{@_name}.#{@_id}", ( event ) =>
			if @_isVisible()
				if not @_isActive()
					@showTimer = setTimeout =>
						@show()
					, @options.delay
			else
				@hide()
				
			
	hide: ->
		@$el.removeClass @options.activeClass
		clearTimeout( @showTimer ) if @showTimer?

	show: ->
		@$el.addClass @options.activeClass






# =============== Private methods

$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Skyline(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Skyline. You passed into the #{_name} something wrong."))
		return


$(window).on 'load', ->
	$('[data-kind="skyline"]').each ->
		$skyline = $(@)
		$skyline.skyline($skyline.data())