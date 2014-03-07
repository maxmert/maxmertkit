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
					while i < @_nav.length and @_nav[i].data('group') isnt value
						i++

					if not @_nav.length or @_nav[i].data('group') isnt value
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

					@nav.on "click.#{@_name}.#{@_id}", =>
						_scrollTo.call @, @$el.offset().top

				else
					@options[key] = value
					if typeof value is 'function'
						@[key] = @options[key]



	destroy: ->
		@$el.off ".#{@_name}"
		$(document).off "scroll.#{@_name}.#{@_id}"
		$(window).off "resize.#{@_name}.#{@_id}"
		super

	activate: ->
		_refreshDevice.call @
		@_refreshSizes()
		
		if not @deviceMobile
			_parallax.call @

		if @video or @image then @$el.addClass '_invert_'


		$(window).on "resize.#{@_name}.#{@_id}", =>
			_refreshHeaderHeight.call @
			@_refreshSizes()
			_refreshDevice.call @

		$(document).on "scroll.#{@_name}.#{@_id}", ( event ) =>

			if not @deviceMobile
				_parallax.call @
				
				
				
			_setNavActive.call @
						
				
		
		if @scroller?
			@scroller.on "click.#{@_name}.#{@_id}", =>
				# if @caption?
					# scrollTo = @caption.offset().top - 10
				# else
				scrollTo = @$el.offset().top + @$el.height() 
				
				_scrollTo.call @, scrollTo


		_setNavActive.call @
		_refreshHeaderHeight.call @
			
		@$el.addClass '_active_'

	deactivate: ->
		if @$el.hasClass '_active_'
			_beforeunactive.call @

	disable: ->
		@$el.toggelleClass '_disabled_'






# =============== Private methods

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
				if @options.imageOpacity then @image.css opacity: (percent + 0.5)
				if @options.imageBlur
					blur = "blur(#{5 * (0.4 - percent)}px)"
					@image.find('img').css "-webkit-filter": blur, "-moz-filter": blur, "filter": blur


		# Do parallax magic here
		if @video? then @video.css top: Math.round( (@scroll.scrollTop() - @$el.offset().top ) - (@scroll.scrollTop() - @$el.offset().top ) * 0.2 )
		if @image?
			
			@image.css top: Math.round( (@scroll.scrollTop() - @$el.offset().top ) - (@scroll.scrollTop() - @$el.offset().top ) * 0.2 )
			
			if @$el.hasClass('-hero') and @header? #and @scroll.scrollTop() > @$el.offset().top
				@header.css
					bottom: "#{300 * percent}px"
					opacity: 3 * percent
			
			if @options.imageZoom
				@image.css
					width: "#{100 + 100 * percent}%"
					left: "-#{100 * percent / 2}%"

		if @scroller? then @scroller.css opacity: percent * 2
		# if @caption? then @caption.css opacity: percent

_refreshDevice = ->
	@deviceMobile = @_deviceMobile()

_scrollTo = ( px ) ->
	if @scroll[0].activeElement.nodeName is 'BODY'
		$('body,html').animate {scrollTop: "#{px}px"}, 700
	else
		@scroll.animate {scrollTop: "#{px}px"}, 700

_setNavActive = ->
	# if @_id is 2
	# 	console.log "#{@$el.offset().top + $(window).height() / 2} >= #{@scroll.scrollTop()} > #{@$el.offset().top - $(window).height() / 2}			#{@$el.offset().top + @$el.height() - $(window).height() / 2} >= #{@scroll.scrollTop()} > #{@$el.offset().top + @$el.height() - $(window).height()}"
	if (@$el.offset().top + $(window).height() / 2 > 0 and @$el.offset().top + $(window).height() / 2 >= @scroll.scrollTop() > @$el.offset().top - $(window).height() / 2) or ( @$el.offset().top + @$el.height() - $(window).height() / 2 >= @scroll.scrollTop() > @$el.offset().top + @$el.height() - $(window).height() )
		if not @nav.hasClass('_active_')
			@navContainer.find('._active_').removeClass '_active_'
			@nav.addClass '_active_'

		if (@video? and not @deviceMobile) or @image? then @navContainer.removeClass( '_invert_' ) else @navContainer.addClass( '_invert_' )

	

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