"use strict"

_name = "scrollspy"
_instances = []
_id = 0
_lastScrollY = 0
_ticking = no
_resizingTick = no

MaxmertkitHelpers = window['MaxmertkitHelpers']

class Scrollspy extends MaxmertkitHelpers

	_name: _name
	_instances: _instances
	started: no
	active: -1

	constructor: ( @el, @options ) ->

		_options =
			# String; type of user insteractive
			spy: @el.getAttribute( 'data-spy' ) or _name

			# String; selector of the scrolling block
			target: @el.getAttribute( 'data-target' ) or 'body'

			# Number; in px, vertical offset from the top
			offset: @el.getAttribute( 'data-offset' ) or 5

			# String; selector of items inside element
			elements: @el.getAttribute( 'data-elements' ) or 'li a'

			# String; selector of items inside target
			elementsAttr: @el.getAttribute( 'data-elements-attr' ) or 'href'

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
		@target = document.querySelector @options.target
		@scroller = @_getScrollContainer @target
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

		if (not (not @options.onMobile and _getWindowSize().width < 992)) then @start()

	destroy: ->
		_deactivate.call @
		@el.data["kitScrollspy"] = null
		super

	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Scrollspy. You're trying to set unpropriate option – #{key}"

			switch key
				when 'elements'
					@refresh()

			@options[key] = value
			if typeof value is 'function' then @[key] = value

	start: ->
		if not @started
			_beforeactivate.call @

	stop: ->
		if @started
			_beforedeactivate.call @

	refresh: ->
		elements = @el.querySelectorAll(@options.elements)
		@elements = []
		for el in elements
			targetEl = @target.querySelector(el.getAttribute( @options.elementsAttr ))
			if targetEl?
				offsetTop = targetEl.offsetTop
				offsetTop += @target.offsetTop if @target.offsetTop?
				@elements.push
					element: el
					target: targetEl
					height: targetEl.offsetHeight
					top: offsetTop



# ===============
# PRIVATE METHODS
_onResize = ->
	_requestResize.call @

_requestResize = ->
	if not _resizingTick
		requestAnimationFrame(@resizing)
		_resizingTick = true

_resizing = ->
	@refresh()

	if not @options.onMobile
		if _getWindowSize().width < 992
			@stop()
			_deactivateAllItems.call @
		else
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

_onScroll = (event)  ->
	_lastScrollY = if event.target.nodeName is '#document' then (document.documentElement && document.documentElement.scrollTop) or event.target.body.scrollTop else event.target.scrollTop
	_requestTick.call @

_requestTick = ->
	if not _ticking
		requestAnimationFrame(@spy)
		_ticking = true

_activateItem = ( itemNumber ) ->
	for el in @elements
		@_removeClass '_active_', el.element
		parent = el.element.parentNode
		@_removeClass '_active_', parent
		while parent? and parent = parent.parentNode
			if parent.nodeName is 'LI' then @_removeClass '_active_', parent

	@_addClass '_active_', @elements[itemNumber].element

	parent = @elements[itemNumber].element.parentNode
	@_addClass '_active_', parent
	while parent? and parent = parent.parentNode
		if parent.nodeName is 'LI' then @_addClass '_active_', parent


_deactivateItem = ( itemNumber ) ->
	@_removeClass '_active_', @elements[itemNumber].element
	@_removeClass '_active_', @elements[itemNumber].element.parentNode

_deactivateAllItems = ->
	for item, index in @elements
		_deactivateItem.call @, index


_spy = ( event ) ->
	i = 0
	while i < @elements.length
		if (@elements[i].top <= _lastScrollY + @options.offset <= @elements[i].top + @elements[i].height ) or ( if i < @elements.length - 1 then (@elements[i].top <= _lastScrollY + @options.offset <= @elements[i + 1].top ) )
			if not @_hasClass '_active_', @elements[i].element
				_activateItem.call @, i
		else
			if @_hasClass('_active_', @elements[i].element) and _lastScrollY + @options.offset < @elements[i].top + @elements[i].height
				_deactivateItem.call @, i
		i++

	_ticking = no

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
	@_addEventListener @scroller, 'scroll', @onScroll
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
	@reactor.dispatchEvent "stop.#{_name}"
	@ondeactive?.call @el
	@started = no


window['Scrollspy'] = Scrollspy
window['mkitScrollspy'] = ( options ) ->
	result = null

	if not @data? then @data = {}

	unless @data['kitScrollspy']
		result = new Scrollspy @, options
		@data['kitScrollspy'] = result

	else
		if typeof options is 'object'
			@data['kitScrollspy']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@data['kitScrollspy'][options]

		result = @data['kitScrollspy']

	return result

if Element? then Element::scrollspy = window['mkitScrollspy']