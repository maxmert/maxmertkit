_name = "popup"

class Popup extends MaxmertkitHelpers
	
	_name: _name
	
	# =============== Public methods

	constructor: ( @btn, @options ) ->
		@$btn = $(@btn)
		
		_options =
			target: @$btn.data('target')				# Targeted popup windows
			toggle: @$btn.data('toggle') or 'popup'		# To automatically find elements which toggle popup windows
			event: "click.#{@_name}"					# Event on button to open popup
			eventClose: "click.#{@_name}"				# Event on close elements to close popup
			positionVertical: 'top' 
			positionHorizontal: 'center'
			offset:
				horizontal: 5
				vertical: 5
			# container: 'body'
		
		@options = @_merge _options, @options
		

		# Reset default event functions 
		@beforeopen = @options.beforeopen
		@onopen = @options.onopen
		@beforeclose = @options.beforeclose
		@onclose = @options.onclose

		# Set popup window element
		@$el = $(document).find @options.target
		
		# Set event on button to show popup window
		@$btn.on @options.event, =>
			@open()

		# Find dismiss buttons inside popup window
		@$el.find("*[data-dismiss='popup']").on @options.event, =>
			@close()

		# set position classes
		@$el.removeClass '_top_ _bottom_ _left_ _right_'
		@$el.addClass "_#{@options.positionVertical}_ _#{@options.positionHorizontal}_"

		super @$btn, @options

	
	destroy: ->
		@$btn.off ".#{@_name}"
		super

	open: ->
		_beforeopen.call @

	close: ->
		_beforeclose.call @






# =============== Private methods



_position = ->
	# btnPosition = @$btn.offset()
	scrollParent = @_getScrollParent @$el
	scrollParentBtn = @_getScrollParent @$btn

	# if @_equalNodes scrollParent, scrollParentBtn
	positionBtn = @$btn.offset()
	position = @$el.offset()

	sizeBtn =
		width: @$btn.outerWidth()
		height: @$btn.height()

	size =
		width: @$el.outerWidth()
		height: @$btn.height()

	newTop = newLeft = 0
	
	switch @options.positionVertical
		
		when 'top'
			newTop = positionBtn.top - size.height - @options.offset.vertical
		
		when 'bottom'
			newTop = positionBtn.top + sizeBtn.height + @options.offset.vertical

		when 'middle'
			newTop = positionBtn.top - sizeBtn.height / 2 + size.height / 2

	switch @options.positionHorizontal
		
		when 'center'
			newLeft = positionBtn.left + sizeBtn.width / 2 - size.width / 2

		when 'left'
			newLeft = positionBtn.left - size.width -  @options.offset.horizontal

		when 'right'
			newLeft = positionBtn.left + sizeBtn.width + @options.offset.horizontal


	@$el.css
		left: newLeft
		top: newTop



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
	# console.log @
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Popup(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options
			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit error. You passed into the #{_name} something wrong."))
		return