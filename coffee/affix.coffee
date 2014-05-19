"use strict"

_name = "affix"
_instances = []
_id = 0

_lastScrollY = 0
_ticking = no

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

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "start.#{_name}"
		@reactor.registerEvent "stop.#{_name}"

		@reactor.dispatchEvent "initialize.#{_name}"

		@start()

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




# ===============
# PRIVATE METHODS

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
	@HEIGHT = @_outerHeight()
	@CONTAINER_HEIGHT = @_outerHeight(@container)
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


_setPosition = ->
	containerTop = @container.offsetTop
	
	if containerTop - @options.offset <= _lastScrollY
		if containerTop + @CONTAINER_HEIGHT - @options.offset - @HEIGHT  >= _lastScrollY
			if @el.style.position isnt 'fixed'
				@el.style.width = @el.offsetWidth
				@el.style.position = 'fixed'
				top = @options.offset
				try
					style = @el.currentStyle or getComputedStyle(@el)
				if style?
					if style.marginTop? and style.marginTop isnt '' then top += parseInt(style.marginTop)
				@el.style.top = "#{@options.offset}px"
				@el.style.bottom = 'auto'
		else
			if @el.style.position isnt 'absolute'
				if containerTop + @CONTAINER_HEIGHT - @options.offset - @HEIGHT  < _lastScrollY + @HEIGHT
					@el.style.position = 'absolute'
					@el.style.top = 'auto'
					@el.style.bottom = "#{@options.offset}px"
					@el.style.width = @el.offsetWidth
	else
		if @el.style.position isnt 'relative'
			@el.style.position = 'relative'
			@el.style.top = 'inherit'

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
