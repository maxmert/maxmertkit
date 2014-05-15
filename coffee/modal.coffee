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
			dialog: @el.getAttribute( 'data-dialog' ) or "-dialog"

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

		# Find and init closer element inside modal element in DOM
		@closers = document.querySelectorAll "[data-dismiss='#{@options.target}']"

		# Find dialog element inside target
		@dialog = @target.querySelector @options.dialog

		@_setOptions @options

		super @el, @options

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "open.#{_name}"
		@reactor.registerEvent "close.#{_name}"

		@reactor.dispatchEvent "initialize.#{_name}"

		# Open modal if autoOpen setted
		if @options.autoOpen then @open()

	destroy: ->
		@_removeEventListener @el, @options.event, @clicker.bind( @ )
		for closer in @closers
			@_removeEventListener closer, @options.eventClose, @close.bind( @ )
		@el.dataset["data-kit-#{@_name}"] = null
		super


	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Modal. You're trying to set unpropriate option – #{key}"

			switch key
				when 'event'
					@_removeEventListener @el, @options.event, @clicker.bind( @ )
					@_addEventListener @el, value, @clicker.bind( @ )

				when 'eventClose'
					for closer in @closers
						@_removeEventListener closer, @options.eventClose, @close.bind( @ )
						@_addEventListener closer, value, @close.bind( @ )

				when 'backdrop'
					if @options.backdrop then @_removeEventListener @el, "click", _backdropClick.bind( @ )
					if value then @_addEventListener @el, "click", _backdropClick.bind( @ )

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


# If you have beforeactive function
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


# If you have beforeunactive function
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
	@_addClass '-stop--'
	@_addClass '-stop--', @dialog
	_pushStop.call @
	setTimeout =>
		@_removeClass '_visible_ -start-- -stop--'
		@_removeClass '_visible_ -start-- -stop--', @dialog
		@_removeClass '_no-scroll_', document.body
		if @push then @_removeClass '_perspective_', document.body
		@el.style.display = 'none'
	, 1000

	@reactor.dispatchEvent "close.#{_name}"
	@ondeactive?.call @el
	@opened = no



window['Modal'] = Modal
window['mkitModal'] = ( options ) ->
	result = null
	if not @dataset? then @dataset = {}

	unless @dataset['data-kit-modal']
		result = new Modal @, options
		@dataset['data-kit-modal'] = result

	else
		if typeof options is 'object'
			@dataset['data-kit-modal']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@dataset['data-kit-modal'][options]

		result = @dataset['data-kit-modal']

	return result


