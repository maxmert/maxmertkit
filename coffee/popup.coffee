"use strict"

_name = "popup"
_instances = []
_id = 0

MaxmertkitHelpers = window['MaxmertkitHelpers']

class Popup extends MaxmertkitHelpers

	_name: _name
	_instances: _instances

	opened: no
	enabled: yes

	constructor: ( @el, @options ) ->

		_options =
			# String; spy type, needed to autoinitialize modals by attribute data-toggle
			toggle: @el.getAttribute( 'data-toggle' ) or _name

			# String; selector of popup element, searching globally in the DOM
			target: @el.getAttribute( 'data-target' ) or null

			# String; selector inside target for popup dialog
			dialog: @el.getAttribute( 'data-dialog' ) or ".-content"

			# String; event to interact with button to open popup
			event: @el.getAttribute( 'data-event' ) or "click"

			# String; event to interact with closer element to close popup
			# Closer element should be anywhere in the DOM with attribute data-dismiss="target-selector", it will automatically initialize
			eventClose: @el.getAttribute( 'data-event-close' ) or "click"

			# Boolean; open popup after initialize
			autoOpen: @el.getAttribute('data-autoopen') or no

			position:
				# String; vertical position of target in regard to element
				vertical: @el.getAttribute( 'data-position-vertical' ) or 'top'

				# String; horizontal position of target in regard to element
				horizontal: @el.getAttribute( 'data-position-horizontal' ) or 'center'

			# Numbers; offset of target in regard to element
			offset:
				horizontal: @el.getAttribute( 'data-offset-horizontal' ) or 0
				vertical: @el.getAttribute( 'data-offset-vertical' ) or 0

			# Boolean; close popup when unfocus the button or popup
			closeOnUnfocus: @el.getAttribute( 'data-close-unfocus' ) or no

			# Boolean; close popup when window resizing
			closeOnResize: @el.getAttribute( 'data-close-resize' ) or yes

			# Boolean; close other instances of Modal when current is opening
			selfish: @el.getAttribute( 'data-selfish' ) or yes


			# Events
			beforeactive: ->
			onactive: ->
			failactive: ->
			beforedeactive: ->
			ondeactive: ->
			faildeactive: ->

		@options = @_merge _options, @options

		# Find modal element in DOM
		@target = document.querySelector @options.target

		# Find and init closer element inside modal element in DOM
		@closers = document.querySelectorAll "[data-dismiss='#{@options.target}']"

		# Find dialog element inside target
		@dialog = @target.querySelector @options.dialog

		# Initialize functions
		@closeUnfocus = _closeUnfocus.bind @
		@clicker = _clicker.bind @
		@closer = @close.bind @

		@_setOptions @options

		super @el, @options

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "open.#{_name}"
		@reactor.registerEvent "close.#{_name}"

		@reactor.dispatchEvent "initialize.#{_name}"

		# Open popup if autoOpen setted
		if @options.autoOpen then @open()

	destroy: ->
		@_removeEventListener @el, @options.event, @clicker
		@_removeEventListener document, @options.event, @closeUnfocus
		@_removeEventListener window, "resize", @closer
		for closer in @closers
			@_removeEventListener closer, @options.eventClose, @closer
		@el.data["kitPopup"] = null
		super

	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Modal. You're trying to set unpropriate option – #{key}"

			switch key
				when 'event'
					@_removeEventListener @el, @options.event, @clicker
					@_addEventListener @el, value, @clicker

				when 'eventClose'
					for closer in @closers
						@_removeEventListener closer, @options.eventClose, @closer
						@_addEventListener closer, value, @closer

				when 'position'
					@_removeClass "_top_ _bottom_ _left_ _right_ _center_ _middle_", @target
					@_addClass "_#{@options.position.vertical}_ _#{@options.position.horizontal}_", @target

				when 'closeOnUnfocus'
					@_removeEventListener document, @options.event, @closeUnfocus
					if value
						@_addEventListener document, @options.event, @closeUnfocus

				when 'closeOnResize'
					@_removeEventListener window, "resize", @closer
					if value
						@_addEventListener window, "resize", @closer

			@options[key] = value
			if typeof value is 'function' then @[key] = value

	open: -> @activate()
	close: -> @deactivate()

	activate: ->
		if @enabled and not @opened
			_beforeactivate.call @

	deactivate: ->
		if @enabled and @opened
			_beforedeactivate.call @

	disable: ->
		@enabled = no

	enable: ->
		@enabled = yes

	setPosition: ->
		pos = @el.getBoundingClientRect()
		scrollParentTarget = @_getContainer @target
		btnOffset = @_getPosition()

		if scrollParentTarget? and ((scrollParentTarget.activeElement? and scrollParentTarget.activeElement.nodeName isnt 'BODY') or (scrollParentTarget.nodeName? and (scrollParentTarget.nodeName isnt 'BODY' and scrollParentTarget.nodeName isnt '#document')))
			btnOffset.top = btnOffset.top - scrollParentTarget.offsetTop
			btnOffset.left = btnOffset.left - scrollParentTarget.offsetLeft

		btnSize =
			width: @_outerWidth()
			height: @_outerHeight()

		@target.style.visibility = 'hidden'
		@target.style.display = 'block'

		arrow = @target.querySelector '.-arrow'
		arrowSize =
			width: @_outerWidth arrow
			height: @_outerHeight arrow

		targetSize =
			width: @_outerWidth @target
			height: @_outerHeight @target

		@target.style.display = 'none'
		@target.style.visibility = 'visible'

		switch @options.position.vertical

			when 'top'
				newTop = btnOffset.top - targetSize.height - @options.offset.vertical

			when 'bottom'
				newTop = btnOffset.top + btnSize.height + @options.offset.vertical

			when 'middle' or 'center'
				newTop = btnOffset.top + btnSize.height / 2 - targetSize.height / 2

		switch @options.position.horizontal

			when 'center' or 'middle'
				newLeft = btnOffset.left + btnSize.width / 2 - targetSize.width / 2

			when 'left'
				newLeft = btnOffset.left - targetSize.width -  @options.offset.horizontal

			when 'right'
				newLeft = btnOffset.left + btnSize.width + @options.offset.horizontal

		@target.style.left = "#{newLeft}px"
		@target.style.top = "#{newTop}px"

		true




