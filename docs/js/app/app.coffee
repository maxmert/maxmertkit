app = angular.module 'docsApp', [
	'ngRoute'
	'hljs'
]

paths =
	tmpl: '/templates'


# SubMenu creating
app.directive 'menu', ->
	templateUrl: "#{paths.tmpl}/common/menu.html"
	link: ( scope ) ->
		scope.items = [
			{
				name: 'main',
				link: '/main'
			},
			{
				name: 'widgets',
				link: '/widgets'
			}
		]


# SubMenu MAIN creating
app.directive 'submenu', ->
	templateUrl: "#{paths.tmpl}/common/submenu.html"
	link: ( scope, element, attrs ) ->
		scope.items = window[attrs.submenu]


app.directive 'partials', ->
	templateUrl: "#{paths.tmpl}/common/partials.html"
	scope: {}
	link: ( scope, element, attrs ) ->
		scope.items = []
		
		for item in window[attrs.partials]
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
		.when '/main',
			templateUrl: "#{paths.tmpl}/main.html"

		.when '/widgets',
			templateUrl: "#{paths.tmpl}/widgets.html"

		.otherwise
			templateUrl: "#{paths.tmpl}/404.html"

	$locationProvider.html5Mode yes