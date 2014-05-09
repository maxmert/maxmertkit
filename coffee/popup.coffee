"use strict"

_name = "popup"
_instances = []
_id = 0

class Popup extends MaxmertkitHelpers

	_name: _name
	_instances: _instances

	# =============== Public methods

	constructor: ( @btn, @options ) ->
		@$btn = $(@btn)

		@_id = _id++

		_options =
			target: @$btn.data('target')				# Targeted popup windows
			toggle: @$btn.data('toggle') or 'popup'		# To automatically find elements which toggle popup windows
			event: "click"								# Event on button to open popup
			eventClose: "click"							# Event on close elements to close popup
			positionVertical: 'top'
			positionHorizontal: 'center'
			offset:										# Offset in pixels
				horizontal: 5
				vertical: 5
			closeUnfocus: no							# Close popup on click anywhere on document
			closeResize: yes							# Close popup on resize window
			selfish: yes								# Just 1 opened class instance, close others when open current
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
			if not @$el.is ':visible'
				@open()
			else
				@close()

		# Set event on button to close popup window
		# but only if show and close events are not the same
		@$btn.on @options.eventClose, =>
			if @options.event isnt @options.eventClose
				@close()

		# Find dismiss buttons inside popup window
		@$el.find("*[data-dismiss='popup']").on @options.event, =>
			@close()


		# Close popup when we loose focus (click somewhere else)
		if @options.closeUnfocus
			$(document).on "click.#{_name}", ( event ) =>
				classes = '.' + @$el[0].className.split(' ').join('.')
				if not $(event.target).closest(classes ).length and @$el.is(':visible') and not @$el.is(':animated') and $(event.target)[0] isnt @$btn[0]
					@close()

		if @options.closeResize
			$(window).on "resize.#{_name}", ( event ) =>
				@close()


		# set position classes
		@$el.removeClass '_top_ _bottom_ _left_ _right_'
		@$el.addClass "_#{@options.positionVertical}_ _#{@options.positionHorizontal}_"

		super @$btn, @options

		setTimeout =>
			@reactor.addEventListener "close.modal", =>
				@close()
		,1


	_setOptions: ( options ) ->

		for key, value of options
			if not @options[key]?
				if key isnt "kit-#{_name}"
					return console.error "Maxmertkit Popup. You're trying to set unpropriate option – #{key}"
				else
					return null

			switch key
				when 'target'
					# Set popup window element
					@$el = $(document).find @options.target

					# Find dismiss buttons inside popup window
					@$el.find("*[data-dismiss='popup']").on @options.event, =>
						@close()

				when 'event'
					@$btn.off "#{@options.event}.#{@_name}"

					@options.event = value

					# Set event on button to show popup window
					@$btn.on "#{@options.event}.#{@_name}", =>
						if not @$el.is ':visible'
							@open()
						else
							@close()

				when 'eventClose'
					@$btn.off "#{@options.eventClose}.#{@_name}"

					@options.eventClose = value

					# Set event on button to close popup window
					# but only if show and close events are not the same
					@$btn.on "#{@options.eventClose}.#{@_name}", =>
						if @options.event isnt @options.eventClose
							@close()

				when 'closeUnfocus'
					@options.closeUnfocus = value

					$(document).off "click.#{@_name}"

					# Close popup when we loose focus (click somewhere else)
					if @options.closeUnfocus
						$(document).on "click.#{@_name}", ( event ) =>
							classes = '.' + @$el[0].className.split(' ').join('.')
							if not $(event.target).closest(classes ).length and @$el.is(':visible') and not @$el.is(':animated') and $(event.target)[0] isnt @$btn[0]
								@close()

				when 'positionVertical'
					# set position classes
					@$el.removeClass "_top_ _middle_ _bottom_"

					@options.positionVertical = value

					@$el.addClass "_#{@options.positionVertical}_"

				when'positionHorizontal'
					# set position classes
					@$el.removeClass "_left_ _center_ _right_"

					@options.positionHorizontal = value

					@$el.addClass "_#{@options.positionHorizontal}_"


				else
					@options[key] = value



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
	scrollParent = @_getContainer @$el
	scrollParentBtn = @_getContainer @$btn

	# if @_equalNodes scrollParent, scrollParentBtn
	positionBtn = @$btn.offset()
	position = @$el.offset()

	if scrollParent? and (not scrollParent[0]? or (scrollParent[0].activeElement? and scrollParent[0].activeElement.nodeName isnt 'BODY') or (scrollParent[0].nodeName? and scrollParent[0].nodeName isnt 'BODY'))
		offset = $(scrollParent).offset()
		if offset?
			positionBtn.top = positionBtn.top - offset.top
			positionBtn.left = positionBtn.left - offset.left

	sizeBtn =
		width: @$btn.outerWidth()
		height: @$btn.outerHeight()

	size =
		width: @$el.outerWidth()
		height: @$el.outerHeight()

	newTop = newLeft = 0

	switch @options.positionVertical

		when 'top'
			newTop = positionBtn.top - size.height - @options.offset.vertical

		when 'bottom'
			newTop = positionBtn.top + sizeBtn.height + @options.offset.vertical

		when 'middle' or 'center'
			newTop = positionBtn.top + sizeBtn.height / 2 - size.height / 2

	switch @options.positionHorizontal

		when 'center' or 'middle'
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
	# If we need to close all other instances on Popup
	if @options.selfish
		@_selfish()

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
			$.data @, "kit-" + _name, new Popup(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options
			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Popup. You passed into the #{_name} something wrong."))
		return
