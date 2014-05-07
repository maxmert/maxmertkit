_eventCallbacks = []
_reactorEvents = []

_globalRotation =
	x: 0
	y: 0
	z: 0

_version = "0.0.1"


class MaxmertkitEvent
	constructor: (@name) ->

	callbacks: _eventCallbacks

	registerCallback: ( callback ) ->
		@callbacks.push callback




class MaxmertkitReactor
	events: _reactorEvents

	registerEvent: ( eventName ) ->
		event = new MaxmertkitEvent( eventName )
		@events[ eventName ] = event

	dispatchEvent: ( eventName, eventArgs ) ->
		for callback in @events[ eventName ].callbacks
			callback( eventArgs )

	addEventListener: ( eventName, callback ) ->
		@events[ eventName ].registerCallback callback




class MaxmertkitHelpers
	_id: 0
	_instances: new Array()

	constructor: ( @$btn, @options ) ->
		@_pushInstance()
		if @_afterConstruct?
			@_afterConstruct()

	destroy: ->
		@$el.off ".#{@_name}"
		@_popInstance()

	_extend: (object, properties) ->
		for key, val of properties
			object[key] = val
		object

	_merge: (options, overrides) ->
		@_extend (@_extend {}, options), overrides

	_setOptions: ( options ) ->
		console.warning "Maxmertkit Helpers. There is no standart setOptions function."

	_pushInstance: ->
		@_id++
		@_instances.push @

	_popInstance: ->
		for instance, index in @_instances
			if instance._id is @_id
				@_instances.splice index, 1
			delete @

	_selfish: ->
		for instance, index in @_instances
			if @_id isnt instance._id
				instance.close()

	_getVersion: ->
		_version



	# EVENT REACTOR
	reactor: new MaxmertkitReactor()



	# HELPERS

	_setTransform: ( style, transform ) ->
		style.webkitTransform = transform
		style.MozTransform = transform
		style.transform = transform

	_equalNodes: ( node1, node2 ) ->
		node1.get(0) is node2.get(0)

	_deviceMobile: ->
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

	_refreshSizes: ->
		@_windowHeight = $(window).height()
		@_windowWidth = $(window).width()
		@_height = @$el.height()
		@_width = @$el.width()

		if @scroll?
			if @scroll[0].nodeName is 'BODY'
				@_offset = @$el.offset()
			else
				@_offset = @$el.offset()
		else
			@_offset = @$el.offset()







	# POSITIONING

	_getContainer: (el) ->
		parent = el[0] or el

		# Return Document if there is not any parents with any style (usually if element is not deep in DOM)
		while parent = parent.parentNode
			try
				style = getComputedStyle parent


			return $(parent) if not style?

			if /(relative)/.test(style['position']) or ( parent? and parent.style? and /(relative)/.test(parent.style['position']) )
					return $(parent)

		return $(document)

	_getScrollParent: ( el ) ->
		parent = el[0] or el

		# Return Document if there is not any parents with any style (usually if element is not deep in DOM)
		while parent = parent.parentNode
			try
				style = getComputedStyle parent

			return $(parent) if not style?

			# if ( style.webkitPerspective? and style.webkitPerspective isnt 'none' ) or ( style.mozPerspective? and style.mozPerspective isnt 'none' ) or ( style.perspective? and style.perspective isnt 'none' )
			# 	console.log parent
			# 	return $(parent)

			if /(auto|scroll)/.test(style['overflow'] + style['overflow-y'] + style['overflow-x']) and $(parent)[0].nodeName isnt 'BODY'
				return $(parent)
				# if style['position'] isnt 'absolute' or style['position'] in ['relative', 'absolute', 'fixed']

		return $(document)

	_isVisible: ->
		@_offset.top - @_windowHeight <= @scroll.scrollTop() and @scroll.scrollTop() <= @_offset.top + @_height

	_getVisiblePercent: ->
		min = @_offset.top
		current = @scroll.scrollTop()
		max = @_offset.top + @_height

		(current - min) / (max - min)



	_scrollVisible: ->
		if @scroll?
			min = @_offset.top - @_windowHeight
			max = @_offset.top + @_height + @_windowHeight
			current = @scroll.scrollTop() + @_windowHeight
			percent = 1 - current / max

			1 > percent > 0

		else

			yes



	# 3D
	_setGlobalRotation: (x, y, z) ->
		_globalRotation =
			x: x
			y: y
			z: z

	_getGlobalRotation: ->
		_globalRotation









# SCROLL EVENTS
###
Adds support for the special browser events 'scrollstart' and 'scrollstop'.
###
(->
	special = jQuery.event.special
	uid1 = "D" + (+new Date())
	uid2 = "D" + (+new Date() + 1)
	special.scrollstart =
		setup: ->
			timer = undefined
			handler = (evt) ->
				_args = arguments
				if timer
					clearTimeout timer
				else
					evt.type = "scrollstart"
					jQuery.event.trigger.apply @, _args
				timer = setTimeout(->
					timer = null
					return
				, special.scrollstop.latency)
				return

			jQuery(this).bind("scroll", handler).data uid1, handler
			return

		teardown: ->
			jQuery(this).unbind "scroll", jQuery(this).data(uid1)
			return

	special.scrollstop =
		latency: 300
		setup: ->
			timer = undefined
			handler = (evt) ->
				_args = arguments
				clearTimeout timer  if timer
				timer = setTimeout(->
					timer = null
					evt.type = "scrollstop"
					jQuery.event.trigger.apply @, _args
					return
				, special.scrollstop.latency)
				return

			jQuery(this).bind("scroll", handler).data uid2, handler
			return

		teardown: ->
			jQuery(this).unbind "scroll", jQuery(this).data(uid2)
			return

	return
)()




# Remove pointer events while scrolling
# $(window).on "scrollstart.kit", ( event ) ->
# 	if not $('body').hasClass '-no-pointer-events'
# 		$('body').addClass '-no-pointer-events'
#
# $(window).on "scrollstop.kit", =>
# 	if $('body').hasClass '-no-pointer-events'
# 		$('body').removeClass '-no-pointer-events'



window['MaxmertkitHelpers'] = MaxmertkitHelpers
