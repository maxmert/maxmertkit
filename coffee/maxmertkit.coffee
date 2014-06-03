"use strict"

_eventHandlers = []
_eventCallbacks = []
_reactorEvents = []
_eventCallbackId = 0
_id = 0

isInDOM = (el) ->
	html = document.body.parentNode
	while el
		return true  if el is html
		el = el.parentNode

	false


# Event class
# ============
# Use in MaxmertkitReactor
# ============
class MaxmertkitEvent
	constructor: (@name) ->
		@callbacks = new Array()


	registerCallback: ( callback, el, id ) ->
		@callbacks.push 
			id: id
			el: el
			callback: callback

	removeCallback: ( id ) ->
		for cb, index in @callbacks
			if cb? and cb.id is id then @callbacks.splice(index, 1)


# Reactor class
# ============
# class FirstClass extends ParentClass
# 	constructor: ->
# 		...
# 		@reactor.registerEvent "close.modal"
# 	close: ->
# 		...
# 		@reactor.dispatchEvent "close.modal"
#
# class SecondClass extends ParentClass
# 	constructor: ->
# 		...
# 		@reactor.addEventListener "close.modal", =>
# 			# Do some things here
# ============
class MaxmertkitReactor
	events: _reactorEvents

	registerEvent: ( eventName ) ->
		event = new MaxmertkitEvent( eventName )
		if not @events[ eventName ]? then @events[ eventName ] = event

	dispatchEvent: ( eventName, eventArgs ) ->
		for callback, index in @events[ eventName ].callbacks
			if isInDOM callback.el
				callback.callback( eventArgs )
			else
				@events[ eventName ].removeCallback callback.id

	removeEventListener: ( eventName, callbackId ) ->
		if @events[ eventName ]?
			@events[ eventName ].removeCallback callbackId

	addEventListener: ( eventName, callback, el, immediately ) ->
		eventId = _eventCallbackId++
		if @events[ eventName ]?
			@events[ eventName ].registerCallback callback, el, eventId
		else
			i = 0
			timer = setInterval =>
				if i < 10
					if @events[ eventName ]?
						# Do callback immediately once
						callback() if immediately? and immediately
						@events[ eventName ].registerCallback callback, el, eventId
						clearInterval timer
						timer = null
					else
						i++
				else
					clearInterval timer
					timer = null
			, 1000
		
		eventId



# Should be the same for all children
_reactor = new MaxmertkitReactor()


