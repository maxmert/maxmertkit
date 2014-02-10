
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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
    },
    controller: function($scope, $timeout) {
      return $timeout(function() {
        return $('.-btn-modal').modal();
      });
    }
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return alert(1);
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        target: 'notok'
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {}
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {}
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          return console.log('ji');
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          console.log(this);
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          console.log(this.data("kit-modal"));
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          console.log(this);
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          console.log(this.data("kit-modal"));
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          console.log(this.addClass('_active_'));
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          console.log(this.addClass('_active_'));
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          this.addClass('_active_');
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          this.addClass('_active_');
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          this.addClass('_active_');
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          this.addClass('_active_');
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          this.addClass('_active_');
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal;
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal;
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        open: function() {
          return alert(1);
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        open: function() {
          return alert(1);
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeclose: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeclose: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeclose: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        },
        close: function() {
          return alert(1);
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeclose: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        },
        close: function() {
          return alert(1);
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeclose: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        },
        onclose: function() {
          return alert(1);
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        },
        onopen: function() {
          return alert(1);
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        },
        onopen: function() {
          return alert(1);
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal();
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        },
        onopen: function() {
          return alert(1);
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;var app, paths;

app = angular.module('docsApp', ['ngRoute', 'hljs']);

paths = {
  tmpl: '/templates'
};

app.directive('menu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/menu.html",
    link: function(scope) {
      return scope.items = [
        {
          name: 'main',
          link: '/main'
        }, {
          name: 'widgets',
          link: '/widgets'
        }, {
          name: 'components',
          link: '/components'
        }
      ];
    }
  };
});

app.directive('submenu', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/submenu.html",
    link: function(scope, element, attrs) {
      return scope.items = window[attrs.submenu];
    }
  };
});

app.directive('partials', function() {
  return {
    templateUrl: "" + paths.tmpl + "/common/partials.html",
    scope: {},
    link: function(scope, element, attrs) {
      var item, subitem, _i, _len, _ref, _results;
      scope.items = [];
      _ref = window[attrs.partials];
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

app.directive("modal", function() {
  return function(scope, element, attrs) {
    return scope.$watch("partials", function(value) {
      return $('.-btn-modal').modal({
        beforeopen: function() {
          var d;
          d = $.Deferred();
          setTimeout(function() {
            return d.resolve();
          }, 3000);
          return d.promise();
        },
        onopen: function() {
          return alert(1);
        }
      });
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/main', {
    templateUrl: "" + paths.tmpl + "/main.html"
  }).when('/widgets', {
    templateUrl: "" + paths.tmpl + "/widgets.html"
  }).when('/components', {
    templateUrl: "" + paths.tmpl + "/components.html"
  }).otherwise({
    templateUrl: "" + paths.tmpl + "/404.html"
  });
  return $locationProvider.html5Mode(true);
});
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 3000);
            return d.promise();
          },
          onopen: function() {
            return alert(1);
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 3000);
            return d.promise();
          },
          onopen: function() {
            return alert(1);
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal({
          open: function() {
            return $('body').addClass('-blur-- -start--');
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal({
          onopen: function() {
            return $('body').addClass('-blur-- -start--');
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal()({
          onopen: function() {
            return $('body').addClass('-blur-- -start--');
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal({
          onopen: function() {
            return $('body').addClass('-blur-- -start--');
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal()({
          onopen: function() {
            return $('#main-content').addClass('-blur-- -start--');
          },
          onclose: function() {
            return $('#main-content').removeClass('-blur-- -start--');
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal()({
          onopen: function() {
            return $('#main-content').addClass('-blur-- -start--');
          },
          onclose: function() {
            return $('#main-content').removeClass('-blur-- -start--');
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal()({
          onopen: function() {
            return $('#main-content').addClass('-blur-- -start--');
          },
          onclose: function() {
            return $('#main-content').removeClass('-blur-- -start--');
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal({
          onopen: function() {
            return $('#main-content').addClass('-blur-- -start--');
          },
          onclose: function() {
            return $('#main-content').removeClass('-blur-- -start--');
          }
        });
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map
;(function() {
  var app, paths;

  app = angular.module('docsApp', ['ngRoute', 'hljs']);

  paths = {
    tmpl: '/templates'
  };

  app.directive('menu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/menu.html",
      link: function(scope) {
        return scope.items = [
          {
            name: 'main',
            link: '/main'
          }, {
            name: 'widgets',
            link: '/widgets'
          }, {
            name: 'components',
            link: '/components'
          }
        ];
      }
    };
  });

  app.directive('submenu', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/submenu.html",
      link: function(scope, element, attrs) {
        return scope.items = window[attrs.submenu];
      }
    };
  });

  app.directive('partials', function() {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope, element, attrs) {
        var item, subitem, _i, _len, _ref, _results;
        scope.items = [];
        _ref = window[attrs.partials];
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

  app.directive("modal", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.-btn-modal').modal();
      });
    };
  });

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/main', {
      templateUrl: "" + paths.tmpl + "/main.html"
    }).when('/widgets', {
      templateUrl: "" + paths.tmpl + "/widgets.html"
    }).when('/components', {
      templateUrl: "" + paths.tmpl + "/components.html"
    }).otherwise({
      templateUrl: "" + paths.tmpl + "/404.html"
    });
    return $locationProvider.html5Mode(true);
  });

}).call(this);
;
//# sourceMappingURL=app.js.map