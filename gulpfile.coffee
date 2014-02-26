gulp = require 'gulp'
gutil = require 'gulp-util'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
coffeelint = require 'gulp-coffeelint'
uglify = require 'gulp-uglify'
watch = require 'gulp-watch'
nodemon = require 'gulp-nodemon'
sass = require 'gulp-ruby-sass'



path =
	docsCoffee: 'docs/js/app/**/*.coffee'
	docsJs: 'docs/js'
	docsCss: 'docs/css'
	server: 'docs/server/app.coffee'

	bower: "docs/js/bower"
	vendor: [
		"docs/js/bower/angular/**/*.min.js"
		"docs/js/bower/angular-route/angular-route.js"
		"!docs/js/bower/angular-route/angular-route.min.js"
		"docs/js/bower/**/*.min.js"
		"docs/js/bower/**/*.pack.js"
		"docs/js/libs/**/*.js"
	]

	maxmertkitCoffee: [
		'coffee/maxmertkit.coffee'
		'coffee/*.coffee'
	]
	maxmertkitCss: 'sass/**/main.sass'





gulp.task 'vendor', ->
	gulp.src( path.vendor )
		.pipe( concat 'vendor.js'  )
		# .pipe( uglify() )
		.pipe( gulp.dest path.docsJs )

gulp.task 'app', ->
	gulp.src( path.docsCoffee )
		.pipe( coffeelint() )
		.pipe( coffee( map: yes ).on( 'error', gutil.log ) )
		.pipe( concat "app.js" )
		# .pipe( uglify() )
		.pipe( gulp.dest path.docsJs )

gulp.task 'maxmertkitJs', ->
	gulp.src( path.maxmertkitCoffee )
		.pipe( coffeelint() )
		.pipe( coffee( map: yes ).on( 'error', gutil.log ) )
		.pipe( concat "maxmertkit.js" )
		# .pipe( uglify() )
		.pipe( gulp.dest path.docsJs )
		.pipe( gulp.dest 'js' )

gulp.task  'maxmertkitCss', ->
	gulp.src path.maxmertkitCss
		.pipe sass( sourcemap: yes, quiet: yes )
		.pipe( gulp.dest path.docsCss )
		.pipe( gulp.dest '.' )


gulp.task 'nodemon', ->
	nodemon( script: path.server )
		# .on('restart', 'default')



gulp.task 'watch', ->
	gulp.watch path.vendor, ['vendor']
	gulp.watch path.docsCoffee, ['app']
	gulp.watch path.maxmertkitCoffee, ['maxmertkitJs']
	gulp.watch path.maxmertkitCss, ['maxmertkitCss']


gulp.task('default', ['vendor', 'app', 'maxmertkitJs', 'maxmertkitCss', 'watch', 'nodemon'])