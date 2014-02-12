
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
        $('.btn-modal-fast').modal();
        return $('.btn-modal123').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          }
        });
      });
    };
  });

  app.directive("popup", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.btn-popup-demo').popup();
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
        $('.btn-modal-fast').modal();
        return $('.btn-modal123').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          }
        });
      });
    };
  });

  app.directive("popup", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.btn-popup-demo').popup();
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
        $('.btn-modal-fast').modal();
        return $('.btn-modal123').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          }
        });
      });
    };
  });

  app.directive("popup", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.btn-popup-demo').popup();
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
        $('.btn-modal-fast').modal();
        return $('.btn-modal123').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          }
        });
      });
    };
  });

  app.directive("popup", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.btn-popup-demo').popup();
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
        $('.btn-modal-fast').modal();
        return $('.btn-modal123').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          }
        });
      });
    };
  });

  app.directive("popup", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.btn-popup-demo').popup();
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
        $('.btn-modal-fast').modal();
        return $('.btn-modal123').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          }
        });
      });
    };
  });

  app.directive("popup", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.btn-popup-demo').popup();
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
        $('.btn-modal-fast').modal();
        return $('.btn-modal123').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          }
        });
      });
    };
  });

  app.directive("popup", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.btn-popup-demo').popup();
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
        $('.btn-modal-fast').modal();
        return $('.btn-modal123').modal({
          beforeopen: function() {
            var d;
            d = $.Deferred();
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          }
        });
      });
    };
  });

  app.directive("popup", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $('.btn-popup-demo').popup();
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