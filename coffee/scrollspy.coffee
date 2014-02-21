_name = "scrollspy"
_instances = []
_id = 0

class Scrollspy extends MaxmertkitHelpers

	_name: _name
	_instances: _instances
	
	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			spy: @$el.data('spy') or 'scroll'			# To automatically find affix elements and make them active
			target: @$el.data('target') or 'document'	# Selector of the scrolling block
			offset:	5									# Vertical offset in pixels
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

		# Set affix window element
		# @$el = $(document).find @options.target

		# _position.call @

		@start()

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
			@options[key] = value



	destroy: ->
		super

	refresh: ->
		_refresh.call @

	start: ->
		_beforestart.call @

	stop: ->
		_beforestop.call @






# =============== Private methods


#TODO: Add no-pointer-events while scrolling

_refresh = ->
	console.log 'refresh'

_activate = ->
	$(@options.target).on "scroll.#{@_name}.#{@_id}", =>
		console.log 'scroll'


# If you have beforeopen function
# 	it will be called here
# if you don't
# 	just open modal window
_beforestart = ->
	# If we need to close all other instances on Affix
	# if @options.selfish
	# 	@_selfish()
	@refresh()

	if @beforeopen?
		try
			deferred = @beforeopen.call @$el
			deferred
				.done =>
					_start.call @
					
				.fail =>
					@$el.trigger "fail.#{@_name}"

		catch
			_start.call @

	else
		_start.call @

# Opens modal
# and triggers onopen
_start = ->
	_activate.call @
	@$el.addClass '_active_'
	@$el.trigger "started.#{@_name}"
	if @onopen?
		try
			@onopen.call @$el


# If you have beforeclose function
# 	it will be called here
# if you don't
# 	just close modal window
_beforestop = ->
	if @beforeclose?
		try
			deferred = @beforeclose.call @$el
			deferred
				.done =>
					_stop.call @
					
				.fail =>
					@$el.trigger "fail.#{@_name}"

		catch
			_stop.call @

	else
		_stop.call @

# Closes modal
# and triggers onstop
_stop = ->
	$(document).off "scroll.#{@_name}.#{@_id}"
	@$el.trigger "stopped.#{@_name}"
	if @onstop?
		try
			@onstop.call @$el

			




$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Scrollspy(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options
			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Affix. You passed into the #{_name} something wrong."))
		return