_name = "button"
_instances = []
_id = 0

class Button extends MaxmertkitHelpers

	_name: _name
	_instances: _instances

	# =============== Public methods

	constructor: ( @btn, @options ) ->
		@$btn = $(@btn)

		@_id = _id++

		_options =
			toggle: @$btn.data('toggle') or 'button'	# To automatically find buttons in DOM
			group: @$btn.data('group') or null			# Some group name, like in radiobuttons. Check if button is part of some group (like radiobuttons or checkboxes)
			type: @$btn.data('type') or 'button'		# button/radio/checkbox. Defines behaviour of the button
			event: "click"								# Event on button to open button
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


		# Set event on button to show button window
		@$btn.on @options.event, =>
			if not @$btn.hasClass '_active_'
				@activate()
			else
				@deactivate()

		# Set event on button to deactivate button window
		# but only if show and deactivate events are not the same
		@$btn.on @options.eventClose, =>
			if @options.event isnt @options.eventClose
				@deactivate()

		# set position classes
		@$btn.removeClass '_active_ _disabled_ _loading_'

		super @$btn, @options


	_setOptions: ( options ) ->

		for key, value of options

			if not @options[key]?
				if key isnt "kit-#{_name}"
					return console.error "Maxmertkit Button. You're trying to set unpropriate option – #{key}"
				else
					return null

			switch key
				when 'event'
					@$btn.off "#{@options.event}.#{@_name}"

					@options.event = value

					# Set event on button to show button window
					@$btn.on "#{@options.event}.#{@_name}", =>
						if @$btn.hasClass '_active_'
							@deactivate()
						else
							@activate()

				else
					@options[key] = value
					if typeof value is 'function'
						@[key] = @options[key]



	destroy: ->
		@$btn.off ".#{@_name}"
		super

	activate: ->
		_beforeactive.call @

	deactivate: ->
		if @$btn.hasClass '_active_'
			_beforeunactive.call @

	disable: ->
		@$btn.toggleClass '_disabled_'






# =============== Private methods


# If you have beforeactive function
# 	it will be called here
# if you don't
# 	just activate button
_beforeactive = ->
	# If we need to close all other instances on Button
	if @options.selfish
		@_selfish()

	if @beforeactive?
		try
			deferred = @beforeactive.call @$btn
			deferred
				.done =>
					_activate.call @

				.fail =>
					@$btn.trigger "fail.#{@_name}"

		catch
			_activate.call @

	else
		_activate.call @

# Opens modal
# and triggers onactive
_activate = ->
	# If radiobutton deactivate others in the group
	if @options.type is 'radio'
		for button in @_instances
			if @_id isnt button._id and button.options.type is 'radio' and button.options.group is @options.group
				button.deactivate()

	@$btn.addClass '_active_'
	@$btn.trigger "activated.#{@_name}"
	if @onactive?
		try
			@onactive.call @$btn


# If you have beforeunactive function
# 	it will be called here
# if you don't
# 	just close modal window
_beforeunactive = ->
	if @beforeunactive?
		try
			deferred = @beforeunactive.call @$btn
			deferred
				.done =>
					_deactivate.call @

				.fail =>
					@$btn.trigger "fail.#{@_name}"

		catch
			_deactivate.call @

	else
		_deactivate.call @

# Closes modal
# and triggers onunactive
_deactivate = ->
	@$btn.removeClass '_active_'
	@$btn.trigger "deactivated.#{@_name}"
	if @onunactive?
		try
			@onunactive.call @$btn






$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Button(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				if typeof options is "string" and options.charAt(0) isnt "_"
					$.data(@, "kit-" + _name)[options]
				else
					console.error("Maxmertkit Button. You passed into the #{_name} something wrong.\n#{options}")
		return

$(window).on 'load', ->
	$('[data-toggle="button"]').each ->
		$btn = $(@)
		$btn.button($btn.data())
