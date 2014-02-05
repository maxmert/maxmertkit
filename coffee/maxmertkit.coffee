class MaxmertkitHelpers
	constructor: ( @$btn, @options ) ->

	_extend: (object, properties) ->
		for key, val of properties
			object[key] = val
		object

	_merge: (options, overrides) ->
		@_extend (@_extend {}, options), overrides

	_setOptions: ( options ) ->
		console.log options