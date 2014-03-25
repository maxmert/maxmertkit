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
			# group: @$el.data('group') or 'carousel'
			animation: @$el.data('animation') or 'snapin'
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

		@_setOptions @options

		@activate()

	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Carousel. You're trying to set unpropriate option."

			switch key

				when 'arrowsSelector'
					if value
						@[key] = @options[key]
						
						# Deinitialize old one
						if @$arrowRight? then @$arrowRight.off ".#{@_name}.#{@_id}"
						if @$arrowLeft? then @$arrowLeft.off ".#{@_name}.#{@_id}"

						# Initialize new one
						@$arrowLeft = @$el.find "#{value}._left_"
						@$arrowRight = @$el.find "#{value}._right_"

						@$arrowRight.on "click.#{@_name}.#{@_id}", => @activateNextItem()
						@$arrowLeft.on "click.#{@_name}.#{@_id}", => @activatePrevItem()


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


	activateNumItem: ( num ) ->
		if not num?
			num = 0
			activeItem = _findActiveItem.call @
			@items[num].addClass '_right_'
			_activateItem.call @, @items[ num ]

		else
		
			activeItem = _findActiveItem.call @
			if activeItem?
				@deactivateItem activeItem

			_activateItem.call @, @items[ num ]


	activateNextItem: ->
		if @items? and @items.length
			
			for item in @items
				item
					.removeClass '_left_'
					.addClass '_right_'
				

			activeItem = _findActiveItem.call @
			activeItemIndex = activeItem.index()

			if activeItemIndex + 1 < @items.length
				activeItemIndex = activeItemIndex + 1

			else
				activeItemIndex = 0
			
			@activateNumItem activeItemIndex


	activatePrevItem: ->
		if @items? and @items.length
			activeItem = _findActiveItem.call @
			activeItemIndex = activeItem.index()
			for item in @items
				item
					.removeClass '_right_'
					.addClass '_left_'



			if activeItemIndex - 1 >= 0
				activeItemIndex = activeItemIndex - 1

			else
				activeItemIndex = @items.length - 1
			
			@activateNumItem activeItemIndex



	deactivateItem: ( item ) ->
		_deactivateItem.call @, item

			









# =============== Private methods


_findActiveItem = ->
	for item in @items
		if item.hasClass '_active_'
			return item

# 	i = 0
# 	while i + 1 < @items.length and not @items[i].hasClass('_left_') and not @items[i].hasClass('_right_') and not @items[i].hasClass('_active_')
# 		i++
# 	i

_activateItem = ( item ) ->
	item.removeClass '-stop--'
	item.show()
	item.addClass '-start-- _active_'

_deactivateItem = ( item ) ->
	item.removeClass '-start--'
	item.addClass '-stop--'
	item.removeClass '_active_'
	setTimeout =>
		item.hide()
	, 1500

_refreshItems = ->
	@items = []
	for item in @$el.find @options.itemSelector
		$item = $(item)
		$item.addClass "-#{@options.animation}-- -stop-- _right_"
		$item.css marginLeft: "-#{$item.width() / 2}px", display: 'none'
		# $item.find('img').css display: 'none'
		@items.push $(item)
	
	# Activate first one
	# @items[0].addClass '_active_'

	@activateNumItem.call @, 0


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
	_refreshItems.call @


	@$el[0].addEventListener "touchstart", ( event ) =>
		event.preventDefault()
		@_touchStartX = parseInt(event.touches[0].clientX)
		@_touchStartY = parseInt(event.touches[0].clientY)
		@_touchItem = @items[ _findActiveItem.call(@) ]
		@_touchItemStyle = @_touchItem[0].style
		@_touchScrollStart = @$el.scrollTop()
		console.log "123 ",@$el

	@$el[0].addEventListener "touchmove", ( event ) =>
		event.preventDefault()
		clearTimeout(@deactivateTimer) if @deactivateTimer?
		@_touchDeltaX = parseInt(event.changedTouches[0].clientX) - @_touchStartX
		@_touchDeltaY = parseInt(event.changedTouches[0].clientY) - @_touchStartY
		
		# translate = "translateX(#{@_touchDeltaX}px)"
		
		# if @_touchItemStyle? and Math.abs(@_touchDeltaX) > 5 # and Math.abs(@_touchDeltaY) < 10
		# 	@_touchItemStyle.webkitTransform = translate
		# 	@_touchItemStyle.MozTransform = translate
		# 	@_touchItemStyle.transform = translate
		console.log @_touchDeltaY
		# if Math.abs(@_touchDeltaY) > 20
			# if @_touchScrollStart - @_touchDeltaY < 0
			# 	percent = ($(window).height() + (@_touchScrollStart - @_touchDeltaY)) / $(window).height()
			# 	translate = "scale(#{percent}, #{percent}) translateY(#{@_touchDeltaY}px)"
				
			# 	@_setTransform @$el[0].style, translate

			# 	if percent < 0.7
			# 		@deactivate()
			# 		@deactivateTimer = setTimeout =>
			# 			translate = "scale(1, 1) translateY(0px)"
			# 			@_setTransform @$el[0].style, translate
			# 		, 500
					
			# else
			# console.log @_touchScrollStart
			# @$el.scrollTop @_touchScrollStart - @_touchDeltaY

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
	
	
	# @$el[0].addEventListener "gesturestart", ( event ) =>
	# 	@_gestureItem = @items[ _findActiveItem.call(@) ]
	# 	@_gestureItemStyle = @_gestureItem[0].style

	# @$el[0].addEventListener "gesturechange", ( event ) =>
	# 	console.log event
		
	# 	if @_gestureItemStyle?
	# 		@_gestureItemStyle.opacity = opacity
	
	# @$el[0].addEventListener "gestureend", ( event ) =>
	# 	if event.scale < 1
	# 		@deactivate()

	# 	# translate = "scale(1, 1)"
	# 	# if @_gestureItemStyle?
	# 	# 	@_gestureItemStyle.webkitTransform = translate
	# 	# 	@_gestureItemStyle.MozTransform = translate
	# 	# 	@_gestureItemStyle.transform = translate

	# 	@_gestureItem = @_gestureItemStyle = null
		

	@$el.addClass '_active_'
	@$el.trigger "activated.#{@_name}"
	if @onactive?
		try
			@onactive.call @$el

	# _refreshItemsPosition.call @



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