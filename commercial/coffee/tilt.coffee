_name = "tilt"
_instances = []
_nav = []
_id = 0
_axisTable =
	landscape:
		x: "beta"
		y: "gamma"
		z: "alpha"

	portrait:
		y: "beta"
		x: "gamma"
		z: "alpha"

class Tilt extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	_nav: _nav
	
	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			kind: @$el.data('kind') or 'tilt'
			image: @$el.find('.-thumbnail')
			map: yes
			
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
				return console.error "Maxmertkit Tilt. You're trying to set unpropriate option."

			switch key

				when 'image'
					@$image = @options.image

				when 'map'
					if value
						delete @$tilt if @$tilt?
						delete @$tiltHandle if @$tiltHandle?
						
						$tilt = @$el.find('.-tilt')
						if $tilt.length
							@$tilt = $tilt
							@$tiltHandle = @$tilt.find('.-tilt-handle')

				else
					@options[key] = value
					if typeof value is 'function'
						@[key] = @options[key]



	destroy: ->
		@$el.off ".#{@_name}"
		$(document).off "scroll.#{@_name}.#{@_id}"
		$(window).off "resize.#{@_name}.#{@_id}"
		super


	activate: ->
		@_orientation = (if window.orientation is 0 then "portrait" else "landscape")
		_refreshImageData.call @

		$(window).on "resize.#{@_name}.#{@_id}", =>
			_refreshImageData.call @
		
		window.addEventListener 'deviceorientation', (e) =>
			axis = _axisTable[@_orientation].x
			angle = e[axis]
			percent = (angle) / 30
			if percent > 1 then percent = 1
			if percent < -1 then percent = -1

			px = ( @$el.width() - @_windowWidth / 2  ) * percent
				
			if @$img.width() > @_windowWidth
				translate = "translateX(#{px}px)"

				if @style.left isnt "-50%"
					@style.left = "-50%"

				@style.webkitTransform = translate
				@style.MozTransform = translate
				@style.transform = translate

				# Move tilt map
				if @$tiltHandle?
					left = 100 - (percent + 1 ) / 2 * 100
					@$figure.find('figcaption').css left: "#{left}%"
					if left < 10 then left = 10
					if left > 90 then left = 90
					@$tiltHandle.css left: "#{left}%"

			else
				translate = "translateX(0px)"
				if @style.left isnt "0"
					@style.left = "0"
					@style.webkitTransform = translate
					@style.MozTransform = translate
					@style.transform = translate
		, false

		window.addEventListener 'orientationchange', (e) =>
			_refreshImageData.call @
			@_orientation = (if window.orientation is 0 then "portrait" else "landscape")
		, false

		
		@$el.addClass '_active_'

	deactivate: ->
		if @$el.hasClass '_active_'
			_beforeunactive.call @

	disable: ->
		@$el.toggelleClass '_disabled_'






# =============== Private methods
_refreshImageData = ->
	@_windowHeight = $(window).height()
	@_windowWidth = $(window).width()
	@$img = @$el.find('img')
	@$figure = @$el.find('figure')
	@deviceMobile = @_deviceMobile()
	
	if @deviceMobile
		@$el.height @_windowHeight
		@$img.height @_windowHeight
		@$figure.height @_windowHeight
		@style = @$image[0].style

	if @$img.width() > @_windowWidth
		@$tilt.fadeIn()
	else
		@$tilt.fadeOut()

$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Tilt(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Tilt. You passed into the #{_name} something wrong."))
		return

$(window).on 'load', ->
	$('[data-kind="tilt"]').each ->
		$tilt = $(@)
		$tilt.tilt($tilt.data())