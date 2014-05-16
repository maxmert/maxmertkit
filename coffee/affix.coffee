"use strict"

_name = "affix"
_instances = []
_id = 0

MaxmertkitHelpers = window['MaxmertkitHelpers']

class Affix extends MaxmertkitHelpers

	_name: _name
	_instances: _instances
	started: no

	# =============== Public methods

	constructor: ( @el, @options ) ->

		_options =
			# String; type of user insteractive
			spy: @el.getAttribute( 'data-spy' ) or _name

			# Number; in px, vertical offset from the top
			offset: @el.getAttribute( 'data-offset' ) or -25

			# Events
			beforeactive: ->
			onactive: ->
			failactive: ->
			beforedeactive: ->
			ondeactive: ->
			faildeactive: ->

		@options = @_merge _options, @options
		@_setOptions @options

		super @el, @options

		# Get scroll container
		@scroller = @_getScrollContainer()
		@container = @_getContainer()

		# Set global event
		@reactor.registerEvent "initialize.#{_name}"
		@reactor.registerEvent "start.#{_name}"
		@reactor.registerEvent "stop.#{_name}"

		@reactor.dispatchEvent "initialize.#{_name}"

		@start()

	destroy: ->
		_deactivate.call @
		@el.dataset["kitAffix"] = null
		super

	start: ->
		if not @started
			_beforeactivate.call @

	stop: ->
		if @started
			_beforedeactivate.call @


	_setOptions: ( options ) ->
		for key, value of options
			if not @options[key]?
				return console.error "Maxmertkit Affix. You're trying to set unpropriate option – #{key}"

			# switch key
				# when 'keyhere'
				# 	# DO something here

				# else

			@options[key] = value
			if typeof value is 'function' then @[key] = value




# ===============
# PRIVATE METHODS

_beforeactivate = ->
	if @beforeactive?
		try
			deferred = @beforeactive.call @el
			deferred
				.done =>
					_activate.call @

				.fail =>
					@failactive?.call @el

		catch
			_activate.call @

	else
		_activate.call @

_activate = ->
	@_addEventListener @scroller, 'scroll', _setPosition.bind(@)
	@_addClass '_active_'
	@onactive?.call @el
	@reactor.dispatchEvent "start.#{_name}"
	@started = yes

_beforedeactivate = ->
	if @beforedeactive?
		try
			deferred = @beforedeactive.call @el
			deferred
				.done =>
					_deactivate.call @

				.fail =>
					@faildeactive?.call @el

		catch
			_deactivate.call @

	else
		_deactivate.call @

_deactivate = ->
	@_removeEventListener @scroller, 'scroll', _setPosition.bind(@)
	@_removeClass '_active_'
	@reactor.dispatchEvent "stop.#{_name}"
	@ondeactive?.call @el
	@started = no


_setPosition = ->
	containerTop = @container.offsetTop

	if containerTop - @options.offset <= document.body.scrollTop
		if containerTop + @_outerHeight(@container) - @options.offset - @_outerHeight()  >= document.body.scrollTop
			@el.style.width = @el.offsetWidth
			@el.style.position = 'fixed'
			top = @options.offset
			try
				style = @el.currentStyle or getComputedStyle(@el)
			if style?
				if style.marginTop? and style.marginTop isnt '' then top += parseInt(style.marginTop)
			@el.style.top = "#{@options.offset}px"
			@el.style.bottom = 'auto'
		else
			@el.style.position = 'absolute'
			@el.style.top = 'auto'
			@el.style.bottom = "-#{@options.offset}px"
			@el.style.width = @el.offsetWidth
	else
		@el.style.position = 'relative'
		@el.style.top = 'inherit'



window['Affix'] = Affix
window['mkitAffix'] = ( options ) ->
	result = null

	if not @dataset? then @dataset = {}

	unless @dataset['kitAffix']
		result = new Affix @, options
		@dataset['kitAffix'] = result

	else
		if typeof options is 'object'
			@dataset['kitAffix']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@dataset['kitAffix'][options]

		result = @dataset['kitAffix']

	return result


# if $? and jQuery?
# 	$.fn[_name] = window['mkitAffix']
# 	$(window).on 'load', ->
# 		$('[data-spy="affix"]').each ->
# 			$btn = $(@)
# 			$btn.affix($btn.data())