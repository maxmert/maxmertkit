_name = "wall"
_instances = []
_id = 0

class Wall extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	
	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			toggle: @$el.data('toggle') or 'wall'
			video: @$el.data('video') or no
			poster: @$el.data('poster') or no
			image: @$el.data('image') or no
			caption: @$el.data('caption') or no
			
			beforeactive: ->
			onactive: ->
			beforeunactive: ->
			onunactive: ->
		
		@options = @_merge _options, @options

		super @$el, @options

		@_setOptions @options

		@header = @$el.find('.-header, header')
		@scroll = @_getScrollParent @el

		@activate()

	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Wall. You're trying to set unpropriate option."

			switch key
				when 'video'
					@video.remove() if @video?
					if value
						urls = value.split(',')
						

						video = "<video preload autoplay loop muted volume='0'>"
						for url in urls
							video += "<source src='#{url}' type='video/#{_parseUrl(url).ext}'>"
						video += "</video>"

						@video = $( video )
						@$el.append @video

				when 'image'
					@image.remove() if @image?
					if value
						image = "<figure><img src='#{value}'/>"
						if @options.caption then image += "<caption>#{@options.caption}</caption>"
						image += "</figure>"

						@image = $(image)
						@$el.append @image
					# @options.event = value

					# # Set event on wall to show wall window
					# @$btn.on "#{@options.event}.#{@_name}", =>
					# 	if @$btn.hasClass '_active_'
					# 		@deactivate()
					# 	else
					# 		@activate()

				else
					@options[key] = value
					if typeof value is 'function'
						@[key] = @options[key]



	destroy: ->
		@$ell.off ".#{@_name}"
		super

	activate: ->
		$(window).on "resize.#{@_name}.#{@_id}", =>
			_refresh.call @

		$(document).on "scroll.#{@_name}.#{@_id}", ( event ) =>
			min = @$el.offset().top - $(window).height()
			max = @$el.offset().top + @$el.height() + $(window).height()
			current = @scroll.scrollTop() + $(window).height()
			
			if current > min
				percent = 1 - current / max
			else
				percent = 0

			if  1 - percent >= 0.5 and 1 - percent <= 1
				if @video? then @video.css opacity: (percent + 0.5)
				if @image?
					@image.css opacity: (percent + 0.5)
					# if 1 - percent >= 0.8
					# 	@$el.addClass '_blur_'
					# else
					# 	@$el.removeClass '_blur_'
					# else
					# 	if @image.find('img')[0].style["-webkit-filter"]
					# 		@image.find('img')[0].style["-webkit-filter"] = @image.find('img')[0].style["-moz-filter"] = @image.find('img')[0].style["filter"] = null


			if @video? then @video.css top: (@scroll.scrollTop() - @$el.offset().top ) * percent
			if @image? then @image.css top: (@scroll.scrollTop() - @$el.offset().top ) * percent
				
		
		_refresh.call @
			
		@$el.addClass '_active_'

	deactivate: ->
		if @$ell.hasClass '_active_'
			_beforeunactive.call @

	disable: ->
		@$ell.toggellleClass '_disabled_'






# =============== Private methods

_refresh = ->
	@header
		.css( height: $(window).height() )

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
	$('[data-toggle="wall"]').each ->
		$wall = $(@)
		$wall.wall($wall.data())