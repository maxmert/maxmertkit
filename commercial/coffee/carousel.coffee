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


# _ongoingTouchIndexById = (idToFind) ->
# 	i = 0

# 	while i < ongoingTouches.length
# 		id = ongoingTouches[i].identifier
# 		return i  if id is idToFind
# 		i++
# 	-1 # not found




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

	@$el[0].addEventListener "touchstart", ( event ) =>
		event.preventDefault()
		@_touchStartX = parseInt(event.touches[0].clientX)
		@_touchStartY = parseInt(event.touches[0].clientY)
		@_touchItem = @items[ _findActiveItem.call(@) ]
		@_touchItemStyle = @_touchItem[0].style
		@_touchScrollStart = @$el.scrollTop()

	@$el[0].addEventListener "touchmove", ( event ) =>
		event.preventDefault()
		@_touchDeltaX = parseInt(event.changedTouches[0].clientX) - @_touchStartX
		@_touchDeltaY = parseInt(event.changedTouches[0].clientY) - @_touchStartY
		
		translate = "translateX(#{@_touchDeltaX}px)"
		
		if @_touchItemStyle? and Math.abs(@_touchDeltaX) > 5 and Math.abs(@_touchDeltaY) < 10
			@_touchItemStyle.webkitTransform = translate
			@_touchItemStyle.MozTransform = translate
			@_touchItemStyle.transform = translate

		else
			if @_touchScrollStart - @_touchDeltaY < 0
				translate = "scale(#{($(window).height() + (@_touchScrollStart - @_touchDeltaY)) / $(window).height()}, #{($(window).height() + (@_touchScrollStart - @_touchDeltaY)) / $(window).height()})"
				@$el[0].style.webkitTransform = translate
				@$el[0].style.MozTransform = translate
				@$el[0].style.transform = translate
			else
				@$el.scrollTop @_touchScrollStart - @_touchDeltaY

	@$el[0].addEventListener "touchend", ( event ) =>
		event.preventDefault()
		if Math.abs( @_touchDeltaX ) > 60
			if @_touchDeltaX < 0
				@activateNextItem()
			else
				@activatePrevItem()


		translate = "translateX(0px) translateY(0px)"		
		
		if @_touchItemStyle?
			@_touchItemStyle.webkitTransform = translate
			@_touchItemStyle.MozTransform = translate
			@_touchItemStyle.transform = translate

		@_touchStartX = @_touchStartY = @_touchItem = @_touchItemStyle = @_touchDelta = null
	
	
	@$el[0].addEventListener "gesturestart", ( event ) =>
		@_gestureItem = @items[ _findActiveItem.call(@) ]
		@_gestureItemStyle = @_gestureItem[0].style

	@$el[0].addEventListener "gesturechange", ( event ) =>
		translate = "scale(#{event.scale}, #{event.scale})"
		
		if @_gestureItemStyle?
			@_gestureItemStyle.webkitTransform = translate
			@_gestureItemStyle.MozTransform = translate
			@_gestureItemStyle.transform = translate
	
	@$el[0].addEventListener "gestureend", ( event ) =>
		if event.scale < 1
			@deactivate()

		translate = "scale(1, 1)"
		if @_gestureItemStyle?
			@_gestureItemStyle.webkitTransform = translate
			@_gestureItemStyle.MozTransform = translate
			@_gestureItemStyle.transform = translate

		@_gestureItem = @_gestureItemStyle = null
		


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