
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
        return $('.btn-popup-demo').popup({
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('-content');
            return content.html("Popup " + popup._id + " with random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('-content');
            return content.html("Popup " + popup._id + " with random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            alert(1);
            popup = this.data('kit-popup');
            content = popup.$el.find('-content');
            return content.html("Popup " + popup._id + " with random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('-content');
            return content.html("Popup " + popup._id + " with random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            console.log(popup);
            content = popup.$el.find('-content');
            return content.html("Popup " + popup._id + " with random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            console.log(popup);
            content = popup.$el.find('-content');
            return content.html("Popup " + popup._id + " with random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('-content');
            console.log(content);
            return content.html("Popup " + popup._id + " with random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        return $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return alert(1);
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return console.log($('[submenu="widgets"]'));
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return alert(1);
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $(document).find("[data-toggle]='button'").button();
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $(document).find("[data-toggle='button']").button();
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $(document).find("[data-toggle='button']").button();
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            return console.log(this);
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            return console.log(this);
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            return this.addClass('_disabled_');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            return this.addClass('_disabled_');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            return this.toggleClass('_disabled_');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            return this.addClass('_loading_');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            return this.addClass('_loading_');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            return this.html('Loading...');
          },
          onactive: function() {
            return this.html('Checked');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            return this.html('Checked');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            return this.html('Checked');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        return $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
        return $('.radio-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
        return $('.radio-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
        return $('.radio-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          beforeunactive: function() {
            var d;
            d = $.Deferred();
            this.html('Unchecking...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 3000);
            return d.promise();
          },
          onunactive: function() {
            return this.html('Radio');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
        return $('.radio-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          beforeunactive: function() {
            var d;
            d = $.Deferred();
            this.html('Unchecking...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 3000);
            return d.promise();
          },
          onunactive: function() {
            this.removeClass('_disabled_');
            return this.html('Radio');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
        return $('.radio-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          beforeunactive: function() {
            var d;
            d = $.Deferred();
            this.html('Unchecking...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 3000);
            return d.promise();
          },
          onunactive: function() {
            this.removeClass('_disabled_');
            return this.html('Radio');
          }
        });
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
        return $('.radio-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          beforeunactive: function() {
            var d;
            d = $.Deferred();
            this.html('Unchecking...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 3000);
            return d.promise();
          },
          onunactive: function() {
            this.removeClass('_disabled_');
            return this.html('Radio');
          }
        });
      });
    };
  });

  app.directive("tabs", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $(document).find("[data-toggle='tabs']").tabs();
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
        return $('.radio-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          beforeunactive: function() {
            var d;
            d = $.Deferred();
            this.html('Unchecking...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 3000);
            return d.promise();
          },
          onunactive: function() {
            this.removeClass('_disabled_');
            return this.html('Radio');
          }
        });
      });
    };
  });

  app.directive("tabs", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $(document).find("[data-toggle='tabs']").tabs();
      });
    };
  });

  app.directive("scrollspy", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $(document).find("[data-spy='scroll']").scrollspy();
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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
        scope.items = window[attrs.submenu];
        return scope.$watch("partials", function(value) {
          return $('[submenu="widgets"]').affix();
        });
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

  app.directive("button", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        $(document).find("[data-toggle='button']").button();
        $('.btn-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          onunactive: function() {
            return this.html('Checkbox');
          }
        });
        return $('.radio-with-before').button({
          beforeactive: function() {
            var d;
            d = $.Deferred();
            this.html('Loading...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 2000);
            return d.promise();
          },
          onactive: function() {
            this.removeClass('_disabled_');
            return this.html('Checked');
          },
          beforeunactive: function() {
            var d;
            d = $.Deferred();
            this.html('Unchecking...');
            this.addClass('_disabled_');
            setTimeout(function() {
              return d.resolve();
            }, 3000);
            return d.promise();
          },
          onunactive: function() {
            this.removeClass('_disabled_');
            return this.html('Radio');
          }
        });
      });
    };
  });

  app.directive("tabs", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $(document).find("[data-toggle='tabs']").tabs();
      });
    };
  });

  app.directive("scrollspy", function() {
    return function(scope, element, attrs) {
      return scope.$watch("partials", function(value) {
        return $(document).find("[data-spy='scroll']").scrollspy();
      });
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
        $('.btn-popup-demo').popup({
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom').popup({
          positionVertical: 'bottom',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-left').popup({
          positionVertical: 'middle',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-right').popup({
          positionVertical: 'middle',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        $('.btn-popup-demo-bottom-right').popup({
          positionVertical: 'bottom',
          positionHorizontal: 'right',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
          }
        });
        return $('.btn-popup-demo-top-left').popup({
          positionVertical: 'top',
          positionHorizontal: 'left',
          beforeopen: function() {
            var content, popup;
            popup = this.data('kit-popup');
            content = popup.$el.find('.-content');
            return content.html("Popup " + popup._id + " with dynamic content<br>Random number " + (Math.random()));
          },
          onopen: function() {
            return this.addClass('_active_');
          },
          onclose: function() {
            return this.removeClass('_active_');
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