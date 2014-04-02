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

			# light
			lightDirect: @$el.data('light-direct') or yes
			lightDirectColor: @$el.data('light-direct-color') or '255,255,255'
			lightDirectPosition: @$el.data('light-direct-position') or '0,0.3{,0'
			lightDirectIntensity: @$el.data('light-direct-intensity') or 1

			lightGlobal: @$el.data('light-global') or yes
			lightGlobalIntensity: @$el.data('light-global-intensity') or 0.005
			lightGlobalPosition: @$el.data('light-global-position') or '0,500,0'
			lightGlobalColor: @$el.data('light-global-color') or '230, 233, 212'
			lightGlobalGroundColor: @$el.data('light-global-ground-color') or '106,77,65'

			# floor
			floor: @$el.data('floor') or yes
			floorColor: @$el.data('floor-color') or '255,255,255'
			floorPosition: @$el.data('floor-position') or '0,-0.4,0'
			floorSize: @$el.data('floor-size') or 20

			initialize: ->
		
		@options = @_merge _options, @options

		super @$el, @options

		@_setOptions @options

		@activate()


	
	_setOptions: ( options ) ->
		
		for key, value of options
			
			if not @options[key]?
				return console.error "Maxmertkit Product. You're trying to set unpropriate option."

			if value?
				switch key

					when 'model'
						if value?

							loader = new THREE.OBJMTLLoader()
							mtl = "#{value.substring(0, value.lastIndexOf('.')+1)}mtl"
							
							loader.load value, mtl, ( object ) =>

								object.traverse ( child ) =>
									if child instanceof THREE.Mesh
										# smooth = child.geometry.clone()
										child.geometry.mergeVertices()
										child.geometry.computeVertexNormals()
										# modifier = new THREE.SubdivisionModifier(2)
										# modifier.modify( smooth )
										# child.geometry = smooth

									

								@product = object
								@product.castShadow = yes
								@product.receiveShadow = yes
								_initialize.call @
								_animate.call @

					

					when 'lightDirectColor'
						@options[key] = _stringToRGB value

					when 'lightDirectPosition'
						@options[key] = _stringToPosition value

					when 'lightDirectIntensity'
						@options[key] = parseFloat value



					when 'lightGlobalColor'
						@options[key] = _stringToRGB value

					when 'lightGlobalGroundColor'
						@options[key] = _stringToRGB value

					when 'lightGlobalPosition'
						@options[key] = _stringToPosition value

					when 'lightGlobalIntensity'
						@options[key] = parseFloat value




					when 'floorColor'
						@options[key] = _stringToRGB value

					when 'floorPosition'
						@options[key] = _stringToPosition value

					when 'floorSize'
						@options[key] = parseFloat value





					when 'position'
						@productPosition = value.split ','
						for val, index in @productPosition
							@productPosition[index] = val * 1

					when 'camera'
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
		@container = $ @_getContainer @el

		$(window).on "resize.#{@_name}.#{@_id}", =>
			@_refreshSizes()
			@scene.renderer.setSize @container.width(), @container.height()
			
	hide: ->
	
	show: ->
	






# =============== Private methods
_scene = null
_product = null
_targetRotation = 0
_self = null
_container = null

