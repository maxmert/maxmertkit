class MaxmertkitHelpers
	_id: 0
	_instances: []

	constructor: ( @$btn, @options ) ->
		@_pushInstance()

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
		console.log options

	_pushInstance: ->
		@_id++
		@_instances.push @

	_popInstance: ->
		for instance, index in @_instances
			if instance._id is @_id
				@_instances.splice index, 1
			delete @




	_equalNodes: ( node1, node2 ) ->
		node1.get(0) is node2.get(0)


	# POSITIONING

	_getScrollParent: ( el ) ->
		parent = el[0] or el
		
		# Return Document if there is not any parents with any style (usually if element is not deep in DOM)
		while parent = parent.parentNode
			try
				style = getComputedStyle parent
			
			return $(parent) if not style?

			if /(auto|scroll)/.test(style['overflow'] + style['overflow-y'] + style['overflow-x'])
				if position isnt 'absolute' or style['position'] in ['relative', 'absolute', 'fixed']
					return parent

		return document.body



window['MaxmertkitHelpers'] = MaxmertkitHelpers