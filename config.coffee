exports.config =
	modules:
		definition: false
		wrapper: false

	paths:
		public:  '.'
		watched: ['sass','docs','vendor', 'commercial', 'coffee']
	
	server:
		path: 'docs/server/app.coffee'
		# path: 'commercial/server/app.coffee'
		port: 3333
		base: '/'
		run: yes


	files:
		javascripts:
			joinTo:
				'docs/js/vendor.js': /^docs\/js\/(bower|libs)/
				'docs/js/app.js': /^docs\/js\/app/
				'js/maxmertkit.js': /^coffee/
				'docs/js/maxmertkit.js': /^coffee/
				
				'commercial/app/vendor.js': /^docs\/js\/bower/
				'commercial/app/app.js': /^commercial\/app.coffee/
				'commercial/maxmertkit.js': /^commercial\/coffee/
			order:
				before: [
					'docs/js/bower/highlight-scss/highlight.pack.js'
					'docs/js/bower/jquery/jquery.min.js'
					'docs/js/bower/angular/angular.min.js'
				]

		stylesheets:
			joinTo:
				# 'main.css': /^(sass)/
				'docs/css/main.css': /^(sass)/
				'docs/css/developer.css': /^docs\/css\/dev/
				# 'commercial/main.css': /^(sass)/
				'commercial/commercial.css': /^commercial\/sass/
			order:
				before: [
					'sass/main.sass'
				]

		# templates:
		# 	joinTo: 
		# 		'docs/js/templates.js'

	plugins:
		coffeescript:
			bare: false

		sass:
			mode: 'ruby'
			options: ['-q']


		autoReload:
			enabled:
				css: on
				js: on
				assets: off

	# Enable or disable minifying of result js / css files.
	minify: no
