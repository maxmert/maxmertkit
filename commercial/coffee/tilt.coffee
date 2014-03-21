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
		@$el.off ".#{@_name}.#{@_id}"
		$(window).off "resize.#{@_name}.#{@_id}"
		window.removeEventListener 'deviceorientation'
		window.removeEventListener 'orientationchange'
		super


	activate: ->
		@_orientation = (if window.orientation is 0 then "portrait" else "landscape")
		_refreshImageData.call @
		@_refreshSizes()
		@scroll = @_getScrollParent(@$el)

		if @$figureCaption.length
			@$figureCaption.on "click.#{@_name}.#{@_id}", =>
				@$figureCaption.toggleClass "_active_"

		$(window).on "resize.#{@_name}.#{@_id}", =>
			_refreshImageData.call @
		
		window.addEventListener 'deviceorientation', (e) =>
			
			if @_isVisible()
				
				axis = _axisTable[@_orientation].x
				angle = e[axis]
				percent = (angle) / 30
				if percent > 1 then percent = 1
				if percent < -1 then percent = -1

				px = ( @$el.width() - @_windowWidth / 2  ) * percent
				if not @pxPrev? then @pxPrev = px
					
				if @$img.width() > @_windowWidth
					if Math.abs(px - @pxPrev) > 0.5
						translate = "translateX(#{px}px)"

						if @style? and @style.left isnt "-50%"
							@style.left = "-50%"

						if @style?
							@_setTransform @style, translate

						# Move tilt map
						if @$tiltHandle?
							left = 100 - (percent + 1 ) / 2 * 100
							if left < 10 then left = 10
							if left > 90 then left = 90
							@$figureCaption.css({ left: "#{@$el.width() * (percent + 1 ) / 2}px", opacity: (percent * (if percent > 0 then -2 else 3) + 1)}) if @$figureCaption.length
							@$tiltHandle.css left: "#{left}%"

					@pxPrev = px

				else
					translate = "translateX(0px)"
					if @style? and @style.left isnt "0"
						@style.left = "0"
						@_setTransform @style, translate
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
	@$figureCaption = @$figure.find('figcaption')
	@deviceMobile = @_deviceMobile()
	
	if @deviceMobile
		@$el.height @_windowHeight
		@$figure.height @_windowHeight
		@$figureCaption.width @_windowWidth - 20
		@$img.height @_windowHeight
		@style = @$image[0].style

	if @deviceMobile
		if @$img.width() > @_windowWidth
			@$tilt.fadeIn() if @$tilt?
			@$img.css width: 'auto'
		else
			@$img.width @_windowWidth
			@$img.css height: 'auto'
			@$tilt.fadeOut() if @$tilt?

		

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