_animate = =>

	timer = Date.now() * 0.0002;
	_scene.camera.lookAt(_scene.position)
	_scene.camera.position.x = Math.cos(timer) * 2
	_scene.camera.position.z = Math.sin(timer) * 2
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
	_container = @container
	@scene.camera = new THREE.PerspectiveCamera 45, _container.width() / _container.height(), 0.1, 10000
	
	@scene.camera.position.x = @cameraPosition[0]
	@scene.camera.position.y = @cameraPosition[1]
	@scene.camera.position.z = @cameraPosition[2]


	@scene.camera.rotation.x = @scene.camera.rotation.y = @scene.camera.rotation.z = 0
	@scene.camera.rotation.x = -10 * Math.PI / 180

	@scene.add @scene.camera

	@scene.renderer = new THREE.WebGLRenderer
		antialias: yes
		# physicallyBasedShading: yes
		# shadowMapEnabled: yes
		alpha: yes
	
	@scene.renderer.autoClear = no
	@scene.renderer.clearAlpha = 1
	@scene.renderer.shadowMapEnabled = yes
	@scene.renderer.shadowMapType = THREE.PCFShadowMap
	@scene.renderer.gammaInput = true
	@scene.renderer.gammaOutput = true
	@scene.renderer.setSize _container.width(), _container.height()
	
	@scene.renderer.domElement.className = "-#{@_name}"
	@$el.append @scene.renderer.domElement

	_product = @product
	@product.scale.set 1, 1, 1
	@product.position.set @productPosition[0], @productPosition[1], @productPosition[2]
	# @scene.camera.lookAt( @product.position )
	# @product.rotation.y = 90 * Math.PI / 180

	@scene.add( @product )
	
	

	# if @options.lightGlobal
	# 	hemiLight = new THREE.HemisphereLight( @options.lightGlobalColor, @options.lightGlobalGroundColor, @options.lightGlobalIntensity )
	# 	# hemiLight.color = @options.lightGlobalColor
	# 	# hemiLight.groundColor = @options.lightGlobalGroundColor
	# 	hemiLight.position = @options.lightGlobalPosition
	# 	# console.log typeof @options.lightGlobalIntensity
	# 	@scene.add( hemiLight )


	if @options.lightDirect
		dirLight = new THREE.DirectionalLight( 0xffffff, @options.lightDirectIntensity )
		dirLight.color = @options.lightDirectColor
		dirLight.position = @options.lightDirectPosition
		dirLight.position.multiplyScalar( 1.3 )
		@scene.add( dirLight )

		dirLight.castShadow = true
		dirLight.shadowCameraVisible = yes

		dirLight.shadowMapWidth = 512
		dirLight.shadowMapHeight = 512

		d = 200

		# dirLight.target = @product
		dirLight.shadowCameraLeft = -d
		dirLight.shadowCameraRight = d
		dirLight.shadowCameraTop = d
		dirLight.shadowCameraBottom = -d

		dirLight.shadowCameraFar = 1000
		dirLight.shadowBias = 0.01
		dirLight.shadowDarkness = 0.5




	# ambient = new THREE.AmbientLight( 0x444444 )
	# @scene.add( ambient )

	# light = new THREE.SpotLight( 0xffffff, 1, 0, Math.PI / 2, 1 )
	# light.position.set( 0, 2, 0 )
	# light.target.position.set( 0, 0, 0 )

	# light.castShadow = true

	# light.shadowCameraNear = 1200
	# light.shadowCameraFar = 2500
	# light.shadowCameraFov = 50

	# light.shadowCameraVisible = true

	# light.shadowBias = 0.01
	# light.shadowDarkness = 0.5

	# light.shadowMapWidth = 2048
	# light.shadowMapHeight = 1024

	# @scene.add( light )





	if @options.floor
		geometryFloor = new THREE.PlaneGeometry( @options.floorSize, @options.floorSize )
		materialFloor = new THREE.MeshPhongMaterial color: 0xffdd99 
		materialFloor.ambient = materialFloor.color
		planeFloor = new THREE.Mesh( geometryFloor, materialFloor )
		planeFloor.position = @options.floorPosition
		# planeFloor.scale.set( 100, 100, 100 )
		planeFloor.rotation.x = - Math.PI / 2
		planeFloor.castShadow = no
		planeFloor.receiveShadow = yes
		@scene.add( planeFloor )

	boxgeometry = new THREE.CubeGeometry(1, 1, 1)
	boxmaterial = new THREE.MeshLambertMaterial
		color: 0x0aeedf

	cube = new THREE.Mesh(boxgeometry, boxmaterial);
	cube.castShadow = true;
	cube.position.x = 0;
	cube.position.y = 0.3;
	cube.position.z = 0;

	@scene.add(cube)


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


	if @options.initialize? and typeof @options.initialize is 'function'
		@options.initialize.call @




# PRIVATE METHODS
_stringToRGB = ( string ) ->
	array = string.split ','

	for item, index in array
		item[index] = parseInt( item )
	
	new THREE.Color().setRGB(array[0], array[1], array[2])


_stringToPosition = ( string ) ->
	array = string.split ','
	
	for item, index in array
		array[index] = item * 1
	
	new THREE.Vector3 array[0], array[1], array[2]


_morphColorsToFaceColors = (geometry) ->
	if geometry.morphColors and geometry.morphColors.length
		colorMap = geometry.morphColors[0]
		i = 0

		while i < colorMap.colors.length
			geometry.faces[i].color = colorMap.colors[i]
			geometry.faces[i].color.offsetHSL 0, 0.3, 0
			i++
	return


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