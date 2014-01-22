exports.config =
	modules:
		definition: false
		wrapper: false

	paths:
		public:  '.'
		watched: ['sass','docs','vendor']
	
	server:
		path: 'docs/server/app.coffee'
		port: 3333
		base: '/'
		run: yes


	files:
		javascripts:
			joinTo:
				'docs/js/vendor.js': /^docs\/js\/bower/
				'docs/js/app.js': /^docs\/js\/app/
			order:
				before: [
					'docs/js/bower/angular/angular.min.js'
				]

		stylesheets:
			joinTo:
				'main.css': /^(sass)/
				'docs/css/main.css': /^(sass)/
			order:
				before: [
					'sass/main.sass'
				]

		# templates:
		# 	joinTo: 
		# 		'docs/js/templates.js'

	plugins:
		coffeescript:
			bare: true
		
		# mustache:
		# 	include:
		# 		runtime: false
				# amd: yes
			# overrides: (handlebars) ->
			# 	handlebars.JavaScriptCompiler::nameLookup = (parent, name, type) ->
			# 		console.log parent, name, type
			# pathReplace: /0^/

		# autoReload:
		# 	enabled:
		# 		css: on
		# 		js: on
		# 		assets: off

	# Enable or disable minifying of result js / css files.
	minify: true
