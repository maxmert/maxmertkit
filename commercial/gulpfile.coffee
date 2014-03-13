gulp = require 'gulp'
gutil = require 'gulp-util'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
coffeelint = require 'gulp-coffeelint'
uglify = require 'gulp-uglify'
watch = require 'gulp-watch'
nodemon = require 'gulp-nodemon'
sass = require 'gulp-ruby-sass'
livereload = require 'gulp-livereload'



path =
	vendor: [
		'../docs/js/bower/angular/**/*.min.js'
		'../docs/js/bower/angular-route/angular-route.js'
		'!../docs/js/bower/angular-route/angular-route.min.js'
		'../docs/js/bower/**/*.min.js'
		'../docs/js/bower/**/*.pack.js'
		'../docs/js/libs/**/*.js'
	]

	coffee: [
		'../coffee/maxmertkit.coffee'
		'../coffee/**/*.coffee'
		'coffee/**/*.coffee'
	]
	sass: ['sass/commercial.sass', 'sass/developer.sass']
	server: 'server/app.coffee'

	dest:
		vendor: 'js'
		js: 'js'
		css: 'css'
	# coffee: 'coffee/**/*.coffee'
	# js: 'js'
	# css: 'css'
	# server: 'server/app.coffee'

	# bower: "js/bower"
	# vendor: [
	# 	"js/bower/angular/**/*.min.js"
	# 	"js/bower/angular-route/angular-route.js"
	# 	"!js/bower/angular-route/angular-route.min.js"
	# 	"js/bower/**/*.min.js"
	# 	"js/bower/**/*.pack.js"
	# 	"js/libs/**/*.js"
	# ]

	# maxmertkitCoffee: [
	# 	'coffee/maxmertkit.coffee'
	# 	'coffee/*.coffee'
	# ]
	# maxmertkitCss: 'sass/**/main.sass'





gulp.task 'vendor', ->
	gulp.src( path.vendor )
		.pipe( concat 'vendor.js'  )
		.pipe( uglify() )
		.pipe( gulp.dest path.dest.vendor )

gulp.task 'js', ->
	gulp.src( path.coffee )
		.pipe( coffeelint() )
		.pipe( coffee( map: yes ).on( 'error', gutil.log ) )
		.pipe( concat "maxmertkitCommertial.js" )
		.pipe( uglify() )
		.pipe( gulp.dest path.dest.js )
		# .pipe(livereload())

gulp.task  'css', ->
	gulp.src path.sass
		.pipe sass( sourcemap: yes, quiet: yes )
		.pipe( gulp.dest path.dest.css )

gulp.task 'nodemon', ->
	nodemon( script: path.server )
		# .on('restart', 'default')

# gulp.task 'app', ->
# 	gulp.src( path.coffee )
# 		.pipe( coffeelint() )
# 		.pipe( coffee( map: yes ).on( 'error', gutil.log ) )
# 		.pipe( concat "app.js" )
# 		# .pipe( uglify() )
# 		.pipe( gulp.dest path.js )

# gulp.task 'maxmertkitJs', ->
# 	gulp.src( path.maxmertkitCoffee )
# 		.pipe( coffeelint() )
# 		.pipe( coffee( map: yes ).on( 'error', gutil.log ) )
# 		.pipe( concat "maxmertkit.js" )
# 		# .pipe( uglify() )
# 		.pipe( gulp.dest path.js )
# 		.pipe( gulp.dest 'js' )

# gulp.task  'maxmertkitCss', ->
# 	gulp.src path.maxmertkitCss
# 		.pipe sass( sourcemap: yes, quiet: yes )
# 		.pipe( gulp.dest path.css )
# 		.pipe( gulp.dest '.' )


# gulp.task 'nodemon', ->
# 	nodemon( script: path.server )
# 		# .on('restart', 'default')



gulp.task 'watch', ->
	gulp.watch path.vendor, ['vendor']
	gulp.watch path.coffee, ['js']
	gulp.watch 'sass/**/*.sass', ['css']
# 	gulp.watch path.coffee, ['app']
# 	gulp.watch path.maxmertkitCoffee, ['maxmertkitJs']


gulp.task('default', ['vendor', 'js', 'css', 'watch', 'nodemon'])