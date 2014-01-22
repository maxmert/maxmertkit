
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope, element, attrs) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html"
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope, element, attrs) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html"
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.items.push("" + paths.tmpl + "/widgets/" + item + ".html"));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.items.push("" + paths.tmpl + "/widgets/" + item + ".html"));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.partials = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.partials.push("" + paths.tmpl + "/widgets/" + item + ".html"));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.partials = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.partials.push("" + paths.tmpl + "/widgets/" + item + ".html"));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref;
      scope.partials = [];
      _ref = window['partials'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.partials.push("" + paths.tmpl + "/widgets/" + item + ".html");
      }
      return scope.partials;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, _i, _len, _ref;
      scope.partials = [];
      _ref = window['partials'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.partials.push("" + paths.tmpl + "/widgets/" + item + ".html");
      }
      return scope.partials;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref;
      scope.partials = [];
      _ref = window['partials'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.partials.push("" + paths.tmpl + "/widgets/" + item + ".html");
      }
      return scope.partials;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref;
      scope.partials = [];
      _ref = window['partials'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.partials.push("" + paths.tmpl + "/widgets/" + item + ".html");
      }
      return scope.partials;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.partials = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.partials.push("" + paths.tmpl + "/widgets/" + item + ".html"));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partial', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.partials = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.partials.push("" + paths.tmpl + "/widgets/" + item + ".html"));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    restrict: 'E',
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.items.push("" + paths.tmpl + "/widgets/" + item + ".html"));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.items.push("" + paths.tmpl + "/widgets/" + item + ".html"));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    scope: {},
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.items.push("" + paths.tmpl + "/widgets/" + item + ".html"));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    scope: {},
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.items.push({
          name: item,
          path: "" + paths.tmpl + "/widgets/" + item + ".html"
        }));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    scope: {},
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.items.push({
          name: item,
          path: "" + paths.tmpl + "/widgets/" + item + ".html"
        }));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    scope: {},
    link: function(scope) {
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    scope: {},
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(scope.items.push({
          name: item,
          path: "" + paths.tmpl + "/widgets/" + item + ".html"
        }));
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = window['partials'];
      _ref = scope.items;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push({
          path: "" + paths.tmpl + "/widgets/" + item + ".html"
        });
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = window['partials'];
      _ref = scope.items;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(item.path = "" + paths.tmpl + "/widgets/" + item.path + ".html");
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, _i, _len, _ref, _results;
      scope.items = window['partials'];
      _ref = scope.items;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(item.path = "" + paths.tmpl + "/widgets/" + item.path + ".html");
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = window['partials'];
      _ref = scope.items;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        item.path = "" + paths.tmpl + "/widgets/" + item.path + ".html";
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(subitem.path = "" + paths.tmpl + "/widgets/" + subitem.path + ".html");
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = window['partials'];
      _ref = scope.items;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        item.path = "" + paths.tmpl + "/widgets/" + item.path + ".html";
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(subitem.path = "" + paths.tmpl + "/widgets/" + subitem.path + ".html");
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = window['partials'];
      _ref = scope.items;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        item.path = "" + paths.tmpl + "/widgets/" + item.path + ".html";
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(subitem.path = "" + paths.tmpl + "/widgets/" + subitem.path + ".html");
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = window['partials'];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window['partials'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        scope.items.push({
          name: item.name,
          path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
        });
        if (item.include != null) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = item.include;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              _results1.push(scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              }));
            }
            return _results1;
          })());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
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