"use strict"

_name = "scrollspy"
_instances = []
_id = 0
_lastScrollY = 0
_ticking = no

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

		@_setOptions @options

		super @el, @options

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "start.#{_name}"
		@reactor.registerEvent "stop.#{_name}"

		@reactor.dispatchEvent "initialize.#{_name}"

		@start()

	destroy: ->
		_deactivate.call @
		@el.data["kitScrollspy"] = null
		super

	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Scrollspy. You're trying to set unpropriate option – #{key}"

			switch key
				# when 'target'
				# 	# TODO: Reset events here
				# 	@_removeEventListener @scroller, 'scroll', @onScroll
				# 	@target = document.querySelector value
				# 	@scroller = @_getScrollContainer @target
				# 	@_addEventListener @scroller, 'scroll', @onScroll

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
_onScroll = ->
	_lastScrollY = if event.target.nodeName is '#document' then event.target.body.scrollTop else event.target.scrollTop
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

	# =============== Public methods

# 	constructor: ( @el, @options ) ->
# 		@$el = $(@el)
#
# 		@_id = _id++
#
# 		_options =
# 			spy: @$el.data('spy') or 'scroll'			# To automatically find affix elements and make them active
# 			target: @$el.data('target') or 'body'	# Selector of the scrolling block
# 			offset:	0									# Vertical offset in pixels
# 			elements: 'li a'							# Elements to spy inside @$el
# 			elementsAttr: 'href'						# attribute of each element with ID of the target
# 			noMobile: @$el.data("no-mobile") or yes
# 			beforeactive: ->
# 			onactive: ->
# 			beforeunactive: ->
# 			onunactive: ->
#
# 		@options = @_merge _options, @options
#
#
# 		# Reset default event functions
# 		@beforeactive = @options.beforeactive
# 		@onactive = @options.onactive
# 		@beforeunactive = @options.beforeunactive
# 		@onunactive = @options.onunactive
#
# 		# Set affix window element
# 		# @$el = $(document).find @options.target
#
# 		# _position.call @
#
# 		@start()
#
# 		super @$btn, @options
#
#
# 	_setOptions: ( options ) ->
#
# 		for key, value of options
# 			if not @options[key]?
# 				if key isnt "kit-#{_name}"
# 					return console.error "Maxmertkit Scrollspy. You're trying to set unpropriate option."
# 				else
# 					return null
#
# 			# switch key
# 				# when 'target'
# 				# 	# Set affix window element
# 				# 	@$el = $(document).find @options.target
#
# 				# else
# 			@options[key] = value
#
#
#
# 	destroy: ->
# 		super
#
# 	refresh: ->
# 		_refresh.call @
#
# 	start: ->
# 		_beforestart.call @
#
# 	stop: ->
# 		_beforestop.call @
#
#
#
#
#
#
# # =============== Private methods
#
# _activateItem = ( itemNumber ) ->
# 	for element in @elements
# 		element.menu.removeClass '_active_'
#
# 	@elements[itemNumber].menu
# 		.addClass( '_active_')
# 		.parents('li')
# 			.addClass( '_active_')
#
# _deactivateItem = ( itemNumber ) ->
# 	@elements[itemNumber].menu.removeClass( '_active_')
#
#
# _refresh = ->
# 	@elements = []
#
# 	@$el.find(@options.elements).each (index, el) =>
# 		link = $(el).attr @options.elementsAttr
# 		if link?
# 			item = $(@options.target).find(link)
# 			if item.length
# 				@elements.push
# 					menu: $(el).parent()
# 					item: item.parent()
# 					itemHeight: item.parent().height()
# 					offsetTop: item.position().top
#
#
# _spy = ( event ) ->
# 	i = 0
# 	while i < @elements.length
# 		if (@elements[i].offsetTop <= (event.currentTarget.scrollTop or event.currentTarget.scrollY) + @options.offset <= @elements[i].offsetTop + @elements[i].itemHeight )
# 			if not @elements[i].menu.hasClass '_active_'
# 				_activateItem.call @, i
# 		else
# 			if @elements[i].menu.hasClass('_active_') and (event.currentTarget.scrollTop or event.currentTarget.scrollY) + @options.offset < @elements[i].offsetTop + @elements[i].itemHeight
# 				_deactivateItem.call @, i
# 		# else
# 		# 	if (event.currentTarget.scrollTop or event.currentTarget.scrollY) + @options.offset > @elements[i+1].offsetTop
# 		# 		_activateItem.call @, i + 1
# 		i++
# 	# for element, index in @elements
# 	# 	if element.offsetTop - @options.offset <= event.currentTarget.scrollTop <= element.offsetTop + @options.offset
# 	# 		_activateItem.call @, index
#
#
# _activate = ->
# 	# $(@options.target).on 'change', =>
# 	# 	_refresh.call @
# 	if @options.target is 'body'
# 		target = window
# 	else
# 		target = @options.target
#
# 	$(target).on "scroll.#{@_name}.#{@_id}", ( event ) =>
# 		_spy.call @, event
#
# 	# $(window).on "resize.#{@_name}.#{@_id}", ( event ) =>
# 	# 	@_refreshSizes()
# 	# 	if @options.noMobile
# 	# 		if @_windowWidth < 992
# 	# 			@stop()
# 	# 		else
# 	# 			@start()
#
# # If you have beforeopen function
# # 	it will be called here
# # if you don't
# # 	just open modal window
# _beforestart = ->
# 	# If we need to close all other instances on Affix
# 	# if @options.selfish
# 	# 	@_selfish()
# 	@refresh()
#
# 	if @beforeactive?
# 		try
# 			deferred = @beforeactive.call @$el
# 			deferred
# 				.done =>
# 					_start.call @
#
# 				.fail =>
# 					@$el.trigger "fail.#{@_name}"
#
# 		catch
# 			_start.call @
#
# 	else
# 		_start.call @
#
# # Opens modal
# # and triggers onopen
# _start = ->
# 	_activate.call @
# 	@$el.addClass '_active_'
# 	@$el.trigger "started.#{@_name}"
# 	if @onactive?
# 		try
# 			@onactive.call @$el
#
#
# # If you have beforeclose function
# # 	it will be called here
# # if you don't
# # 	just close modal window
# _beforestop = ->
# 	if @beforeunactive?
# 		try
# 			deferred = @beforeunactive.call @$el
# 			deferred
# 				.done =>
# 					_stop.call @
#
# 				.fail =>
# 					@$el.trigger "fail.#{@_name}"
#
# 		catch
# 			_stop.call @
#
# 	else
# 		_stop.call @
#
# # Closes modal
# # and triggers onstop
# _stop = ->
# 	if @options.target is 'body'
# 		target = window
# 	else
# 		target = @options.target
#
# 	$(target).off "scroll.#{@_name}.#{@_id}"
# 	@$el.trigger "stopped.#{@_name}"
# 	if @onunactive?
# 		try
# 			@onunactive.call @$el
#
#
#
#
#
#
# $.fn[_name] = (options) ->
# 	@each ->
# 		unless $.data(@, "kit-" + _name)
# 			$.data @, "kit-" + _name, new Scrollspy(@, options)
# 		else
# 			if typeof options is "object"
# 				$.data(@, "kit-" + _name)._setOptions options
# 			else
# 				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Affix. You passed into the #{_name} something wrong."))
# 		return
#
# # $(window).on 'load', ->
# # 	$('[data-spy="scroll"]').each ->
# # 		$navbar = $(@)
# # 		$navbar.navbar($navbar.data())
