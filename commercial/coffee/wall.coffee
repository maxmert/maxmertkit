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
			
			beforeactive: ->
			onactive: ->
			beforeunactive: ->
			onunactive: ->
		
		@options = @_merge _options, @options

		super @$el, @options

		@_setOptions @options

		@header = @$el.find('.-header, header')

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
		$(document).on "scroll.#{@_name}.#{@_id}", ( event ) =>
			@video.css top: event.currentTarget.body.scrollTop / 2
			# @header.css top: -event.currentTarget.body.scrollTop
		
		@header
			.css( height: $(window).height() )
			.delay(500)
			.fadeIn('slow')

	deactivate: ->
		if @$ell.hasClass '_active_'
			_beforeunactive.call @

	disable: ->
		@$ell.toggellleClass '_disabled_'






# =============== Private methods

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