class MaxmertkitHelpers
	_id: null
	_instances: new Array()

	reactor: _reactor

	constructor: ( @el, @options ) ->
		@_pushInstance()

	destroy: ->
		@_popInstance()
		@_destroy @
		yes


	_delete: ( object ) ->
		for key, value of object
			delete object[key]

	_destroy: ( object ) ->
		@_delete object
		object = null
		yes

	_pushInstance: ->
		@_id = _id++
		@_instances.push @

	_popInstance: ->
		for instance, index in @_instances
			if instance?._id is @_id
				@_instances.splice index, 1
			delete @

	_setOptions: ( options ) ->
		console.warning "Maxmertkit Helpers. There is no standart setOptions function."

	_extend: (object, properties) ->
		for key, val of properties
			object[key] = val
		object

	_merge: (options, overrides) ->
		@_extend (@_extend {}, options), overrides


	# Close all class instanses but current
	_selfish: ->
		for instance, index in @_instances
			if @_id isnt instance._id
				instance.close?() or instance.deactivate?()

	_isMobile: ->
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)







	# REMOVE JQUERY
	# ========================================
	#
	_removeEventListener: (el, eventName, handler) ->
		if el.removeEventListener
			el.removeEventListener eventName, handler, no
		else
			el.detachEvent "on" + eventName, handler
		return

	_addEventListener: (el, eventName, handler) ->
		if el.addEventListener
			el.addEventListener eventName, handler, no
		else
			el.attachEvent "on" + eventName, ->
				handler.call el
				return

		return

	_isInDOM: isInDOM

	# _addEventListener: (el, event, handler, capture = yes) ->
	#
	# 	# _eventHandlers stores references to nodes
	# 	_eventHandlers[el] = {}	unless el of _eventHandlers
	#
	# 	# each entry contains another entry for each event type
	# 	_eventHandlers[el][event] = []	unless event of _eventHandlers[el]
	#
	# 	# capture reference
	# 	_eventHandlers[el][event].push [
	# 		handler
	# 		capture
	# 	]
	# 	if el.addEventListener
	# 		el.addEventListener event, handler, no
	# 		return
	# 	else
	# 		el.attachEvent "on" + event, ->
	# 			handler.call el
	# 			return
	#
	# _removeEventListener: (el, event) ->
	# 	console.log _eventHandlers
	# 	if el of _eventHandlers
	# 		handlers = _eventHandlers[el]
	# 		if event of handlers
	# 			eventHandlers = handlers[event]
	# 			i = eventHandlers.length
	#
	# 			while i--
	# 				handler = eventHandlers[i]
	# 				if el.removeEventListener
	# 					el.removeEventListener event, handler[0], handler[1]
	# 				else
	# 					el.detachEvent "on" + event, handler[0]
	# 	return

	_hasClass: ( className, el ) ->
		el = el or @el
		if el.classList
			el.classList.contains(className)
		else
			new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);

	_addClass: ( className, el ) ->
		el = el or @el
		if el.classList?
			classes = className.split " "
			for classin in classes
				el.classList.add classin
		else
			el.className += ' ' + className

	_removeClass: ( className, el ) ->
		el = el or @el

		if el.classList
			classes = className.split " "
			for classin in classes
				el.classList.remove classin
		else
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')

	_closest: (selector, el) ->
		el = el or @el
		matchesSelector = el.matches or el.webkitMatchesSelector or el.mozMatchesSelector or el.msMatchesSelector
		while el
			if matchesSelector.bind(el)(selector)
				return el
			else
				el = el.parentElement
		false

	_outerWidth: (el) ->
		el = el or @el
		width = el.offsetWidth
		try
			style = el.currentStyle or getComputedStyle(el)
		if style
			if style.paddingLeft? and style.paddingLeft isnt '' then width += parseInt(style.paddingLeft)
			if style.paddingRight? and style.paddingRight isnt '' then width += parseInt(style.paddingRight)
		width

	_outerHeight: (el) ->
		el = el or @el
		height = el.offsetHeight
		try
			style = el.currentStyle or getComputedStyle(el)
		if style?
			if style.paddingTop? and style.paddingTop isnt '' then height += parseInt(style.paddingTop)
			if style.paddingBottom? and style.paddingBottom isnt '' then height += parseInt(style.paddingBottom)
		height

	_getPosition: (el) ->
		el = el or @el
		curleft = curtop = 0
		if el.offsetParent
			loop

				### FIXME: Not sure if it needed to calculate with style margin ###
				try
					style = el.currentStyle or getComputedStyle(el)
				# if style?
				# 	if style.marginTop? and style.marginTop isnt '' then curtop -= parseInt(style.marginTop)
				# 	if style.marginLeft? and style.marginLeft isnt '' then curleft -= parseInt(style.marginLeft)
				curleft += el.offsetLeft
				curtop += el.offsetTop
				break unless el = el.offsetParent

		left: curleft,
		top: curtop

	_getContainer: ( el ) ->
		parent = el or @el

		try
			style = getComputedStyle(parent)

		return parent if not style?

		if /(relative|fixed)/.test(style['position'])
			return parent

		# Return Document if there is not any parents with any style (usually if element is not deep in DOM)
		while parent? and parent = parent.parentNode
			try
				style = getComputedStyle(parent)

			return parent if not style?

			if /(relative|fixed)/.test(style['position'])
				return parent

		return document

	_getScrollContainer: ( el ) ->
		parent = el or @el

		try
			style = getComputedStyle parent

		return parent if not style?

		if /(auto|scroll)/.test(style['overflow'] + style['overflow-y'] + style['overflow-x']) and parent.nodeName isnt 'BODY'
			return parent

		# Return Document if there is not any parents with any style (usually if element is not deep in DOM)
		while parent = parent.parentNode
			try
				style = getComputedStyle parent

			return parent if not style?

			if /(auto|scroll)/.test(style['overflow'] + style['overflow-y'] + style['overflow-x']) and parent.nodeName isnt 'BODY'
				return parent
				# if style['position'] isnt 'absolute' or style['position'] in ['relative', 'absolute', 'fixed']

		return document

	_setCSSTransform: ( el, transform ) ->
		el = el or @el

		el.style.webkitTransform = transform
		el.style.mozTransform = transform
		el.style.msTransform = transform
		el.style.oTransform = transform
		el.style.transform = transform

	_setCSSFilter: ( el, filter ) ->
		el = el or @el

		el.style.webkitFilter = filter
		el.style.mozFilter = filter
		el.style.msFilter = filter
		el.style.oFilter = filter
		el.style.filter = filter

	_setCSSOpacity: ( el, opacity ) ->
		el = el or @el

		el.style.webkitOpacity = opacity
		el.style.mozOpacity = opacity
		el.style.msOpacity = opacity
		el.style.oOpacity = opacity
		el.style.opacity = opacity


# Initialize rAF
# to improove scrolling events inside plugins
(->
	lastTime = 0
	vendors = [
		"ms"
		"moz"
		"webkit"
		"o"
	]
	x = 0

	while x < vendors.length and not window.requestAnimationFrame
		window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"]
		window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] or window[vendors[x] + "CancelRequestAnimationFrame"]
		++x
	unless window.requestAnimationFrame
		window.requestAnimationFrame = (callback, element) ->
			currTime = new Date().getTime()
			timeToCall = Math.max(0, 16 - (currTime - lastTime))
			id = window.setTimeout(->
				callback currTime + timeToCall
				return
			, timeToCall)
			lastTime = currTime + timeToCall
			id
	unless window.cancelAnimationFrame
		window.cancelAnimationFrame = (id) ->
			clearTimeout id
			return
	return
)()

# Initialize bind for non ES5
Function::bind = Function::bind or (d) ->
	a = Array::splice.call(arguments_, 1)
	c = this
	b = ->
		e = a.concat(Array::splice.call(arguments_, 0))
		return c.apply(d, e)  unless this instanceof b
		c.apply this, e
		return

	b:: = c::
	b


window['MaxmertkitHelpers'] = MaxmertkitHelpers
window['MaxmertkitReactor'] = MaxmertkitReactor
window['MaxmertkitEvent'] = MaxmertkitEvent
