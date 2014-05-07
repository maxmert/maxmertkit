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
			backdrop: @$btn.data('backdrop') or no	# Close modal on click on backdrop
			push: @$btn.data('push') or no			# The selector of the container with whole content, except modal window, to use push animation

			beforeactive: ->
			onactive: ->
			beforeunactive: ->
			onunactive: ->

		@options = @_merge _options, @options

		# Set modal window element
		@$el = $(document).find @options.target

		# Set event on button to show modal window
		@$btn.on @options.event, ( event ) =>
			event.preventDefault()
			@open()

		# super @$el, @options


		@_setOptions @options





		# Find dismiss buttons inside modal window
		@$el.find("*[data-dismiss='modal']").on @options.event, =>
			@close()

		# @close()

		super @$btn, @options

	_setOptions: ( options ) ->

		for key, value of options

			if not @options[key]?
				return console.error "Maxmertkit Modal. You're trying to set unpropriate option – #{key}"

			switch key

				when 'backdrop'
					if value
						@$el.on "click.#{@_name}", ( event ) =>
							if $(event.target).hasClass('-modal _active_') or $(event.target).hasClass('-carousel')
								@close()

				when 'push'
					if value
						push = $(document).find value
						if push.length
							@$push = $(document).find value



			@options[key] = value
			if typeof value is 'function'
				@[key] = @options[key]


	destroy: ->
		@$btn.off ".#{@_name}"
		super

	open: ->
		_beforeopen.call @

	close: ->
		_beforeclose.call @






# =============== Private methods

_pushStart = ->
	if @$push?
		@$push.addClass '-start--'
		@$push.removeClass '-stop--'

_pushStop = ->
	if @$push?
		@$push.addClass '-stop--'
		@$push.removeClass '-start--'

		# Fix mobile webkit render bug
		# After first showing it will not be smooth
		if @$push[0]? and @$push[0].style? and @$push[0].style['-webkit-overflow-scrolling']?
			@$push[0].style['-webkit-overflow-scrolling'] = 'auto'



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
	if @$push?
		$('body').addClass '_perspective_'
	@$el.css display: 'table'
	setTimeout =>
		@$el.addClass '_visible_ -start--'
		@$el.find('.-dialog').addClass '_visible_ -start--'
		_pushStart.call @
	, 1
	$('body').addClass '_no-scroll_'
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
	@$el.addClass '-stop--'
	@$el.find('.-dialog').addClass '-stop--'
	_pushStop.call @
	setTimeout =>
		@$el.removeClass '_visible_ -start-- -stop--'
		@$el.find('.-dialog').removeClass '_visible_ -start-- -stop--'
		$('body').removeClass '_no-scroll_'
		if @$push?
			$('body').removeClass '_perspective_'
		@$el.hide()
	, 1000
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

$(window).on 'load', ->
	$('[data-toggle="modal"]').each ->
		$modal = $(@)
		$modal.modal($modal.data())
