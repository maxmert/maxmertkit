"use strict"

_name = "affix"
_instances = []
_id = 0

_lastScrollY = 0
_ticking = no
_resizingTick = no

MaxmertkitHelpers = window['MaxmertkitHelpers']

class Affix extends MaxmertkitHelpers

	_name: _name
	_instances: _instances
	started: no

	# =============== Public methods

	constructor: ( @el, @options ) ->

		_options =
			# String; type of user insteractive
			spy: @el.getAttribute( 'data-spy' ) or _name

			# Number; in px, vertical offset from the top
			offset: @el.getAttribute( 'data-offset' ) or 5

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
		@_setOptions @options

		super @el, @options

		# Get scroll container
		@scroller = @_getScrollContainer()
		@container = @_getContainer()
		@onScroll = _onScroll.bind(@)
		@setPosition = _setPosition.bind(@)
		@onResize = _onResize.bind(@)
		@resizing = _resizing.bind(@)

		@_addEventListener window, 'resize', @onResize

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "start.#{_name}"
		@reactor.registerEvent "stop.#{_name}"

		@reactor.dispatchEvent "initialize.#{_name}"

		if (not (not @options.onMobile and _getWindowSize().width < 992)) then @start()

	destroy: ->
		_deactivate.call @
		@el.data["kitAffix"] = null
		super

	start: ->
		if not @started
			_beforeactivate.call @

	stop: ->
		if @started
			_beforedeactivate.call @


	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Affix. You're trying to set unpropriate option – #{key}"

			# switch key
				# when 'keyhere'
				# 	# DO something here

				# else

			@options[key] = value
			if typeof value is 'function' then @[key] = value

	refresh: ->
		@HEIGHT = @_outerHeight()
		@CONTAINER_HEIGHT = @_outerHeight(@container)




# ===============
# PRIVATE METHODS
_onResize = ->
	_requestResize.call @

_requestResize = ->
	if not _resizingTick
		# If element is out there
		if @resizing?
			requestAnimationFrame(@resizing)
			_resizingTick = true

_resizing = ->
	if not @options.onMobile
		if _getWindowSize().width < 992
			@stop()
			_setPositionRelative.call @
		else
			@refresh()
			@start()

	_resizingTick = false

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

_onScroll = ( event ) ->
	_lastScrollY = if event.target.nodeName is '#document' then (document.documentElement && document.documentElement.scrollTop) or event.target.body.scrollTop else event.target.scrollTop
	_requestTick.call @

_requestTick = ->
	if not _ticking
		requestAnimationFrame(@setPosition)
		_ticking = true


_beforeactivate = ->
	if @beforeactive?
		try
			deferred = @beforeactive.call @el
			deferred
				.done =>
					_activate.call @

				.fail =>
					@failactive?.call @el

		catch
			_activate.call @

	else
		_activate.call @

_activate = ->
	@refresh()
	@_addEventListener @scroller, 'scroll', @onScroll
	@_addClass '_active_'
	@onactive?.call @el
	@reactor.dispatchEvent "start.#{_name}"
	@started = yes

_beforedeactivate = ->
	if @beforedeactive?
		try
			deferred = @beforedeactive.call @el
			deferred
				.done =>
					_deactivate.call @

				.fail =>
					@faildeactive?.call @el

		catch
			_deactivate.call @

	else
		_deactivate.call @

_deactivate = ->
	@_removeEventListener @scroller, 'scroll', @onScroll
	@_removeClass '_active_'
	@reactor.dispatchEvent "stop.#{_name}"
	@ondeactive?.call @el
	@started = no

_setPositionFixed = ->
	@el.style.width = @el.offsetWidth
	@el.style.position = 'fixed'
	top = @options.offset
	try
		style = @el.currentStyle or getComputedStyle(@el)
	if style?
		if style.marginTop? and style.marginTop isnt '' then top += parseInt(style.marginTop)
	@el.style.top = "#{@options.offset}px"
	@el.style.bottom = 'auto'

_setPositionRelative = ->
	@el.style.position = 'relative'
	@el.style.top = 'inherit'

_setPositionAbsolute = ->
	@el.style.position = 'absolute'
	@el.style.top = 'auto'
	@el.style.bottom = "#{@options.offset}px"
	@el.style.width = @el.offsetWidth

_setPosition = ->
	containerTop = @container.offsetTop

	if containerTop - @options.offset <= _lastScrollY
		if containerTop + @CONTAINER_HEIGHT - @options.offset - @HEIGHT  >= _lastScrollY
			if @el.style.position isnt 'fixed'
				_setPositionFixed.call @
		else
			if @el.style.position isnt 'absolute'
				if containerTop + @CONTAINER_HEIGHT - @options.offset - @HEIGHT  < _lastScrollY + @HEIGHT
					_setPositionAbsolute.call @
	else
		if @el.style.position isnt 'relative'
			_setPositionRelative.call @

	_ticking = false



window['Affix'] = Affix
window['mkitAffix'] = ( options ) ->
	result = null

	if not @data? then @data = {}

	unless @data['kitAffix']
		result = new Affix @, options
		@data['kitAffix'] = result

	else
		if typeof options is 'object'
			@data['kitAffix']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@data['kitAffix'][options]

		result = @data['kitAffix']

	return result

if Element? then Element::affix = window['mkitAffix']

# if $? and jQuery?
# 	$.fn[_name] = window['mkitAffix']
# 	$(window).on 'load', ->
# 		$('[data-spy="affix"]').each ->
# 			$btn = $(@)
# 			$btn.affix($btn.data())
