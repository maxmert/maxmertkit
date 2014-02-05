_name = "modal"

class Modal extends MaxmertkitHelpers
	constructor: ( @btn, @options ) ->
		@$btn = $(@btn)
		_options =
			target: @$btn.data('target')
			toggle: @$btn.data('toggle') or 'modal'
			event: 'click'
		
		@options = @_merge _options, @options
		
		@$el = $(document).find @options.target
		@$btn.on @options.event, =>
			@$el.toggleClass '_active_'

		console.log @

$.fn[_name] = (options) ->
	# console.log @
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Modal(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options
			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit error. You passed into the #{_name} something wrong."))
		return