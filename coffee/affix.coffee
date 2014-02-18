_name = "affix"
_instances = []
_id = 0

class Affix extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	
	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)
		@$el.parent().append '&nbsp;'	# To keep width

		@_id = _id++
		
		_options =
			# target: @$btn.data('target')				# Targeted affix windows
			spy: @$el.data('spy') or 'affix'			# To automatically find affix elements and make them active
			# positionVertical: 'top'						# 'top' or 'bottom'
			offset:	5									# Vertical offset in pixels
		
		@options = @_merge _options, @options


		# Reset default event functions 
		@beforeopen = @options.beforeopen
		@onopen = @options.onopen
		@beforeclose = @options.beforeclose
		@onclose = @options.onclose

		# Set affix window element
		# @$el = $(document).find @options.target

		# _position.call @

		@open()

		super @$btn, @options

	
	_setOptions: ( options ) ->
		
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Affix. You're trying to set unpropriate option."

			# switch key
				# when 'target'
				# 	# Set affix window element
				# 	@$el = $(document).find @options.target

				# else
					# @options[key] = value



	destroy: ->
		# @$btn.off ".#{@_name}"
		super

	open: ->
		_beforeopen.call @

	close: ->
		_beforeclose.call @






# =============== Private methods



_position = ->
	scrollParent = @_getContainer @$el
	$scrollParent = $(scrollParent)
	
	if $scrollParent[0].firstElementChild.nodeName is "HTML" then offset = 0 else offset = $scrollParent.offset().top

	$(document).on "scroll.#{@_name}.#{@_id}", ( event ) =>
		if @$el.parent().offset().top - @options.offset <= $(document).scrollTop()
			if offset + $scrollParent.height() - @$el.outerHeight() >= $(document).scrollTop()
				@$el.css
					width: @$el.width()
					position: 'fixed'
					top: "#{@options.offset}px"
					bottom: 'auto'
			else
				@$el.css
					position: 'absolute'
					top: 'auto'
					bottom: 0
					width: @$el.width()
		else
			@$el.css 'position', 'relative'
			@$el.css 'top', 'inherit'


# If you have beforeopen function
# 	it will be called here
# if you don't
# 	just open modal window
_beforeopen = ->
	# If we need to close all other instances on Affix
	# if @options.selfish
	# 	@_selfish()

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
	_position.call @
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
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Affix(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options
			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Affix. You passed into the #{_name} something wrong."))
		return