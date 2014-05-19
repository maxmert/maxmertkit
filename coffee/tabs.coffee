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

		# Set event listener
		# @_addEventListener @el, @options.event, @clicker

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

# If you have beforeactive function
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

# If you have beforeunactive function
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

# 	# =============== Public methods
#
# 	constructor: ( @tab, @options ) ->
# 		@$tab = $(@tab)
#
# 		@_id = _id++
#
# 		_options =
# 			toggle: @$tab.data('toggle') or 'tabs'	# To automatically find tabss in DOM
# 			group: @$tab.data('group') or null		# Some group name, like in radiotabss. Check if tabs is part of some group (like radiotabss or checkboxes)
# 			target: @$tab.data('target') or null	# Selector of the content for that tabs
# 			event: "click"							# Event on tabs to open tabs
# 			active: 0								# Activate this tab after initialize
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
#
# 		# Set event on tabs to show tabs window
# 		@$tab.on @options.event, =>
# 			if not @$tab.hasClass '_active_'
# 				@activate()
#
# 		@$content = $(document).find(@options.target)
# 		@$content.hide()
#
# 		super @$tab, @options
#
#
# 	_setOptions: ( options ) ->
#
# 		for key, value of options
#
# 			if not @options[key]?
# 				if key isnt "kit-#{_name}"
# 					return console.error "Maxmertkit Tabs. You're trying to set unpropriate option."
# 				else
# 					return null
#
# 			switch key
# 				when 'event'
# 					@$tab.off "#{@options.event}.#{@_name}"
#
# 					@options.event = value
#
# 					# Set event on tabs to show tabs window
# 					@$tab.on "#{@options.event}.#{@_name}", =>
# 						if @$tab.hasClass '_active_'
# 							@deactivate()
# 						else
# 							@activate()
#
# 				when 'target'
# 					@options.target = value
# 					@$content = $(document).find(@options.target)
#
# 				else
# 					@options[key] = value
# 					if typeof value is 'function'
# 						@[key] = @options[key]
#
# 	_afterConstruct: ->
# 		i = 0
# 		while i < @_instances and @_instances[i].group isnt @options.group
# 			i++
# 		@_instances[i].activate()
#
#
#
# 	destroy: ->
# 		@$tab.off ".#{@_name}"
# 		super
#
# 	activate: ->
# 		_beforeactive.call @
#
# 	deactivate: ->
# 		if @$tab.hasClass '_active_'
# 			_beforeunactive.call @
#
# 	disable: ->
# 		@$tab.toggleClass '_disabled_'
#
#
#
#
#
#
# # =============== Private methods
#
#
# # If you have beforeactive function
# # 	it will be called here
# # if you don't
# # 	just activate tabs
# _beforeactive = ->
# 	# If we need to close all other instances on Tabs
# 	if @options.selfish
# 		@_selfish()
#
# 	if @beforeactive?
# 		try
# 			deferred = @beforeactive.call @$tab
# 			deferred
# 				.done =>
# 					_activate.call @
#
# 				.fail =>
# 					@$tab.trigger "fail.#{@_name}"
#
# 		catch
# 			_activate.call @
#
# 	else
# 		_activate.call @
#
# # Opens modal
# # and triggers onactive
# _activate = ->
# 	# If radiotabs deactivate others in the group
# 	for tab in @_instances
# 		if @_id isnt tab._id and tab.options.group is @options.group
# 			tab.deactivate()
#
# 	@$tab.addClass '_active_'
# 	@$tab.trigger "activated.#{@_name}"
# 	@$content.show()
# 	if @onactive?
# 		try
# 			@onactive.call @$tab
#
#
# # If you have beforeunactive function
# # 	it will be called here
# # if you don't
# # 	just close modal window
# _beforeunactive = ->
# 	if @beforeunactive?
# 		try
# 			deferred = @beforeunactive.call @$tab
# 			deferred
# 				.done =>
# 					_deactivate.call @
#
# 				.fail =>
# 					@$tab.trigger "fail.#{@_name}"
#
# 		catch
# 			_deactivate.call @
#
# 	else
# 		_deactivate.call @
#
# # Closes modal
# # and triggers onunactive
# _deactivate = ->
# 	@$tab.removeClass '_active_'
# 	@$tab.trigger "deactivated.#{@_name}"
# 	@$content.hide()
# 	if @onunactive?
# 		try
# 			@onunactive.call @$tab
#
#
#
#
#
#
# $.fn[_name] = (options) ->
# 	@each ->
# 		unless $.data(@, "kit-" + _name)
# 			$.data @, "kit-" + _name, new Tabs(@, options)
# 		else
# 			if typeof options is "object"
# 				$.data(@, "kit-" + _name)._setOptions options
#
#
# 			else
# 				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Tabs. You passed into the #{_name} something wrong."))
# 		return
