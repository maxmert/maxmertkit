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

window['MaxmertkitHelpers'] = MaxmertkitHelpers