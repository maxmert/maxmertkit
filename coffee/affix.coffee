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
			# string, type of user insteractive
			spy: @el.getAttribute( 'data-spy' ) or _name

			# px, vertical offset from the top
			offset: @el.getAttribute( 'data-offset' ) or 5

			# Events
			beforeactive: ->
			onactive: ->
			failactive: ->
			beforedeactive: ->
			ondeactive: ->
			faildeactive: ->

		@options = @_merge _options, @options

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
				# when 'target'
				# 	# Set affix window element
				# 	@$el = $(document).find @options.target

				# else

			@options[key] = value
			if typeof value is 'function' then @[key] = value


	destroy: ->
		super




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
					@failactive?()

		catch
			_activate.call @

	else
		_activate.call @

_activate = ->
	@_addEventListener @scroller, 'scroll', _setPosition.bind(@)
	@_addClass '_active_'
	@onactive?()
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
					@faildeactive?()

		catch
			_deactivate.call @

	else
		_deactivate.call @

_deactivate = ->
	@_removeEventListener @scroller, 'scroll', _setPosition.bind(@)
	@_removeClass '_active_'
	@reactor.dispatchEvent "stop.#{_name}"
	@ondeactive?()
	@started = no


_setPosition = ->
	if @container.getBoundingClientRect().top - @options.offset <= document.body.scrollTop
		if @container.getBoundingClientRect().top + @_outerHeight(@scroller) - @options.offset - @_outerHeight()  >= document.body.scrollTop
			@el.style.width = @el.offsetWidth
			@el.style.position = 'fixed'
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

	unless @dataset['data-kit-affix']
		result = new Affix @, options
		@dataset['data-kit-affix'] = result

	else
		if typeof options is 'object'
			@dataset['data-kit-affix']._setOptions options
		else
			if typeof options is "string" and options.charAt(0) isnt "_"
				@dataset['data-kit-affix'][options]

		result = @dataset['data-kit-affix']

	return result
