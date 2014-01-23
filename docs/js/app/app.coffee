app = angular.module 'docsApp', [
	'ngRoute'
	'hljs'
]

paths =
	tmpl: '/templates'


# Menu creating
app.directive 'menu', ->
	templateUrl: "#{paths.tmpl}/common/menu.html"
	link: ( scope ) ->
		scope.items = window['partials']


app.directive 'partials', ->
	templateUrl: "#{paths.tmpl}/common/partials.html"
	scope: {}
	link: ( scope ) ->
		scope.items = []
		
		for item in window['partials']
			scope.items.push
				name: item.name
				path: "#{paths.tmpl}/widgets/#{item.path}.html"
			if item.include?
				for subitem in item.include
					scope.items.push
						name: subitem.name
						path: "#{paths.tmpl}/widgets/#{subitem.path}.html"


# APP CONFIGURATION
app.config ($routeProvider, $locationProvider) ->

	# Init Route provider
	$routeProvider
		.when '/',
			templateUrl: "#{paths.tmpl}/index.html"

		.otherwise
			templateUrl: "#{paths.tmpl}/404.html"

	$locationProvider.html5Mode yes