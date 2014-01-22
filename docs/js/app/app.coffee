app = angular.module 'docsApp', [
	'ngRoute'
]

paths =
	tmpl: '/templates'



app.controller 'PartialsMenu', ($scope) ->
	

app.directive 'menu', ->
	restrict: 'E'
	templateUrl: "#{paths.tmpl}/common/menu.html"
	link: ( scope, element, attrs ) ->
		scope.items = window['partials']


app.config ($routeProvider, $locationProvider) ->

	$routeProvider
		
		.when '/',
			templateUrl: "#{paths.tmpl}/index.html"

		.otherwise
			templateUrl: "#{paths.tmpl}/404.html"

	$locationProvider.html5Mode yes