_name = "modal"

class Modal extends MaxmertkitHelpers
	
	_name: _name
	
	constructor: ( @btn, @options ) ->
		@$btn = $(@btn)
		
		_options =
			target: @$btn.data('target')				# Targeted modal windows
			toggle: @$btn.data('toggle') or 'modal'		# To automatically find elements which toggle modal windows
			event: "click.#{@_name}"						# Event on button to toggle modal
			backdrop: no								# Close modal on click on backdrop
		
		@options = @_merge _options, @options
		

		# Reset default functions
		if @options.beforeopen? and typeof @options.beforeopen is 'function'
			@beforeopen = @options.beforeopen



		@$el = $(document).find @options.target
		
		@$btn.on @options.event, =>
			@_open()

		if @options.backdrop
			@$el.on "click.#{@_name}", ( event ) =>
				if $(event.target).hasClass '-modal _active_'
					@_toggle()

		@$el.find("*[data-dismiss='modal']").on @options.event, =>
			@_toggle()

		super @$btn, @options

	destroy: ->
		@$btn.off ".#{@_name}"
		super

	# Toggle modal window
	_toggle: ->
		@$el.toggleClass '_active_'

	# Close modal
	_close: ->
		# TODO: Add beforeclose
		@$el.removeClass '_active_'

		@$el.trigger "closed.#{@_name}"


	# Open modal
	_open: ->
		if @beforeopen?
			try
				deferred = @beforeopen.call @$btn
				deferred
					.done =>
						@$el.addClass '_active_'
						@$el.trigger "opened.#{@_name}"

					.fail =>
						@$el.trigger "fail.#{@_name}"

			catch
				@$el.addClass '_active_'
				@$el.trigger "opened.#{@_name}"





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