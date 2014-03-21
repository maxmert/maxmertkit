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
			target: @$el.data('target') or 'body'	# Selector of the scrolling block
			offset:	10									# Vertical offset in pixels
			elements: 'li a'							# Elements to spy inside @$el
			elementsAttr: 'href'						# attribute of each element with ID of the target
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

_activateItem = ( itemNumber ) ->
	for element in @elements
		element.menu.removeClass '_active_'
	
	@elements[itemNumber].menu
		.addClass( '_active_')
		.parents('li')
			.addClass( '_active_')


_refresh = ->
	@elements = []
	@$el.find(@options.elements).each (index, el) =>
		link = $(el).attr @options.elementsAttr
		if link?
			item = $(@options.target).find(link)
			if item.length
				@elements.push
					menu: $(el).parent()
					item: item.parent()
					offsetTop: item.position().top


_spy = ( event ) ->
	i = 0
	while i + 1 < @elements.length
		if @elements[i].offsetTop <= (event.currentTarget.scrollTop or event.currentTarget.scrollY) + @options.offset <= @elements[i+1].offsetTop
			_activateItem.call @, i
		else
			if (event.currentTarget.scrollTop or event.currentTarget.scrollY) + @options.offset > @elements[i+1].offsetTop
				_activateItem.call @, i + 1
		i++
	# for element, index in @elements
	# 	if element.offsetTop - @options.offset <= event.currentTarget.scrollTop <= element.offsetTop + @options.offset
	# 		_activateItem.call @, index


_activate = ->
	# $(@options.target).on 'change', =>
	# 	_refresh.call @
	if @options.target is 'body'
		target = window
	else
		target = @options.target
	
	$(target).on "scroll.#{@_name}.#{@_id}", ( event ) =>
		_spy.call @, event

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

# $(window).on 'load', ->
# 	$('[data-spy="scroll"]').each ->
# 		$navbar = $(@)
# 		$navbar.navbar($navbar.data())