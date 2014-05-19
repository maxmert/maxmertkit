"use strict"

_name = "modal"
_instances = []
_id = 0

MaxmertkitHelpers = window['MaxmertkitHelpers']

class Modal extends MaxmertkitHelpers

	_name: _name
	_instances: _instances
	enabled: yes
	opened: no

	constructor: ( @el, @options ) ->

		_options =
			# String; spy type, needed to autoinitialize modals by attribute data-toggle
			toggle: @el.getAttribute( 'data-toggle' ) or _name

			# String; selector of modal window element, searching globally in the DOM
			target: @el.getAttribute( 'data-target' ) or null

			# String; selector inside target for modal dialog
			dialog: @el.getAttribute( 'data-dialog' ) or ".-dialog"

			# String; event to interact with button to open window
			event: @el.getAttribute( 'data-event' ) or "click"

			# String; event to interact with closer element to close window
			# Closer element should be anywhere in the DOM with attribute data-dismiss="target-selector", it will automatically initialize
			eventClose: @el.getAttribute( 'data-event-close' ) or "click"

			# Boolean; close modal window if clicked on backdrop
			backdrop:  @el.getAttribute('data-backdrop') or no

			# String; The selector of the container with whole content, except modal window, to use push animation
			push:  @el.getAttribute('data-push') or no

			# Boolean; open modal after initialize
			autoOpen: @el.getAttribute('data-autoopen') or no

			# Boolean; close other instances of Modal when current is opening
			selfish: yes


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

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "open.#{_name}"
		@reactor.registerEvent "close.#{_name}"
		# Find dialog element inside target
		@dialog = @target.querySelector @options.dialog

		# Find and init closer element inside modal element in DOM
		@closers = document.querySelectorAll "[data-dismiss='#{@options.target}']"
		@closerF = @close.bind @
		@clickerF = @clicker.bind @
		@backdropClickF = _backdropClick.bind @
		

		@_setOptions @options

		super @el, @options

		@reactor.dispatchEvent "initialize.#{_name}"

		# Open modal if autoOpen setted
		if @options.autoOpen then @open()

	destroy: ->
		@_removeEventListener @el, @options.event, @clickerF
		for closer in @closers
			@_removeEventListener closer, @options.eventClose, @closerF( @ )
		@el.data["kitModal"] = null
		super


	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Modal. You're trying to set unpropriate option – #{key}"

			switch key
				when 'event'
					@_removeEventListener @el, @options.event, @clickerF
					@_addEventListener @el, value, @clickerF

				when 'eventClose'
					for closer in @closers
						@_removeEventListener closer, @options.eventClose, @closerF
						@_addEventListener closer, value, @closerF

				when 'backdrop'
					if @options.backdrop then @_removeEventListener @el, "click", @backdropClickF
					if value then @_addEventListener @el, "click", @backdropClickF

				when 'push'
					if value
						@push = document.querySelectorAll value
					else
						@push = no

			@options[key] = value
			if typeof value is 'function' then @[key] = value

	clicker: ->
		if not @opened
			@open()
		else
			@close()

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


# ===============
# PRIVATE METHODS

_pushStart = ->
	if @push
		@_addClass '-start--', @push
		@_removeClass '-stop--', @push

_pushStop = ->
	if @push
		@_addClass '-stop--', @push
		@_removeClass '-start--', @push

		# Fix mobile webkit render bug
		# After first showing it will not be smooth
		if @push and @push.style? and @push.style['-webkit-overflow-scrolling']?
			@push.style['-webkit-overflow-scrolling'] = 'auto'

_backdropClick = ( event ) ->
	if @_hasClass('-modal', event.target) and @opened
		@close()


# If you have beforeactivate function
# 	it will be called here
# if you don't
# 	just open modal
_beforeactivate = ->
	# If we need to close all other instances on Modal
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
	if @push then @_addClass '_perspective_', document.body
	@_addClass '_no-scroll_', document.body

	@target.style.display = 'table'
	# setTimeout =>
	@_addClass '_visible_ -start--', @target
	@_addClass '_visible_ -start--', @dialog
	_pushStart.call @
	# , 1

	@onactive?.call @el
	@reactor.dispatchEvent "open.#{_name}"
	@opened = yes


# If you have beforedeactivate function
# 	it will be called here
# if you don't
# 	just close
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
	@_addClass '-stop--', @target
	@_addClass '-stop--', @dialog
	_pushStop.call @
	setTimeout =>
		@_removeClass '_visible_ -start-- -stop--', @target
		@_removeClass '_visible_ -start-- -stop--', @dialog
		@_removeClass '_no-scroll_', document.body
		if @push then @_removeClass '_perspective_', document.body
		@target.style.display = 'none'
	, 1000

	@reactor.dispatchEvent "close.#{_name}"
	@ondeactive?.call @el
	@opened = no



window['Modal'] = Modal
window['mkitModal'] = ( options ) ->
	result = null
	if not @data? then @data = {}

	unless @data['kitModal']
		result = new Modal @, options
		@data['kitModal'] = result

	else
		if typeof options is 'object'
			@data['kitModal']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@data['kitModal'][options]

		result = @data['kitModal']

	return result

if Element? then Element::modal = window['mkitModal']