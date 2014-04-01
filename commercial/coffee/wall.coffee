_name = "wall"
_instances = []
_nav = []
_id = 0

class Wall extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	_nav: _nav
	
	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			kind: @$el.data('kind') or 'wall'
			group: @$el.data('group') or 'wall'
			name: @$el.data('name') or no
			
			video: @$el.find('.-wall-video') or no
			videoOpacity: no
			
			image: @$el.find('.-wall-image .-thumbnail, .-hero-image .-thumbnail') or no
			imageBlur: @$el.data('blur') or no
			imageOpacity: @$el.data('opacity') or no
			imageZoom: @$el.data('zoom') or no

			parallaxSpeed: @$el.data('speed') or 0.2	# 0 - pictire stands, 1 - picture scrolls as usually
			
			caption: @$el.data('caption') or no
			
			beforeactive: ->
			onactive: ->
			beforeunactive: ->
			onunactive: ->
		
		@options = @_merge _options, @options

		super @$el, @options

		@_setOptions @options

		@header = @$el.find('.-header, header')
		caption = @$el.find('.-caption, caption')
		if caption.length then @caption = caption
		@scroller = @$el.find('.-scroller')
		@scroll = @_getScrollParent @el
		
		@activate()

		setTimeout =>
			@_refreshSizes()
			if not @deviceMobile
				_parallax.call @
		, 100

	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Wall. You're trying to set unpropriate option."

			switch key
				when 'video'
					@video = @options.video if @options.video? and @options.video.length

				when 'image'
					@image = @options.image if @options.image? and @options.image.length
					
					caption = @$el.find 'figcaption'
					@caption = caption if caption.length

				when 'group'
					i = 0
					while i < @_nav.length and @_nav[i].data('group')? and @_nav[i].data('group') isnt value
						i++

					if not @_nav? or not @_nav.length or not @_nav[i]? or not @_nav[i].data('group')? or @_nav[i].data('group') isnt value
						$nav = $("[data-kind='wall-nav'][data-group='#{value}']")
						if $nav.length then @_nav.push $nav

					else
						$nav = @_nav[i]
					
					nav = "<i data-scroll='#{@_id}'>"
					nav += "<span>#{@options.name}</span>" if @options.name?
					nav += "</i>"
					@nav = $(nav)
					@navContainer = $nav
					@navContainer.append @nav
					@navContainer.css marginTop: -@navContainer.height() / 2

					@nav.on "click.#{@_name}.#{@_id}", =>
						_scrollTo.call @, @_offset.top


				else
					@options[key] = value
					if typeof value is 'function'
						@[key] = @options[key]



	destroy: ->
		@$el.off ".#{@_name}"
		@scroll.off "scroll.#{@_name}.#{@_id}"
		$(window).off "resize.#{@_name}.#{@_id}"
		super

	activate: ->
		_refreshDevice.call @
		@_refreshSizes()

		_adjustHeightToScreen.call @
		
		if not @deviceMobile
			_parallax.call @

		# if @video or @image then @$el.addClass '_invert_'


		$(window).on "resize.#{@_name}.#{@_id}", =>
			_refreshHeaderHeight.call @
			@_refreshSizes()
			_adjustHeightToScreen.call @
			_refreshDevice.call @

		
		@scroll.on "scroll.#{@_name}.#{@_id}", ( event ) =>

			if not @deviceMobile and @_isVisible()
				_parallax.call @
				
				
				
			_setNavActive.call @
						
				
		
		if @scroller?
			@scroller.on "click.#{@_name}.#{@_id}", =>
				# if @caption?
					# scrollTo = @caption.offset().top - 10
				# else
				scrollTo = @_offset.top + @$el.height() 
				
				_scrollTo.call @, scrollTo


		_setNavActive.call @
		_refreshHeaderHeight.call @
			
		@$el.addClass '_visible_'

	deactivate: ->
		if @$el.hasClass '_visible_'
			_beforeunactive.call @

	disable: ->
		@$el.toggelleClass '_disabled_'






