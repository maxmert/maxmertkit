"use strict"

_name = "wall"
_instances = []
_id = 0
_lastScrollY = 0
_windowSize = 0

MaxmertkitHelpers = window['MaxmertkitHelpers']

class Wall extends MaxmertkitHelpers

	_name: _name
	_instances: _instances
	started: no
	active: no

	constructor: ( @el, @options ) ->

		_options =
			# String; type of user insteractive
			kind: @el.getAttribute( 'data-kind' ) or _name

			# String; selector of the scrolling block
			# target: @el.getAttribute( 'data-target' ) or 'body'

			# Number; in px, vertical offset from the top
			# offset: @el.getAttribute( 'data-offset' ) or 5

			# String; selector for the scrolling background element. For example figure or video or #video-id
			target: @el.getAttribute( 'data-target' ) or 'video'

			# Number between 0 and 1; 0 – element stands, 1 – element scrolls as usual
			speed: @el.getAttribute( 'data-speed' ) or 0.2

			zoom: @el.getAttribute( 'data-zoom' ) or no

			# String; inside string should be measures like % or px
			height: @el.getAttribute( 'data-height' ) or '100%'

			# Boolean; on spying on mobile devices
			onMobile: @el.getAttribute( 'data-on-mobile' ) or no

			# Events
			beforeactive: ->
			onactive: ->
			failactive: ->
			beforedeactive: ->
			ondeactive: ->
			faildeactive: ->

		@options = @_merge _options, @options

		# Get scrolling container with items inside
		# @target = document.querySelector @options.target
		@ticking = no
		@resizingTick = no
		@scroller = @_getScrollContainer @el
		@spy = _spy.bind(@)
		@onScroll = _onScroll.bind(@)
		@onResize = _onResize.bind(@)
		@resizing = _resizing.bind(@)

		@_setOptions @options

		super @el, @options

		@_addEventListener window, 'resize', @onResize

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "start.#{_name}"
		@reactor.registerEvent "stop.#{_name}"

		@reactor.dispatchEvent "initialize.#{_name}"

		if (not (not @options.onMobile and _getWindowSize().width < 992))
			@start( @deactivate )

	destroy: ->
		_deactivate.call @
		@el.data["kitWall"] = null
		super

	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Wall. You're trying to set unpropriate option – #{key}"

			switch key
				when 'target'
					@target = @el.querySelector @options.target

			@options[key] = value
			if typeof value is 'function' then @[key] = value

	start: (cb) ->
		if not @started
			_beforeactivate.call @, cb

	stop: (cb) ->
		if @started
			_beforedeactivate.call @, cb

	activate: ->
		if typeof @options.delay is 'function'
			delay = @options.delay()
		else
			delay = @options.delay

		@timer = setTimeout =>
			@_addClass '-start--'
			@_removeClass '-stop--'
			@active = yes
		, delay

	deactivate: ->
		if @timer?
			clearTimeout @timer
			@timer = null
		@_removeClass '-start-- _active_'
		@_addClass '-stop--'
		@active = no

	refresh: ->
		_windowSize = _getWindowSize()
		@spyParams = 
			offset: @_getPosition @el
			height: @_outerHeight()
		
		if @options.height[@options.height.length - 1] is '%'
			percent = parseInt(@options.height) / 100
			@el.style.height = "#{_windowSize.height * percent}px"
		else
			@el.style.height = @options.height


		if _windowSize.width / _windowSize.height > 16 / 9
			@target.style.width = "100%"
			@target.style.height = "auto"
		else
			@target.style.width = "auto"
			@target.style.height = "100%"

		targetSize = _getTargetSize.call @
		
		if targetSize.width - _windowSize.width > 0 then @target.style.left = "-#{(targetSize.width - _windowSize.width)/2}px" else if @target.style.left isnt '' then @target.style.left = ''
		if targetSize.height - _windowSize.height > 0 then @target.style.top = "-#{(targetSize.height - _windowSize.height)/2}px" else if @target.style.top isnt '' then @target.style.top = ''


# ===============
# PRIVATE METHODS
_getTargetSize = ->
	width: @_outerWidth @target
	height: @_outerHeight @target

_onResize = ->
	_requestResize.call @

_requestResize = ->
	if not @resizingTick
		# If element is out there
		if @resizing?
			requestAnimationFrame(@resizing)
			@resizingTick = true

_resizing = ->
	@refresh()

	if not @options.onMobile
		if _getWindowSize().width < 992
			@stop( @activate )
		else
			@start()

	@resizingTick = false

_getWindowSize = ->
	clientWidth = 0
	clientHeight = 0
	if typeof (window.innerWidth) is "number"

		#Non-IE
		clientWidth = window.innerWidth
		clientHeight = window.innerHeight
	else if document.documentElement and (document.documentElement.clientWidth or document.documentElement.clientHeight)

		#IE 6+ in 'standards compliant mode'
		clientWidth = document.documentElement.clientWidth
		clientHeight = document.documentElement.clientHeight
	else if document.body and (document.body.clientWidth or document.body.clientHeight)

		#IE 4 compatible
		clientWidth = document.body.clientWidth
		clientHeight = document.body.clientHeight

	width: clientWidth
	height: clientHeight

_onScroll = (event)  ->
	_lastScrollY = if event.target.nodeName is '#document' then (document.documentElement && document.documentElement.scrollTop) or event.target.body.scrollTop else event.target.scrollTop
	_requestTick.call @

_requestTick = ->
	if not @ticking
		requestAnimationFrame(@spy)
		@ticking = true


_spy = ->
	if @spyParams.offset.top - _windowSize.height <= _lastScrollY + @options.offset <= @spyParams.offset.top + @spyParams.height
		if not @active
			@activate()
	else
		if @active
			@deactivate()

	@ticking = no

_beforeactivate = (cb) ->
	if @beforeactive?
		try
			deferred = @beforeactive.call @el
			deferred
				.done =>
					_activate.call @, cb

				.fail =>
					@failactive?.call @el

		catch
			_activate.call @, cb

	else
		_activate.call @, cb

_activate = (cb) ->
	@refresh()
	@_addEventListener @scroller, 'scroll', @onScroll
	@onactive?.call @el
	@reactor.dispatchEvent "start.#{_name}"
	@started = yes
	cb.call @ if cb?

_beforedeactivate = ( cb ) ->
	if @beforedeactive?
		try
			deferred = @beforedeactive.call @el
			deferred
				.done =>
					_deactivate.call @, cb

				.fail =>
					@faildeactive?.call @el

		catch
			_deactivate.call @, cb

	else
		_deactivate.call @, cb

_deactivate = ( cb ) ->
	@_removeEventListener @scroller, 'scroll', @onScroll
	@reactor.dispatchEvent "stop.#{_name}"
	@ondeactive?.call @el
	@started = no
	cb.call @ if cb?


window['Wall'] = Wall
window['mkitWall'] = ( options ) ->
	result = null

	if not @data? then @data = {}

	unless @data['kitWall']
		result = new Wall @, options
		@data['kitWall'] = result

	else
		if typeof options is 'object'
			@data['kitWall']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@data['kitWall'][options]

		result = @data['kitWall']

	return result

if Element? then Element::wall = window['mkitWall']
