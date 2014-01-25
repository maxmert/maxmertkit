
;var app, paths;

app = angular.module('docsApp', ['ngRoute']);

paths = {
  tmpl: '/templates'
};

app.controller('PartialsMenu', function($scope) {});

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope, element, attrs) {
      return scope.items = window['partials'];
    }
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: "" + paths.tmpl + "/index.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute']);

paths = {
  tmpl: '/templates'
};

app.controller('PartialsMenu', function($scope) {});

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope, element, attrs) {
      return scope.items = window['partials'];
    }
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: "" + paths.tmpl + "/index.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute']);

paths = {
  tmpl: '/templates'
};

app.controller('PartialsMenu', function($scope) {});

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope, element, attrs) {
      return scope.items = window['partials'];
    }
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: "" + paths.tmpl + "/index.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute']);

paths = {
  tmpl: '/templates'
};

app.controller('PartialsMenu', function($scope) {});

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope, element, attrs) {
      return scope.items = window['partials'];
    }
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: "" + paths.tmpl + "/index.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute']);

paths = {
  tmpl: '/templates'
};

app.controller('PartialsMenu', function($scope) {});

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope, element, attrs) {
      return scope.items = window['partials'];
    }
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: "" + paths.tmpl + "/index.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute']);

paths = {
  tmpl: '/templates'
};

app.controller('PartialsMenu', function($scope) {});

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope, element, attrs) {
      return scope.items = window['partials'];
    }
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: "" + paths.tmpl + "/index.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map