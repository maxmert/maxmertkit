_name = "tabs"
_instances = []
_id = 0

class Tabs extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	
	# =============== Public methods

	constructor: ( @tab, @options ) ->
		@$tab = $(@tab)

		@_id = _id++
		
		_options =
			toggle: @$tab.data('toggle') or 'tabs'	# To automatically find tabss in DOM
			group: @$tab.data('group') or null		# Some group name, like in radiotabss. Check if tabs is part of some group (like radiotabss or checkboxes)
			target: @$tab.data('target') or null	# Selector of the content for that button
			event: "click"							# Event on tabs to open tabs
			active: 0								# Activate this tab after initialize
			beforeactive: ->
			onactive: ->
			beforeunactive: ->
			onunactive: ->
		
		@options = @_merge _options, @options


		# Reset default event functions 
		@beforeactive = @options.beforeactive
		@onactive = @options.onactive
		@beforeunactive = @options.beforeunactive
		@onunactive = @options.onunactive

		
		# Set event on tabs to show tabs window
		@$tab.on @options.event, =>
			if not @$tab.hasClass '_active_'
				@activate()

		@$content = $(document).find(@options.target)
		@$content.hide()

		super @$tab, @options

	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Tabs. You're trying to set unpropriate option."

			switch key
				when 'event'
					@$tab.off "#{@options.event}.#{@_name}"

					@options.event = value

					# Set event on tabs to show tabs window
					@$tab.on "#{@options.event}.#{@_name}", =>
						if @$tab.hasClass '_active_'
							@deactivate()
						else
							@activate()

				when 'target'
					@options.target = value
					@$content = $(document).find(@options.target)

				else
					@options[key] = value
					if typeof value is 'function'
						@[key] = @options[key]

	_afterConstruct: ->
		i = 0
		while i < @_instances and @_instances[i].group isnt @options.group
			i++
		@_instances[i].activate()



	destroy: ->
		@$tab.off ".#{@_name}"
		super

	activate: ->
		_beforeactive.call @

	deactivate: ->
		if @$tab.hasClass '_active_'
			_beforeunactive.call @

	disable: ->
		@$tab.toggleClass '_disabled_'






# =============== Private methods


# If you have beforeactive function
# 	it will be called here
# if you don't
# 	just activate tabs
_beforeactive = ->
	# If we need to close all other instances on Tabs
	if @options.selfish
		@_selfish()

	if @beforeactive?
		try
			deferred = @beforeactive.call @$tab
			deferred
				.done =>
					_activate.call @
					
				.fail =>
					@$tab.trigger "fail.#{@_name}"

		catch
			_activate.call @

	else
		_activate.call @

# Opens modal
# and triggers onactive
_activate = ->
	# If radiotabs deactivate others in the group
	for tab in @_instances
		if @_id isnt tab._id and tab.options.group is @options.group
			tab.deactivate()

	@$tab.addClass '_active_'
	@$tab.trigger "activated.#{@_name}"
	@$content.show()
	if @onactive?
		try
			@onactive.call @$tab


# If you have beforeunactive function
# 	it will be called here
# if you don't
# 	just close modal window
_beforeunactive = ->
	if @beforeunactive?
		try
			deferred = @beforeunactive.call @$tab
			deferred
				.done =>					
					_deactivate.call @
					
				.fail =>
					@$tab.trigger "fail.#{@_name}"

		catch
			_deactivate.call @

	else
		_deactivate.call @

# Closes modal
# and triggers onunactive
_deactivate = ->
	@$tab.removeClass '_active_'
	@$tab.trigger "deactivated.#{@_name}"
	@$content.hide()
	if @onunactive?
		try
			@onunactive.call @$tab

			




$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Tabs(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Tabs. You passed into the #{_name} something wrong."))
		return