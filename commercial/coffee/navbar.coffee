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
		if not @_deviceMobile()
			@$el.removeClass '_hidden_'

	hide: ->
		if not @_deviceMobile()
			@$el.addClass '_hidden_'

	activate: ->
		@_refreshSizes()

		if $(document).scrollTop() > @_height
			@hide()

		if @options.showOnMousemove
			$(document).on "mousemove.#{@_name}", ( event ) =>
				scrollTop = $(document).scrollTop()
				if event.pageY - scrollTop <= @_height and scrollTop > @_height
					if not @$el.hasClass '_shaded_'
						_setShaded.call @, scrollTop
					if @$el.hasClass '_hidden_'
						@show()

		$(document).on "scrollstart.#{@_name}", ( event ) =>
			scrollTop = $(document).scrollTop()
			# @_direction = scrollTop

			if scrollTop > @_height
				@hide()
			
			_setShaded.call @, scrollTop
			
			

		$(document).on "scrollstop.#{@_name}", =>
			
			scrollTop = $(document).scrollTop()

			if scrollTop > @_height
				@hide()
			else
				@show()

			setTimeout =>
				_setShaded.call @, scrollTop
			, 500

			# @_direction = scrollTop - @_direction
			
			# if @_direction < 0
			# 	@show()

			
	deactivate: ->
		if @$el.hasClass '_active_'
			_beforeunactive.call @

	disable: ->
		@$el.toggelleClass '_disabled_'






# =============== Private methods

_setShaded = ( scrollTop ) ->
	if scrollTop > @_height and not @$el.hasClass '_shaded_'
		@$el.addClass '_shaded_'
	else
		@$el.removeClass '_shaded_'

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