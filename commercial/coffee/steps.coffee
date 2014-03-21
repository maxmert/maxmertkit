###
Animating show content when it's in the visible page part (page steps),
and hide it, when you scroll out.
###

_name = "steps"
_instances = []
_nav = []
_id = 0

class Steps extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	_nav: _nav
	_direction: 0
	
	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			kind: @$el.data('kind') or 'steps'
			stepSelect: "[data-step]"
			steps: []
			begin: @$el.data('begin') or 0

			onactive: ->
		
		@options = @_merge _options, @options

		super @$el, @options

		@_setOptions @options

		@setStep( @options.begin )

	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Steps. You're trying to set unpropriate option."

			switch key

				when 'stepSelect'
					@stepsItems = []
					@active = 0
					@$el.find( value ).each ( index, step ) =>
						@stepsItems.push $(step)
					
					@stepsItems.sort _compareSteps

				when 'steps'
					if value? and value.length
						@steps = value

				when 'begin'
					if typeof value isnt 'number'
						@options[key] = value * 1

				else
					@options[key] = value
			
			if typeof value is 'function'
				@[key] = @options[key]



	destroy: ->
		$(@$el).off ".#{@_name}.#{@_id}"
		super

	
	activate: ->
		@_refreshSizes()
		_activateStep.call @

	setStep: ( number ) ->
		if 0 <= number <= @steps.length
			_setStep.call @, number
				
			
	hide: ->
		@$el.removeClass @options.activeClass
		clearTimeout( @showTimer ) if @showTimer?

	show: ->
		@$el.addClass @options.activeClass






# =============== Private methods

_nextStep = ->
	if @active < @stepsItems.length
		@active++
		_activateStep.call @

_prevStep = ->
	if @active > 0
		@active--
		_activateStep.call @

_setStep = ( number ) ->
	if number >= 0 and  number < @stepsItems.length
		_deactivateStep.call @
		@active = number
		_activateStep.call @


_activateStep = ->
	@stepsItems[ @active ].addClass '_active_ _right_'

	if @onactive?
		@onactive.call @

	if @steps? and @steps.length and @steps[ @active ]?
		try
			deferred = @steps[ @active ].call @
			deferred
				.done =>
					_deactivateStep.call @
					_nextStep.call @

					
				.fail =>
					_prevStep.call @

		catch
			_prevStep.call @

_compareSteps = ( one, two ) ->
	if one.data('step') * 1 < two.data('step') * 1
		-1
	else
		1
	0
	

_deactivateStep = ->
	for step in @stepsItems
		if step.hasClass '_active_'
			step.removeClass '_active_ _right_'

$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Steps(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Steps. You passed into the #{_name} something wrong."))
		return



# NO AUTOLOAD
# We need @steps to understand when to go next
# 
# $(window).on 'load', ->
# 	$('[data-kind="steps"]').each ->
# 		$steps = $(@)
# 		$steps.steps($steps.data())