# =============== Private methods

_adjustHeightToScreen = ->
	if @_height is 0
		@_height = @_windowHeight
		@$el.height @_height

_parallax = ->
	min = @_offset.top - @_windowHeight
	max = @_offset.top + @_height + @_windowHeight
	current = @scroll.scrollTop() + @_windowHeight

	if current > min
		percent = 1 - current / max
	else
		percent = 0

			


	if @_scrollVisible()
		
		# Check if wall is almost invisible
		# and perform some blur and opacity tricks
		if 1 - percent >= 0.5 and 1 - percent <= 1
			if @video? 
				if @options.videoOpacity then @video.css opacity: (percent + 0.5)
			if @image?
				if not @options.imageBlur and @options.imageOpacity then @image.css opacity: 1 - @_getVisiblePercent()
				if @options.imageBlur
					if not @imageBlurred?
						blur = "blur(5px)"
						@imageNotBlurred = @image.find('img')

						@imageBlurred = @imageNotBlurred.clone()
						@imageBlurred.appendTo @imageNotBlurred.parent()

						@imageNotBlurred.css zIndex: 2
						@imageBlurred.css "-webkit-filter": blur, "-moz-filter": blur, "filter": blur

					@imageNotBlurred.css opacity: 1 - @_getVisiblePercent() * 2


		# Do parallax magic here
		if @video? then @video.css top: Math.round( (@scroll.scrollTop() - @_offset.top ) - (@scroll.scrollTop() - @_offset.top ) * @options.parallaxSpeed )
		if @image?
			parallaxOffset = "#{Math.round( (@scroll.scrollTop() - @_offset.top ) - (@scroll.scrollTop() - @_offset.top ) * @options.parallaxSpeed )}px"
			imageTransform = "translateY(#{parallaxOffset})"
			
			if @$el.hasClass('-hero') and @header? #and @scroll.scrollTop() > @_offset.top
				@_setTransform @header[0].style, "translateY(#{50 - 300 * percent}px)"
				@header[0].style['opacity'] = 1 - @_getVisiblePercent()


			
			if @options.imageZoom
				if 1 + percent > 1
					imageTransform += " scale(#{1 + percent}, #{1 + percent})"
			
			@_setTransform @image[0].style, imageTransform

		if @scroller? then @scroller.css opacity: 1 - @_getVisiblePercent()

_refreshDevice = ->
	@deviceMobile = @_deviceMobile()

_scrollTo = ( px ) ->
	if @scroll[0].activeElement? and @scroll[0].activeElement.nodeName is 'BODY'
		$('body,html').animate {scrollTop: "#{px}px"}, 700
	else
		@scroll.animate {scrollTop: "#{px}px"}, 700

_setNavActive = ->

	inBottomBorder = @_offset.top + @$el.height() - $(window).height() / 2 >= @scroll.scrollTop()
	inTopBorder = @scroll.scrollTop() > @_offset.top - $(window).height() / 2
	
	if inTopBorder and inBottomBorder
		if not @nav.hasClass('_active_')
			@navContainer.find('._active_').removeClass '_active_'
			@nav.addClass '_active_'
		
		if (@video? and not @deviceMobile) or @image?
			if @navContainer.hasClass( '_invert_' ) then @navContainer.removeClass( '_invert_' )

		else
			if not @navContainer.hasClass( '_invert_' ) then @navContainer.addClass( '_invert_' )
	

_refreshHeaderHeight = ->
	if not @deviceMobile and not @$el.hasClass '-hero'
		@header.css( height: $(window).height() )
	else
		@header.css( height: 'auto')

_parseUrl = (url) ->
	m = url.match(/(.*)[\/\\]([^\/\\]+)\.(\w+)$/)

	path: m[1],
	file: m[2],
	ext: m[3]


$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Wall(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Wall. You passed into the #{_name} something wrong."))
		return

$(window).on 'load', ->
	$('[data-kind="wall"]').each ->
		$wall = $(@)
		$wall.wall($wall.data())