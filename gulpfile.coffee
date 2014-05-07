gulp = require 'gulp'
gutil = require 'gulp-util'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
coffeelint = require 'gulp-coffeelint'
uglify = require 'gulp-uglify'
gzip = require 'gulp-gzip'
watch = require 'gulp-watch'
nodemon = require 'gulp-nodemon'
sass = require 'gulp-ruby-sass'
size = require 'gulp-size'
todo = require 'gulp-todo'
cache = require 'gulp-cached'
plumber = require 'gulp-plumber'
livereload = require 'gulp-livereload'
rev = require 'gulp-rev'
minifyCSS = require 'gulp-minify-css'
bytediff = require 'gulp-bytediff'
mocha = require 'gulp-mocha'
clean = require 'gulp-clean'
runSequence = require 'run-sequence'
templater = require 'gulp-jstemplater'
browserify = require 'gulp-browserify'
rename = require 'gulp-rename'
jeditor = require 'gulp-json-editor'
argv = require('yargs').argv
gulpif = require 'gulp-if'
moment = require 'moment'
mkit = require 'gulp-mkit'



path =
	docs:
		front:
			js: "docs/js"
			sass: "docs/sass"
			css: "docs/css"
			coffee: "docs/coffee"
			templates: "docs/templates"
			vendor:
				bower: "docs/js/bower"
				libs: "docs/js/libs"
		server:
			app: "docs/server/app.coffee"


	kit:
		coffee: "coffee"
		sass: "sass"
		js: "js"
		css: "css"
		vendor:
			bower: "js/bower"
			libs: "js/libs"

	dev: "development"

	build:
		js: "build/js"
		css: "build/css"







# ====================== DEVELOPER TASKS

# Concatenate all vendors into one file
# This vendor js is only for maxmertkit.js, no docs vendors here
gulp.task 'kitVendor', ->

	files = [
		"#{path.kit.vendor.bower}/jquery/jquery.js"
		# "#{path.kit.vendor.bower}/jquery.event.swipe/jquery.event.swipe.js"
		"#{path.kit.vendor.bower}/threejs/build/three.js"
		"#{path.kit.vendor.bower}/sparksjs/Sparks.js"
		"#{path.kit.vendor.bower}/tweenjs/Tween.js"

		"#{path.kit.vendor.libs}/threejs.mtlLoader.js"
	]

	gulp.src( files )
		.pipe( cache('kitVendor') )
		.pipe( concat 'vendor.js' )
		.pipe( size( showFiles: yes ) )
		.pipe( gulp.dest "#{path.docs.front.js}" )
		# .pipe( livereload() )



# Compile all kit coffee files
# No uglyfying
gulp.task 'kitCoffee', ->

	files = [
		"#{path.kit.coffee}/maxmertkit.coffee"
		"#{path.kit.coffee}/**/*.coffee"
	]

	gulp.src( files )
		.pipe( plumber() )
		# .pipe( cache('kitCoffee') )
		.pipe( coffeelint() )
		.pipe( coffee( map: yes ).on( 'error', gutil.log ) )
		.pipe( concat 'maxmertkit.js' )
		.pipe( size( showFiles: yes ) )
		.pipe( gulp.dest "#{path.docs.front.js}" )
		.pipe( gulp.dest "#{path.kit.js}" )
		# .pipe( livereload() )


# Compile all kit sass
# No minification
gulp.task 'kitSass', ->

	files = [
		"#{path.kit.sass}/main.sass"
	]

	gulp.src( files )
		.pipe( plumber() )
		# .pipe( cache('kitSass') )
		.pipe( sass( sourcemap: yes ) )
		.pipe( size( showFiles: yes ) )
		.pipe( gulp.dest "#{path.docs.front.css}" )
		.pipe( gulp.dest "#{path.kit.css}" )
		# .pipe( livereload() )


gulp.task 'kitJson', ->

	files = [
		"./mkit.json"
	]

	gulp.src( files )
		.pipe( plumber() )
		.pipe( mkit() )
		# .pipe( gulp.dest "." )



# Create todo.md to maintain all todos in js files
# In coffee use multiline comments
gulp.task 'kitTodo', ->

	files = "#{path.docs.front.js}/maxmertkit.js"
	dest = "#{path.docs.front.js}"

	gulp.src( files )
		.pipe( cache('kitTodo') )
		.pipe( todo() )
		.pipe( gulp.dest './' )












# ====================== DOCUMENTATION TASKS

gulp.task 'docsVendor', ->

	files = [
		"#{path.docs.front.vendor.bower}/underscore/underscore.js"
		"#{path.docs.front.vendor.bower}/backbone/backbone.js"
		"#{path.docs.front.vendor.bower}/backbone.babysitter/lib/backbone.babysitter.js"
		"#{path.docs.front.vendor.bower}/marionette/lib/backbone.marionette.js"
		"#{path.docs.front.vendor.bower}/backbone.wreqr/lib/backbone.wreqr.js"
		"#{path.docs.front.vendor.bower}/mustache/mustache.js"
		"#{path.docs.front.vendor.bower}/highlightjs/highlight.pack.js"
	]

	gulp.src( files )
		# .pipe( cache('docsVendor') )
		.pipe( concat 'docsvendor.js' )
		.pipe( size( showFiles: yes ) )
		.pipe( gulp.dest "#{path.docs.front.js}" )
		# .pipe( livereload() )



