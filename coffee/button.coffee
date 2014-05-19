"use strict"

_name = "button"
_instances = []
_id = 0

MaxmertkitHelpers = window['MaxmertkitHelpers']

class Button extends MaxmertkitHelpers

	_name: _name
	_instances: _instances

	active: no
	enabled: yes

	constructor: ( @el, @options ) ->

		_options =
			# String; spy type, needed to autoinitialize buttons by attribute data-toggle
			toggle: @el.getAttribute( 'data-toggle' ) or _name

			# String; button | radio | checkbox ; type of button, if radio when check button, uncheck all buttons from **group**
			type: @el.getAttribute( 'data-type' ) or _name

			# String; name of the group, using when **type** is radio or checkbox
			group: @el.getAttribute( 'data-group' ) or no

			# String; event to interact with button
			event: @el.getAttribute( 'data-event' ) or "click"

			# Boolean; if yes, then deactivate ALL instances of class Button
			selfish: @el.getAttribute( 'data-selfish' ) or no

			# Events
			beforeactive: ->
			onactive: ->
			failactive: ->
			beforedeactive: ->
			ondeactive: ->
			faildeactive: ->


		@options = @_merge _options, @options

		@clicker = _clicker.bind(@)

		@_setOptions @options

		super @el, @options

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "active.#{_name}"
		@reactor.registerEvent "deactive.#{_name}"

		@reactor.dispatchEvent "initialize.#{_name}"

	destroy: ->
		@_removeEventListener @el, @options.event, @clicker
		@el.data["kitButton"] = null
		super

	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Button. You're trying to set unpropriate option – #{key}"

			switch key
				when 'event'
					@_removeEventListener @el, @options.event, @clicker
					@_addEventListener @el, value, @clicker

			@options[key] = value
			if typeof value is 'function' then @[key] = value

	activate: ->
		if @enabled and not @active
			_beforeactivate.call @

	deactivate: ->
		if @enabled and @active
			_beforedeactivate.call @

	disable: ->
		@enabled = no

	enable: ->
		@enabled = yes



# ===============
# PRIVATE METHODS

_clicker = ->
	if not @active
		@activate()
	else
		@deactivate()

# If you have beforeactive function
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
	# If radiobutton deactivate others in the group
	if @options.type is 'radio'
		for button in @_instances
			if @_id isnt button._id and button.options.type is 'radio' and button.options.group is @options.group
				button.deactivate()

	@_addClass '_active_'
	@onactive?.call @el
	@reactor.dispatchEvent "active.#{_name}"
	@active = yes


# If you have beforedeactive function
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
	@_removeClass '_active_'
	@reactor.dispatchEvent "deactive.#{_name}"
	@ondeactive?.call @el
	@active = no





window['Button'] = Button
window['mkitButton'] = ( options ) ->
	result = null
	if not @data? then @data = {}

	unless @data['kitButton']
		result = new Button @, options
		@data['kitButton'] = result

	else
		if typeof options is 'object'
			@data['kitButton']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@data['kitButton'][options]

		result = @data['kitButton']

	return result

if Element? then Element::button = window['mkitButton']

# if $? and jQuery?
# 	$.fn.button = window['mkitButton']
# 	$(window).on 'load', ->
# 		$('[data-target="button"]').each ->
# 			$btn = $(@)
# 			$btn.button($btn.data())