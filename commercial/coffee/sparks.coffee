_name = "sparks"
_instances = []
_nav = []
_id = 0

class Sparks extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	# _nav: _nav
	# _direction: 0

	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			kind: @$el.data('kind') or 'sparks'
			quantity: @$el.data('quantity')*1 or 100
			texture: @$el.data('texture') or null
			color: @$el.data('color') or '0.1,0.1,0.1'
			size: @$el.data('size')*1 or 0.1
			accelerate: @$el.data('accelerate')*1 or 0.8
			axes: @$el.data('axes')*1 or 0.05
			random:
				x: 50
				y: 50
				z: 50
			# begin: @$el.data('begin') or 0

			# onactive: ->
		
		@options = @_merge _options, @options

		super @$el, @options

		@_setOptions @options

		@activate()


	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Sparks. You're trying to set unpropriate option."

			switch key

				when 'color'
					@options[key] = value.split ','

				else
					@options[key] = value
			
			if typeof value is 'function'
				@[key] = @options[key]



	destroy: ->
		$(@$el).off ".#{@_name}.#{@_id}"
		super

	
	activate: ->
		@scroll = @_getScrollParent(@el)

		_initialize.call @
		_initializeParticles.call @
		_animate.call @

		$(window).on "resize.#{@_name}.#{@_id}", =>
			@_refreshSizes()
			@scene.renderer.setSize @_windowWidth, @_windowHeight

		if @options.accelerate then _previousScroll = _currentScroll = @scroll.scrollTop()
		@scroll.on "scroll.#{@_name}.#{@_id}", =>
			_currentScroll = @scroll.scrollTop()
			if @options.accelerate
				@accelerate.acceleration.y = (_currentScroll - _previousScroll) * @options.accelerate
			
			if @options.axes
				@scene.camera.position.y = -_currentScroll * @options.axes

			_previousScroll = _currentScroll
			
	hide: ->
	
	show: ->
	






# =============== Private methods
_scene = _particleCloud = null
_self = null
_accelerate = null

_animate = =>
	if _particleCloud?
		_particleCloud.geometry.verticesNeedUpdate = yes
		_particleCloud.geometry.__dirtyVertices = yes

	requestAnimationFrame _animate

	_render()

_render = ->
	time = new Date().getTime()
	delta = time - oldTime
	oldTime = time
	delta = 1000 / 60  if isNaN(delta) or delta > 1000 or delta is 0

	if _particleCloud?
		globalRotation = _self._getGlobalRotation()
		# _particleCloud.rotation.x = globalRotation.x
		# _particleCloud.rotation.y = globalRotation.y
		# _particleCloud.rotation.z = globalRotation.z
		# if _accelerate?
			# _accelerate.acceleration.x = globalRotation.y
		_particleCloud.rotation.y = globalRotation.y
	
	_scene.renderer.render( _scene, _scene.camera )

_initialize = ->
	@_refreshSizes()

	_self = @
	
	_scene = @scene = new THREE.Scene()
	@scene.camera = new THREE.PerspectiveCamera 45, @_windowWidth / @_windowHeight, 0.1, 10000
	@scene.camera.position.y = - @scroll.scrollTop() * @options.axes
	@scene.camera.position.x = 0
	@scene.camera.position.z = 300
	# @scene.camera.lookAt( new THREE.Vector3( 0,0,0 ) )
	@scene.add @scene.camera

	@scene.renderer = new THREE.WebGLRenderer
		antialias: yes
		physicallyBasedShading: yes
		shadowMapEnabled: yes
		alpha: yes
	@scene.renderer.autoClear = no
	@scene.renderer.clearAlpha = 1
	@scene.renderer.setSize @_windowWidth, @_windowHeight
	@scene.renderer.domElement.className = "-#{@_name}"
	@$el.append @scene.renderer.domElement