# 	constructor: ( @btn, @options ) ->
# 		@$btn = $(@btn)
#
# 		_options =
# 			target: @$btn.data('target')				# Targeted modal windows
# 			toggle: @$btn.data('toggle') or 'modal'		# To automatically find elements which toggle modal windows
# 			event: "click.#{@_name}"					# Event on button to open modal
# 			eventClose: "click.#{@_name}"				# Event on close elements to close modal
# 			backdrop: @$btn.data('backdrop') or no	# Close modal on click on backdrop
# 			push: @$btn.data('push') or no			# The selector of the container with whole content, except modal window, to use push animation
#
# 			beforeactive: ->
# 			onactive: ->
# 			beforeunactive: ->
# 			onunactive: ->
#
# 		@options = @_merge _options, @options
#
# 		# Set modal window element
# 		@$el = $(document).find @options.target
#
# 		# Set event on button to show modal window
# 		@$btn.on @options.event, ( event ) =>
# 			event.preventDefault()
# 			@open()
#
# 		# super @$el, @options
#
#
# 		@_setOptions @options
#
#
#
#
#
# 		# Find dismiss buttons inside modal window
# 		@$el.find("*[data-dismiss='modal']").on @options.event, =>
# 			@close()
#
# 		# @close()
#
# 		super @$btn, @options
#
# 		# Register events to close popups when modal closed
# 		@reactor.registerEvent "close.modal"
#
# 	_setOptions: ( options ) ->
#
# 		for key, value of options
#
# 			if not @options[key]?
# 				if key isnt "kit-#{_name}"
# 					return console.error "Maxmertkit Modal. You're trying to set unpropriate option – #{key}"
# 				else
# 					return null
#
# 			switch key
#
# 				when 'backdrop'
# 					if value
# 						@$el.on "click.#{@_name}", ( event ) =>
# 							if $(event.target).hasClass('-modal _active_') or $(event.target).hasClass('-carousel')
# 								@close()
#
# 				when 'push'
# 					if value
# 						push = $(document).find value
# 						if push.length
# 							@$push = $(document).find value
#
#
#
# 			@options[key] = value
# 			if typeof value is 'function'
# 				@[key] = @options[key]
#
#
# 	destroy: ->
# 		@$btn.off ".#{@_name}"
# 		super
#
# 	open: ->
# 		_beforeopen.call @
#
# 	close: ->
# 		_beforeclose.call @
#
#
#
#
#
#
# # =============== Private methods
#
# _pushStart = ->
# 	if @$push?
# 		@$push.addClass '-start--'
# 		@$push.removeClass '-stop--'
#
# _pushStop = ->
# 	if @$push?
# 		@$push.addClass '-stop--'
# 		@$push.removeClass '-start--'
#
# 		# Fix mobile webkit render bug
# 		# After first showing it will not be smooth
# 		if @$push[0]? and @$push[0].style? and @$push[0].style['-webkit-overflow-scrolling']?
# 			@$push[0].style['-webkit-overflow-scrolling'] = 'auto'
#
#
#
# _beforeopen = ->
# 	if @beforeopen?
# 		try
# 			deferred = @beforeopen.call @$btn
# 			deferred
# 				.done =>
# 					_open.call @
#
# 				.fail =>
# 					@$el.trigger "fail.#{@_name}"
#
# 		catch
# 			_open.call @
#
# 	else
# 		_open.call @
#
# # Opens modal
# # and triggers onopen
# _open = ->
# 	if @$push?
# 		$('body').addClass '_perspective_'
# 	@$el.css display: 'table'
# 	setTimeout =>
# 		@$el.addClass '_visible_ -start--'
# 		@$el.find('.-dialog').addClass '_visible_ -start--'
# 		_pushStart.call @
# 	, 1
# 	$('body').addClass '_no-scroll_'
# 	@$el.trigger "opened.#{@_name}"
# 	if @onopen?
# 		try
# 			@onopen.call @$btn
#
#
# # If you have beforeclose function
# # 	it will be called here
# # if you don't
# # 	just close modal window
# _beforeclose = ->
# 	if @beforeclose?
# 		try
# 			deferred = @beforeclose.call @$btn
# 			deferred
# 				.done =>
# 					_close.call @
#
# 				.fail =>
# 					@$el.trigger "fail.#{@_name}"
#
# 		catch
# 			_close.call @
#
# 	else
# 		_close.call @
#
# # Closes modal
# # and triggers onclose
# _close = ->
# 	@$el.addClass '-stop--'
# 	@$el.find('.-dialog').addClass '-stop--'
# 	_pushStop.call @
# 	setTimeout =>
# 		@$el.removeClass '_visible_ -start-- -stop--'
# 		@$el.find('.-dialog').removeClass '_visible_ -start-- -stop--'
# 		$('body').removeClass '_no-scroll_'
# 		if @$push?
# 			$('body').removeClass '_perspective_'
# 		@$el.hide()
# 	, 1000
# 	@$el.trigger "closed.#{@_name}"
# 	@reactor.dispatchEvent "close.modal"
# 	if @onclose?
# 		try
# 			@onclose.call @$btn
#
#
#
#
#
#
# $.fn[_name] = (options) ->
# 	# console.log @
# 	@each ->
# 		unless $.data(@, "kit-" + _name)
# 			$.data @, "kit-" + _name, new Modal(@, options)
# 		else
# 			if typeof options is "object"
# 				$.data(@, "kit-" + _name)._setOptions options
# 			else
# 				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit error. You passed into the #{_name} something wrong."))
# 		return
#
# $(window).on 'load', ->
# 	$('[data-toggle="modal"]').each ->
# 		$modal = $(@)
# 		$modal.modal($modal.data())
