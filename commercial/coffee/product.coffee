_name = "product"
_instances = []
_nav = []
_id = 0

class Product extends MaxmertkitHelpers
	
	_name: _name
	_instances: _instances
	# _nav: _nav
	# _direction: 0

	# =============== Public methods

	constructor: ( @el, @options ) ->
		@$el = $(@el)

		@_id = _id++
		
		_options =
			kind: @$el.data('kind') or 'product'
			model: @$el.data('model') or null
			position: @$el.data('position') or '0,0,0'
			camera: @$el.data('camera') or '0,0,-100'
		
		@options = @_merge _options, @options

		super @$el, @options

		@_setOptions @options

		@activate()


	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Product. You're trying to set unpropriate option."

			switch key

				when 'model'
					if value?

						loader = new THREE.OBJMTLLoader()
						mtl = "#{value.substring(0, value.lastIndexOf('.')+1)}mtl"
						
						loader.load value, mtl, ( object ) =>
							@product = object
							_initialize.call @
							_animate.call @

				when 'position'
					if value?
						@productPosition = value.split ','
						for val, index in @productPosition
							@productPosition[index] = val * 1

				when 'camera'
					if value?
						@cameraPosition = value.split ','
						for val, index in @cameraPosition
							@cameraPosition[index] = val * 1


				else
					@options[key] = value
			
			if typeof value is 'function'
				@[key] = @options[key]



	destroy: ->
		$(@$el).off ".#{@_name}.#{@_id}"
		super

	
	activate: ->
		@scroll = @_getScrollParent(@el)

		$(window).on "resize.#{@_name}.#{@_id}", =>
			@_refreshSizes()
			@scene.renderer.setSize @_windowWidth, @_windowHeight
			
	hide: ->
	
	show: ->
	






# =============== Private methods
_scene = null
_product = null
_targetRotation = 0
_self = null

_animate = =>

	requestAnimationFrame _animate

	_render()

_render = ->
	time = new Date().getTime()
	delta = time - oldTime
	oldTime = time
	delta = 1000 / 60  if isNaN(delta) or delta > 1000 or delta is 0

	timer = Date.now() * 0.0005

	if _product?
		# console.log _product.rotation.y
		_product.rotation.y += ( _targetRotation - _product.rotation.y ) * 0.05
		_self._setGlobalRotation _product.rotation.x, _product.rotation.y, _product.rotation.z

	# _scene.camera.position.x = Math.cos( timer ) * 10
	# _scene.camera.position.y = 2
	# _scene.camera.position.z = Math.sin( timer ) * 10

	
	_scene.renderer.render( _scene, _scene.camera )

_initialize = ->
	@_refreshSizes()
	_self = @
	_scene = @scene = new THREE.Scene()
	@scene.camera = new THREE.PerspectiveCamera 45, 600 / 600, 0.1, 10000
	
	@scene.camera.position.x = @cameraPosition[0]
	@scene.camera.position.y = @cameraPosition[1]
	@scene.camera.position.z = @cameraPosition[2]

	@scene.camera.rotation.x = @scene.camera.rotation.y = @scene.camera.rotation.z = 0

	@scene.add @scene.camera

	@scene.renderer = new THREE.WebGLRenderer
		antialias: yes
		physicallyBasedShading: yes
		shadowMapEnabled: yes
		alpha: yes
	@scene.renderer.autoClear = no
	@scene.renderer.clearAlpha = 1
	@scene.renderer.setSize 600, 600
	@scene.renderer.domElement.className = "-#{@_name}"
	@$el.append @scene.renderer.domElement

	_product = @product
	@product.position.set @productPosition[0], @productPosition[1], @productPosition[2]
	# @scene.camera.lookAt( @product.position )
	# @product.rotation.y = 90 * Math.PI / 180

	@scene.add( @product )
	
	

	hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 )
	hemiLight.color.setHSL( 0.6, 1, 0.6 )
	hemiLight.groundColor.setHSL( 0.095, 1, 0.75 )
	hemiLight.position.set( 0, 500, 0 )
	@scene.add( hemiLight )


	dirLight = new THREE.DirectionalLight( 0xffffff, 1 )
	dirLight.color.setHSL( 0.1, 1, 0.95 )
	dirLight.position.set( -1, 1.75, 1 )
	dirLight.position.multiplyScalar( 50 )
	@scene.add( dirLight )

	dirLight.castShadow = true

	dirLight.shadowMapWidth = 2048
	dirLight.shadowMapHeight = 2048

	d = 50

	dirLight.shadowCameraLeft = -d
	dirLight.shadowCameraRight = d
	dirLight.shadowCameraTop = d
	dirLight.shadowCameraBottom = -d

	dirLight.shadowCameraFar = 3500
	dirLight.shadowBias = -0.0001
	dirLight.shadowDarkness = 0.35


	_rendererDom = document


	_targetRotation = 0
	targetRotationOnMouseDown = 0

	mouseX = 0
	mouseXOnMouseDown = 0

	windowHalfX = window.innerWidth / 2
	windowHalfY = window.innerHeight / 2

	onDocumentMouseDown = (event) =>
		event.preventDefault()
		_rendererDom.addEventListener "mousemove", onDocumentMouseMove, false
		_rendererDom.addEventListener "mouseup", onDocumentMouseUp, false
		_rendererDom.addEventListener "mouseout", onDocumentMouseOut, false
		mouseXOnMouseDown = event.clientX - windowHalfX
		targetRotationOnMouseDown = _targetRotation
		return
	onDocumentMouseMove = (event) =>
		mouseX = event.clientX - windowHalfX
		_targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02
		return
	onDocumentMouseUp = (event) =>
		_rendererDom.removeEventListener "mousemove", onDocumentMouseMove, false
		_rendererDom.removeEventListener "mouseup", onDocumentMouseUp, false
		_rendererDom.removeEventListener "mouseout", onDocumentMouseOut, false
		return
	onDocumentMouseOut = (event) =>
		_rendererDom.removeEventListener "mousemove", onDocumentMouseMove, false
		_rendererDom.removeEventListener "mouseup", onDocumentMouseUp, false
		_rendererDom.removeEventListener "mouseout", onDocumentMouseOut, false
		return
	onDocumentTouchStart = (event) =>
		if event.touches.length is 1
			event.preventDefault()
			mouseXOnMouseDown = event.touches[0].pageX - windowHalfX
			targetRotationOnMouseDown = _targetRotation
		return
	onDocumentTouchMove = (event) =>
		if event.touches.length is 1
			event.preventDefault()
			mouseX = event.touches[0].pageX - windowHalfX
			_targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.05
		return

	_rendererDom.addEventListener( 'mousedown', onDocumentMouseDown, false )
	_rendererDom.addEventListener( 'touchstart', onDocumentTouchStart, false )
	_rendererDom.addEventListener( 'touchmove', onDocumentTouchMove, false )



$.fn[_name] = (options) ->
	@each ->
		unless $.data(@, "kit-" + _name)
			$.data @, "kit-" + _name, new Product(@, options)
		else
			if typeof options is "object"
				$.data(@, "kit-" + _name)._setOptions options


			else
				(if typeof options is "string" and options.charAt(0) isnt "_" then $.data(@, "kit-" + _name)[options] else console.error("Maxmertkit Product. You passed into the #{_name} something wrong."))
		return



$(window).on 'load', ->
	$('[data-kind="product"]').each ->
		$product = $(@)
		$product.product($product.data())