_initializeParticles = ->
	timeOnShapePath = 0

	parent = new THREE.Object3D()

	particleslength = @options.quantity
	particles = new THREE.Geometry()
	particles.dynamic = yes
	emitterpos = new THREE.Vector3( 0, 0, 0 )

	newpos = (x, y, z) =>
		return new THREE.Vector3(x, y, z)


	Pool =
		__pools: []
	  
		# Get a new Vector
		get: ->
			return @__pools.pop()  if @__pools.length > 0
			# console.log "pool ran out!"
			null

		# Release a vector back into the pool
		add: (v) ->
			@__pools.push v



	i = 0
	while i < particleslength
		pp = newpos(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
		particles.vertices.push pp
		Pool.add i
		i++

	if @options.texture
		map = THREE.ImageUtils.loadTexture("#{@options.texture}")
	else
		map = null

	material = new THREE.ParticleSystemMaterial
		color: new THREE.Color().setRGB @options.color[0], @options.color[1], @options.color[2]
		map: map
		size: @options.size
		sizeAttenuation: yes
		transparent: true

	_particleCloud = @particleCloud = new THREE.ParticleSystem( particles, material )
	@particleCloud.dynamic = yes
	@particleCloud.sortParticles = true


	vertices = @particleCloud.geometry.vertices
	v = 0

	while v < vertices.length
		particles.vertices[v].set Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ,Number.POSITIVE_INFINITY
		v++

	@particleCloud

	setTargetParticle = =>
		target = Pool.get()
		target


	onParticleCreated = (p) =>
		# console.log p
		
		position = p.position
		if p.target?
			p.target.position = position
			target = p.target
			
			if target
		    
				if Math.random() > 0.5
					multiplyer = -1
				else
					multiplyer = 1
				emitterpos.x = multiplyer * Math.floor(Math.random() * 500) + 0
				
				if Math.random() > 0.5
					multiplyer = -1
				else
					multiplyer = 1
				emitterpos.z = multiplyer * (Math.floor(Math.random() * 200) + 10)
				
				if Math.random() > 0.5
					multiplyer = -1
				else
					multiplyer = 1
				emitterpos.y = multiplyer * Math.floor(Math.random() * 500) + 0
				
				particles.vertices[target] = p.position


	onParticleDead = (particle) =>
		target = particle.target
		
		if target
			particles.vertices[target].set Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY ,Number.POSITIVE_INFINITY
			# Mark particle system as available by returning to pool
			Pool.add particle.target


	sparksEmitter = new SPARKS.Emitter(new SPARKS.SteadyCounter(100))

	sparksEmitter.addInitializer new SPARKS.Position(new SPARKS.PointZone(emitterpos))
	sparksEmitter.addInitializer new SPARKS.Lifetime(20, 60)
	sparksEmitter.addInitializer new SPARKS.Target(null, setTargetParticle)
	sparksEmitter.addInitializer new SPARKS.Velocity(new SPARKS.PointZone(new THREE.Vector3( 0.00002, 0.00002, 0.00002 )))

	_accelerate = @accelerate = new SPARKS.Accelerate( 0, 0, 0 )
	@random = new SPARKS.RandomDrift(@options.random.x, @options.random.y, @options.random.z)

	# TOTRY Set velocity to move away from centroid
	sparksEmitter.addAction new SPARKS.Age(TWEEN.Easing.Linear.None)
	sparksEmitter.addAction @accelerate
	sparksEmitter.addAction new SPARKS.Move()
	sparksEmitter.addAction @random
	sparksEmitter.addCallback "created", onParticleCreated
	sparksEmitter.addCallback "dead", onParticleDead
	
	sparksEmitter.start()


	@scene.add @particleCloud
	# @scene.camera.lookAt( emitterpos )



$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Sparks(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Sparks. You passed into the #{_name} something wrong."))
		return



$(window).on 'load', ->
	$('[data-kind="sparks"]').each ->
		$sparks = $(@)
		$sparks.sparks($sparks.data())