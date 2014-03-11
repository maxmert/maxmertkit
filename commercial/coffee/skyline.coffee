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
			delay: @$el.data('delay') or 0
			activeClass: @$el.data('active-class') or '-skyline-drop'
			
			# beforeactive: ->
			# onactive: ->
			# beforeunactive: ->
			# onunactive: ->
		
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
		@$el.off ".#{@_name}"
		super

	_isActive: ->
		@$el.hasClass @options.activeClass

	
	_isVisible: ->
		@_offset.top - @_windowHeight <= @scroll.scrollTop() and @scroll.scrollTop() <= @_offset.top + @_height

	activate: ->
		@$el.addClass '-skyline'
		@scroll = @_getScrollParent(@$el)
		@_refreshSizes()

		$(@scroll).on "scroll.#{@_name}.#{@_id}", ( event ) =>
			if @_isVisible()
				if not @_isActive()
					@showTimer = setTimeout =>
						@show()
					, @options.delay
			else
				@hide()
				
			

	disable: ->
		@$el.toggleClass '_disabled_'

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