gulp.task 'docsApp', ->

	gulp.src( "#{path.docs.front.coffee}/app.coffee", { read: false } )
		.pipe( plumber() )
		.pipe( browserify( transform: ['coffeeify'], extensions: ['.coffee'], debug: yes ) )
		.pipe( rename('app.js') )
		.pipe( size( showFiles: yes ) )
		.pipe( gulp.dest "#{path.docs.front.js}" )
		# .pipe( livereload() )



gulp.task 'docsTemplates', ->

	files = [
		"#{path.docs.front.templates}/**/*.html"
	]

	gulp.src( files )
		# .pipe( cache('docsApp') )
		.pipe( templater( "templates.js", {variable: "module", commonjs: yes} ) )
		.pipe( size( showFiles: yes ) )
		.pipe( gulp.dest "#{path.docs.front.js}" )



# Compile all kit sass
# No minification
gulp.task 'docsSass', ->

	files = [
		"#{path.docs.front.sass}/developer.sass"
	]

	gulp.src( files )
		.pipe( plumber() )
		# .pipe( cache('docsSass') )
		.pipe( sass( sourcemap: yes ) )
		.pipe( size( showFiles: yes ) )
		.pipe( gulp.dest "#{path.docs.front.css}" )
		# .pipe( livereload() )



# Starts node server
gulp.task 'nodemon', ->
	nodemon(
		script: path.docs.server.app
		ext: 'server/**/*.coffee server/**/*.html'
	)








# ================ TESTS TASKS

gulp.task 'test', ->
	gulp.src( "test/kit.coffee" )
		.pipe( mocha() )










# ================ GLOBAL TASKS

gulp.task 'watch', ->

	files =
		kitJson: "./mkit.json"
		kitCoffee: "#{path.kit.coffee}/**/*.coffee"
		kitTodo: "#{path.docs.front.js}/maxmertkit.js"
		kitVendor:
			bower: "#{path.kit.vendor.bower}/**/*.js"
			libs: "#{path.kit.vendor.libs}/**/*.js"
		kitSass: "#{path.kit.sass}/**/*.sass"
		kitDocsVendor:
			bower: "#{path.docs.front.vendor.bower}/**/*.js"
			libs: "#{path.docs.front.vendor.libs}/**/*.js"
		docsCoffee: "#{path.docs.front.coffee}/**/*.coffee"
		docsSass: "#{path.docs.front.sass}/developer.sass"
		docsTemplates: "#{path.docs.front.templates}/**/*.html"

	gulp.watch files.kitJson, [ 'kitJson' ]
	gulp.watch files.kitCoffee, [ 'kitCoffee' ]
	gulp.watch files.kitTodo, [ 'kitTodo' ]
	gulp.watch [ files.kitVendor.libs ], [ 'kitVendor' ]
	gulp.watch files.kitSass, [ 'kitSass' ]

	gulp.watch [ files.kitDocsVendor.libs ], [ 'kitVendor' ]
	gulp.watch files.docsCoffee, [ 'docsApp' ]
	gulp.watch files.docsSass, [ 'docsSass' ]
	gulp.watch files.docsTemplates, [ 'docsTemplates', 'docsApp' ]


	server = livereload()
	gulp.watch( [
		"#{path.docs.front.css}/**"
		"#{path.docs.front.js}/*.js"
		"docs/server/**/*.html"

	] ).on 'change', ( file ) ->
		server.changed file.path


gulp.task( 'default', [ 'kitVendor', 'kitJson', 'kitCoffee', 'kitSass', 		'docsTemplates', 'docsVendor', 'docsApp', 'docsSass', 'nodemon' ], ->
	# gulp.tasks.nodemon.fn()
	gulp.tasks.watch.fn()
	gulp.tasks.kitTodo.fn()
)









# ====================== BUILD TASKS

gulp.task 'clean', ->
	gulp.src( ["#{path.build.js}", "#{path.build.css}" ], read: no)
		.pipe( clean() )


gulp.task 'build', [ 'test' ], ->

	gutil.log gutil.colors.cyan '\n\n\nStarting building. It can take a while. Please, be patient.\n\n'

	runSequence [ 'kitCoffee', 'kitSass', 'clean' ],  ->
		gulp.src( "#{path.docs.front.js}/maxmertkit.js" )

			.pipe( gulp.dest "#{path.build.js}" )

			.pipe( bytediff.start() )
			.pipe( uglify() )
			.pipe( bytediff.stop() )
			.pipe( gzip( append: no ) )
			.pipe( rename( basename: "maxmertkit.min" ) )
			.pipe( gulp.dest "#{path.build.js}" )

			.pipe( gulpif(argv.rev, rev()) )
			.pipe( gulpif(argv.rev, gulp.dest("#{path.build.js}")) )



		gulp.src( "#{path.docs.front.css}/main.css" )
			.pipe( rename( basename: "maxmertkit" ) )
			.pipe( gulp.dest "#{path.build.css}" )

			.pipe( bytediff.start() )
			.pipe( minifyCSS() )
			.pipe( gzip( append: no ) )
			.pipe( bytediff.stop() )
			.pipe( rename( basename: "maxmertkit.min" ) )
			.pipe( gulp.dest "#{path.build.css}" )

			.pipe( gulpif(argv.rev, rev()) )
			.pipe( gulpif(argv.rev, gulp.dest("#{path.build.css}")) )




		gulp.src( "./package.json" )
			.pipe( jeditor( buildDate: moment().format('MMMM Do YYYY, h:mm:ss a') ) )
			.pipe( gulp.dest "." )
