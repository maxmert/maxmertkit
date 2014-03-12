_name = "carousel"
_instances = []
_nav = []
_id = 0

class Carousel extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	_nav: _nav
	
	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			kind: @$el.data('kind') or 'carousel'
			group: @$el.data('group') or 'carousel'
			itemSelector: @$el.data('items') or '.-item'
			arrowsSelector: @$el.data('arrows') or '.-arrow'
			closer: @$el.data('closer') or '.-close'
			# preload: yes

			beforeactive: ->
			onactive: ->
			beforeunactive: ->
			onunactive: ->
		
		@options = @_merge _options, @options

		super @$el, @options

		@$holder = @$el.find '.-holder'
		@_setOptions @options

		@$el.css display: 'none'

	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Carousel. You're trying to set unpropriate option."

			switch key

				when 'group'
					if value
						@[key] = @options[key]
						_refreshItems.call @
						_refreshTriggers.call @



				when 'closer'
					if value
						@[key] = @options[key]
						@$closer = @$el.find value
						@$closer.on "click.#{@_name}.#{@_id}", =>
							@deactivate()


				when 'arrowsSelector'
					if value
						@[key] = @options[key]
						@$arrowLeft = @$el.find "#{value}._left_"
						@$arrowRight = @$el.find "#{value}._right_"

						@$arrowRight.on "click.#{@_name}.#{@_id}", =>
							@activateNextItem()

						@$arrowLeft.on "click.#{@_name}.#{@_id}", =>
							@activatePrevItem()


				else
					@options[key] = value
					if typeof value is 'function'
						@[key] = @options[key]


	destroy: ->
		@$el.off ".#{@_name}"
		super

	activate: ->
		_beforeactive.call @

	deactivate: ->
		if @$el.hasClass '_active_'
			_beforeunactive.call @

	disable: ->
		@$el.toggleClass '_disabled_'



	activateNextItem: ->
		# item.addClass '_active_'
		if @items?
			i = _findActiveItem.call @
			
			if not @items[i].hasClass('_left_') and not @items[i].hasClass('_right_')
				i = 0

			else
				if i is @items.length - 1
					_deactivateItem.call @, @items[i]
					i = 0

				else
					_deactivateItem.call @, @items[i]
					i++

			@items[i].addClass '_right_'
			# _activateItem.call @, @items[i]


	activatePrevItem: ->
		# item.addClass '_active_'
		if @items?
			i = _findActiveItem.call @
			
			if not @items[i].hasClass('_left_') and not @items[i].hasClass('_right_')
				i = 0

			else
				if i is 0
					_deactivateItem.call @, @items[i]
					i = @items.length - 1

				else
					_deactivateItem.call @, @items[i]
					i--

			@items[i].addClass '_left_'
			# _activateItem.call @, @items[i]

			







# =============== Private methods
_findActiveItem = ->
	i = 0
	while i + 1 < @items.length and not @items[i].hasClass('_left_') and not @items[i].hasClass('_right_')
		i++
	i

_deactivateItem = ( item ) ->
	item.removeClass '_left_ _right_'

_refreshTriggers = ->
	for trigger in $(document).find( "[data-trigger='#{@_name}'][data-trigger-group='#{@options.group}']" )
		$(trigger).on "click.#{@_name}.#{@_id}", =>
			@activate()

_refreshItems = ->
	@items = []
	for item in @$el.find @options.itemSelector
		$item = $(item)
		$item.css marginLeft: "-#{$item.width() / 2}px"
		$item.find('img').css display: 'none'
		@items.push $(item)
	
	@activateNextItem.call @


_beforeactive = ->
	
	if @beforeactive?
		try
			deferred = @beforeactive.call @$el
			deferred
				.done =>
					_activate.call @
					
				.fail =>
					@$el.trigger "fail.#{@_name}"

		catch
			_activate.call @

	else
		_activate.call @


_activate = ->

	@$el.on "touchend", =>
		alert 123

	$('body').addClass '_no-scroll_'
	clearTimeout(@deactivateTimer) if @deactivateTimer?
	@$el.css display: 'block'
	@$el.addClass '_active_'
	@$el.trigger "activated.#{@_name}"
	if @onactive?
		try
			@onactive.call @$el



_beforeunactive = ->
	if @beforeunactive?
		try
			deferred = @beforeunactive.call @$el
			deferred
				.done =>					
					_deactivate.call @
					
				.fail =>
					@$el.trigger "fail.#{@_name}"

		catch
			_deactivate.call @

	else
		_deactivate.call @


_deactivate = ->
	@$el.removeClass '_active_'
	@deactivateTimer = setTimeout =>
		@$el.css display: 'none'
	, 800
	$('body').removeClass '_no-scroll_'
	@$el.trigger "deactivated.#{@_name}"
	if @onunactive?
		try
			@onunactive.call @$el



$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Carousel(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Carousel. You passed into the #{_name} something wrong."))
		return

$(window).on 'load', ->
	$('[data-kind="carousel"]').each ->
		$carousel = $(@)
		$carousel.carousel($carousel.data())