# ===============
# PRIVATE METHODS

_clicker = ->
	if not @opened
		@open()
	else
		@close()

_closeUnfocus = ( event ) ->
	classes = '.' + @el.className.split(' ').join('.')
	if not @_closest(classes, event.target)? and event.target isnt @el
		@close()


# If you have beforeactivate function
# 	it will be called here
# if you don't
# 	just activate button
_beforeactivate = ->
	# If we need to close all other instances on Button
	if @options.selfish
		@_selfish()

	if @beforeactive?
		try
			deferred = @beforeactive.call @el
			deferred
				.done =>
					_activate.call @

				.fail =>
					@faildeactive?.call @el

		catch
			_activate.call @

	else
		_activate.call @


_activate = ->
	@setPosition()
	@target.style.display = ''
	@_addClass '_active_', @target
	@onactive?.call @el
	@reactor.dispatchEvent "open.#{_name}"
	@opened = yes


# If you have beforedeactivate function
# 	it will be called here
# if you don't
# 	just deactivate
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
	@_removeClass '_active_', @target
	@reactor.dispatchEvent "close.#{_name}"
	@ondeactive?.call @el
	@opened = no





window['Popup'] = Popup
window['mkitPopup'] = ( options ) ->
	result = null
	if not @data? then @data = {}

	unless @data['kitPopup']
		result = new Popup @, options
		@data['kitPopup'] = result

	else
		if typeof options is 'object'
			@data['kitPopup']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@data['kitPopup'][options]

		result = @data['kitPopup']

	return result


if Element? then Element::popup = window['mkitPopup']

if jQuery?
	$.fn[_name] = (options) ->
		@each ->
			window['mkitPopup'].call( @, options )
