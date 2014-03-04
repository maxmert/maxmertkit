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




	_equalNodes: ( node1, node2 ) ->
		node1.get(0) is node2.get(0)

	_deviceMobile: ->
		@$el.width() < 768


	# POSITIONING
	
	_getContainer: (el) ->
		parent = el[0] or el
		
		# Return Document if there is not any parents with any style (usually if element is not deep in DOM)
		while parent = parent.parentNode
			try
				style = getComputedStyle parent
			
			return $(parent) if not style?

			if /(relative)/.test(style['position'])
				return parent

		return document.body

	_getScrollParent: ( el ) ->
		parent = el[0] or el
		
		# Return Document if there is not any parents with any style (usually if element is not deep in DOM)
		while parent = parent.parentNode
			try
				style = getComputedStyle parent
			
			return $(parent) if not style?

			if ( style.webkitPerspective? and style.webkitPerspective isnt 'none' ) or ( style.mozPerspective? and style.mozPerspective isnt 'none' ) or ( style.perspective? and style.perspective isnt 'none' )
				return parent
			if /(auto|scroll)/.test(style['overflow'] + style['overflow-y'] + style['overflow-x'])
				if position isnt 'absolute' or style['position'] in ['relative', 'absolute', 'fixed']
					return parent

		return $(document)



window['MaxmertkitHelpers'] = MaxmertkitHelpers