"use strict"

_name = "tabs"
_instances = []
_id = 0

MaxmertkitHelpers = window['MaxmertkitHelpers']

class Tabs extends MaxmertkitHelpers

	_name: _name
	_instances: _instances
	enabled: yes
	active: no

	constructor: ( @el, @options ) ->

		_options =
			# String; spy type, needed to autoinitialize tabs by attribute data-toggle
			toggle: @el.getAttribute( 'data-toggle' ) or _name

			# String; selector of modal window element, searching globally in the DOM
			target: @el.getAttribute( 'data-target' ) or null

			# String; name of the group, using when **type** is radio or checkbox
			group: @el.getAttribute( 'data-group' ) or null

			# String; event to interact with tabs
			event: @el.getAttribute( 'data-event' ) or "click"

			# Number; number of the tab to activate after initializing, begining from 0
			initial: @el.getAttribute( 'data-initial' ) or 0

			# Events
			beforeactive: ->
			onactive: ->
			failactive: ->
			beforedeactive: ->
			ondeactive: ->
			faildeactive: ->

		@options = @_merge _options, @options

		@clicker = _clicker.bind( @ )

		@_setOptions @options

		super @el, @options

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "active.#{_name}"
		@reactor.registerEvent "deactive.#{_name}"

		@reactor.dispatchEvent "initialize.#{_name}"

		_initialActivate.call @, @options.initial

	destroy: ->
		@_removeEventListener @el, @options.event, @clicker
		@el.data["kitTabs"] = null
		super

	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Tabs. You're trying to set unpropriate option – #{key}"

			switch key
				when 'event'
					@_removeEventListener @el, @options.event, @clicker

					# Set new event on tabs
					@_addEventListener @el, value, @clicker

				when 'target'
					@target = document.querySelector value

			@options[key] = value
			if typeof value is 'function' then @[key] = value

	activate: ->
		if @enabled and not @active
			_beforeactivate.call @

	deactivate: ->
		# Don't check @active to activate after initializing
		if @enabled
			_beforedeactivate.call @

	disable: ->
		@enabled = no

	enable: ->
		@enabled = yes



# ===============
# PRIVATE METHODS

_initialActivate = ( number ) ->
	for tab, index in @_instances
		if index is number
			tab.activate()
		else
			tab.deactivate()

_clicker = ->
	if not @active
		@activate()
	# else
	# 	@deactivate()

# If you have beforeactivate function
# 	it will be called here
# if you don't
# 	just activate tabs
_beforeactivate = ->
	# If we need to close all other instances on Tabs
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
	# Close other tabs
	for tab in @_instances
		if @_id isnt tab._id and tab.options.group is @options.group
			tab.deactivate()
	
	@_addClass '_active_'
	@target.style.display = ''
	@onactive?.call @el
	@reactor.dispatchEvent "active.#{_name}"
	@active = yes

# If you have beforedeactiv`te function
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
	@target.style.display = 'none'
	@reactor.dispatchEvent "deactive.#{_name}"
	@ondeactive?.call @el
	@active = no





window['Tabs'] = Tabs
window['mkitTabs'] = ( options ) ->
	result = null
	if not @data? then @data = {}

	unless @data['kitTabs']
		result = new Tabs @, options
		@data['kitTabs'] = result

	else
		if typeof options is 'object'
			@data['kitTabs']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@data['kitTabs'][options]

		result = @data['kitTabs']

	return result

if Element? then Element::tabs = window['mkitTabs']