
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

app.directive('partials', [
  '$timeout', function($timeout) {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope) {
        var item, subitem, _i, _j, _len, _len1, _ref, _ref1;
        scope.items = [];
        _ref = window['partials'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          scope.items.push({
            name: item.name,
            path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
          });
          if (item.include != null) {
            _ref1 = item.include;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              });
            }
          }
        }
        return $timeout(function() {
          return $('pre code').each(function(i, e) {
            console.log(e);
            return hljs.highlightBlock(e);
          });
        }, 1000, false);
      }
    };
  }
]);

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

app.directive('partials', [
  '$timeout', function($timeout) {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope) {
        var item, subitem, _i, _j, _len, _len1, _ref, _ref1;
        scope.items = [];
        _ref = window['partials'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          scope.items.push({
            name: item.name,
            path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
          });
          if (item.include != null) {
            _ref1 = item.include;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              });
            }
          }
        }
        return $timeout(function() {
          return $('pre code').each(function(i, e) {
            return hljs.highlightBlock(e);
          });
        }, 1000, false);
      }
    };
  }
]);

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

app.directive('partials', [
  '$timeout', function($timeout) {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope) {
        var item, subitem, _i, _j, _len, _len1, _ref, _ref1;
        scope.items = [];
        _ref = window['partials'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          scope.items.push({
            name: item.name,
            path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
          });
          if (item.include != null) {
            _ref1 = item.include;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              });
            }
          }
        }
        return $timeout(function() {
          return $('pre code').each(function(i, e) {
            return hljs.highlightBlock(e);
          });
        }, 0, false);
      }
    };
  }
]);

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

app.directive('partials', [
  '$timeout', function($timeout) {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope) {
        var item, subitem, _i, _j, _len, _len1, _ref, _ref1;
        scope.items = [];
        _ref = window['partials'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          scope.items.push({
            name: item.name,
            path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
          });
          if (item.include != null) {
            _ref1 = item.include;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              });
            }
          }
        }
        return $timeout(function() {
          return $('pre code').each(function(i, e) {
            return hljs.highlightBlock(e);
          });
        }, 1, false);
      }
    };
  }
]);

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

app.directive('partials', [
  '$timeout', function($timeout) {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope) {
        var item, subitem, _i, _j, _len, _len1, _ref, _ref1;
        scope.items = [];
        _ref = window['partials'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          scope.items.push({
            name: item.name,
            path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
          });
          if (item.include != null) {
            _ref1 = item.include;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              });
            }
          }
        }
        return $timeout(function() {
          return $('pre code').each(function(i, e) {
            return hljs.highlightBlock(e);
          });
        }, 100, false);
      }
    };
  }
]);

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

app.directive('partials', [
  '$timeout', function($timeout) {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope) {
        var item, subitem, _i, _j, _len, _len1, _ref, _ref1;
        scope.items = [];
        _ref = window['partials'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          scope.items.push({
            name: item.name,
            path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
          });
          if (item.include != null) {
            _ref1 = item.include;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              });
            }
          }
        }
        return $timeout(function() {
          return $('pre code').each(function(i, e) {
            return hljs.highlightBlock(e);
          });
        }, 100, false);
      }
    };
  }
]);

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

app.directive('partials', [
  '$timeout', function($timeout) {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope) {
        var item, subitem, _i, _j, _len, _len1, _ref, _ref1;
        scope.items = [];
        _ref = window['partials'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          scope.items.push({
            name: item.name,
            path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
          });
          if (item.include != null) {
            _ref1 = item.include;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              });
            }
          }
        }
        return $timeout(function() {
          return $('pre code').each(function(i, e) {
            return hljs.highlightBlock(e);
          });
        }, 100, false);
      }
    };
  }
]);

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

app.directive('partials', [
  '$timeout', function($timeout) {
    return {
      templateUrl: "" + paths.tmpl + "/common/partials.html",
      scope: {},
      link: function(scope) {
        var item, subitem, _i, _j, _len, _len1, _ref, _ref1;
        scope.items = [];
        _ref = window['partials'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          scope.items.push({
            name: item.name,
            path: "" + paths.tmpl + "/widgets/" + item.path + ".html"
          });
          if (item.include != null) {
            _ref1 = item.include;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              subitem = _ref1[_j];
              scope.items.push({
                name: subitem.name,
                path: "" + paths.tmpl + "/widgets/" + subitem.path + ".html"
              });
            }
          }
        }
        return $timeout(function() {
          return $('pre code').each(function(i, e) {
            return hljs.highlightBlock(e);
          });
        }, 100, false);
      }
    };
  }
]);

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