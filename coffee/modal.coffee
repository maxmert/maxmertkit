_name = "modal"
_instances = []

class Modal extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	
	# =============== Public methods

	constructor: ( @btn, @options ) ->
		@$btn = $(@btn)
		
		_options =
			target: @$btn.data('target')				# Targeted modal windows
			toggle: @$btn.data('toggle') or 'modal'		# To automatically find elements which toggle modal windows
			event: "click.#{@_name}"					# Event on button to open modal
			eventClose: "click.#{@_name}"				# Event on close elements to close modal
			backdrop: no								# Close modal on click on backdrop
		
		@options = @_merge _options, @options
		

		# Reset default event functions 
		@beforeopen = @options.beforeopen
		@onopen = @options.onopen
		@beforeclose = @options.beforeclose
		@onclose = @options.onclose

		# Set modal window element
		@$el = $(document).find @options.target
		
		# Set event on button to show modal window
		@$btn.on @options.event, =>
			@open()

		# Set close on backdrop event
		if @options.backdrop
			@$el.on "click.#{@_name}", ( event ) =>
				if $(event.target).hasClass '-modal _active_'
					@close()

		# Find dismiss buttons inside modal window
		@$el.find("*[data-dismiss='modal']").on @options.event, =>
			@close()

		super @$btn, @options

	
	destroy: ->
		@$btn.off ".#{@_name}"
		super

	open: ->
		_beforeopen.call @

	close: ->
		_beforeclose.call @






# =============== Private methods


# If you have beforeopen function
# 	it will be called here
# if you don't
# 	just open modal window
_beforeopen = ->
	if @beforeopen?
		try
			deferred = @beforeopen.call @$btn
			deferred
				.done =>
					_open.call @
					
				.fail =>
					@$el.trigger "fail.#{@_name}"

		catch
			_open.call @

	else
		_open.call @

# Opens modal
# and triggers onopen
_open = ->
	@$el.addClass '_active_'
	@$el.trigger "opened.#{@_name}"
	if @onopen?
		try
			@onopen.call @$btn


# If you have beforeclose function
# 	it will be called here
# if you don't
# 	just close modal window
_beforeclose = ->
	if @beforeclose?
		try
			deferred = @beforeclose.call @$btn
			deferred
				.done =>
					_close.call @
					
				.fail =>
					@$el.trigger "fail.#{@_name}"

		catch
			_close.call @

	else
		_close.call @

# Closes modal
# and triggers onclose
_close = ->
	@$el.removeClass '_active_'
	@$el.trigger "closed.#{@_name}"
	if @onclose?
		try
			@onclose.call @$btn

			




$.fn[_name] = (options) ->
	# console.log @
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Modal(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options
			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit error. You passed into the #{_name} something wrong."))
		return