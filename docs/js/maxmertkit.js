(function() {
  "use strict";
  var MaxmertkitEvent, MaxmertkitHelpers, MaxmertkitReactor, _eventCallbacks, _eventHandlers, _id, _reactor, _reactorEvents;

  _eventHandlers = [];

  _eventCallbacks = [];

  _reactorEvents = [];

  _id = 0;

  MaxmertkitEvent = (function() {
    function MaxmertkitEvent(name) {
      this.name = name;
      this.callbacks = new Array();
    }

    MaxmertkitEvent.prototype.registerCallback = function(callback) {
      return this.callbacks.push(callback);
    };

    return MaxmertkitEvent;

  })();

  MaxmertkitReactor = (function() {
    function MaxmertkitReactor() {}

    MaxmertkitReactor.prototype.events = _reactorEvents;

    MaxmertkitReactor.prototype.registerEvent = function(eventName) {
      var event;
      event = new MaxmertkitEvent(eventName);
      if (this.events[eventName] == null) {
        return this.events[eventName] = event;
      }
    };

    MaxmertkitReactor.prototype.dispatchEvent = function(eventName, eventArgs) {
      var callback, _i, _len, _ref, _results;
      _ref = this.events[eventName].callbacks;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        callback = _ref[_i];
        _results.push(callback(eventArgs));
      }
      return _results;
    };

    MaxmertkitReactor.prototype.addEventListener = function(eventName, callback) {
      return this.events[eventName].registerCallback(callback);
    };

    return MaxmertkitReactor;

  })();

  _reactor = new MaxmertkitReactor();

  MaxmertkitHelpers = (function() {
    MaxmertkitHelpers.prototype._id = null;

    MaxmertkitHelpers.prototype._instances = new Array();

    MaxmertkitHelpers.prototype.reactor = _reactor;

    function MaxmertkitHelpers(el, options) {
      this.el = el;
      this.options = options;
      this._pushInstance();
    }

    MaxmertkitHelpers.prototype.destroy = function() {
      this._popInstance();
      this._destroy(this);
      return true;
    };

    MaxmertkitHelpers.prototype._destroy = function(object) {
      var key, value;
      for (key in object) {
        value = object[key];
        delete object[key];
      }
      object = null;
      return true;
    };

    MaxmertkitHelpers.prototype._pushInstance = function() {
      this._id = _id++;
      return this._instances.push(this);
    };

    MaxmertkitHelpers.prototype._popInstance = function() {
      var index, instance, _i, _len, _ref, _results;
      _ref = this._instances;
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        instance = _ref[index];
        if ((instance != null ? instance._id : void 0) === this._id) {
          this._instances.splice(index, 1);
        }
        _results.push(delete this);
      }
      return _results;
    };

    MaxmertkitHelpers.prototype._setOptions = function(options) {
      return console.warning("Maxmertkit Helpers. There is no standart setOptions function.");
    };

    MaxmertkitHelpers.prototype._extend = function(object, properties) {
      var key, val;
      for (key in properties) {
        val = properties[key];
        object[key] = val;
      }
      return object;
    };

    MaxmertkitHelpers.prototype._merge = function(options, overrides) {
      return this._extend(this._extend({}, options), overrides);
    };

    MaxmertkitHelpers.prototype._selfish = function() {
      var index, instance, _i, _len, _ref, _results;
      _ref = this._instances;
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        instance = _ref[index];
        if (this._id !== instance._id) {
          _results.push((typeof instance.close === "function" ? instance.close() : void 0) || (typeof instance.deactivate === "function" ? instance.deactivate() : void 0));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    MaxmertkitHelpers.prototype._isMobile = function() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    };

    MaxmertkitHelpers.prototype._addEventListener = function(el, event, handler, capture) {
      if (capture == null) {
        capture = true;
      }
      if (!(el in _eventHandlers)) {
        _eventHandlers[el] = {};
      }
      if (!(event in _eventHandlers[el])) {
        _eventHandlers[el][event] = [];
      }
      _eventHandlers[el][event].push([handler, capture]);
      if (el.addEventListener) {
        el.addEventListener(event, handler, false);
      } else {
        return el.attachEvent("on" + event, function() {
          handler.call(el);
        });
      }
    };

    MaxmertkitHelpers.prototype._removeEventListener = function(el, event) {
      var eventHandlers, handler, handlers, i;
      if (el in _eventHandlers) {
        handlers = _eventHandlers[el];
        if (event in handlers) {
          eventHandlers = handlers[event];
          i = eventHandlers.length;
          while (i--) {
            handler = eventHandlers[i];
            if (el.removeEventListener) {
              el.removeEventListener(event, handler[0], handler[1]);
            } else {
              el.detachEvent("on" + event, handler[0]);
            }
          }
        }
      }
    };

    MaxmertkitHelpers.prototype._hasClass = function(className, el) {
      el = el || this.el;
      if (el.classList) {
        return el.classList.contains(className);
      } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
      }
    };

    MaxmertkitHelpers.prototype._addClass = function(className, el) {
      el = el || this.el;
      if (el.classList != null) {
        return el.classList.add(className);
      } else {
        return el.className += ' ' + className;
      }
    };

    MaxmertkitHelpers.prototype._removeClass = function(className, el) {
      el = el || this.el;
      if (el.classList) {
        return el.classList.remove(className);
      } else {
        return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    };

    MaxmertkitHelpers.prototype._closest = function(selector, el) {
      var matchesSelector;
      el = el || this.el;
      matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
      while (el) {
        if (matchesSelector.bind(el)(selector)) {
          return el;
        } else {
          el = el.parentElement;
        }
      }
      return false;
    };

    MaxmertkitHelpers.prototype._outerWidth = function(el) {
      var style, width;
      el = el || this.el;
      width = el.offsetWidth;
      style = el.currentStyle || getComputedStyle(el);
      width += parseInt(style.marginLeft) + parseInt(style.marginRight);
      return width;
    };

    MaxmertkitHelpers.prototype._outerHeight = function(el) {
      var height, style;
      el = el || this.el;
      height = el.offsetHeight;
      try {
        style = el.currentStyle || getComputedStyle(el);
      } catch (_error) {}
      if (style != null) {
        if ((style.marginTop != null) && style.marginTop !== '') {
          height += parseInt(style.marginTop);
        }
        if ((style.marginBottom != null) && style.marginBottom !== '') {
          height += parseInt(style.marginBottom);
        }
      }
      return height;
    };

    MaxmertkitHelpers.prototype._getContainer = function(el) {
      var parent, style;
      parent = el || this.el;
      while ((parent != null) && (parent = parent.parentNode)) {
        try {
          style = getComputedStyle(parent);
        } catch (_error) {}
        if (style == null) {
          return parent;
        }
        if (/(relative|fixed)/.test(style['position'])) {
          return parent;
        }
      }
      return document;
    };

    MaxmertkitHelpers.prototype._getScrollContainer = function(el) {
      var parent, style;
      parent = el || this.el;
      while (parent = parent.parentNode) {
        try {
          style = getComputedStyle(parent);
        } catch (_error) {}
        if (style == null) {
          return parent;
        }
        if (/(auto|scroll)/.test(style['overflow'] + style['overflow-y'] + style['overflow-x']) && parent.nodeName !== 'BODY') {
          return parent;
        }
      }
      return document;
    };

    return MaxmertkitHelpers;

  })();


  /*
  Adds support for the special browser events 'scrollstart' and 'scrollstop'.
   */

  window['MaxmertkitHelpers'] = MaxmertkitHelpers;

  window['MaxmertkitReactor'] = MaxmertkitReactor;

  window['MaxmertkitEvent'] = MaxmertkitEvent;

}).call(this);

(function() {
  "use strict";
  var Affix, MaxmertkitHelpers, _activate, _beforeactivate, _beforedeactivate, _deactivate, _id, _instances, _name, _setPosition,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _name = "affix";

  _instances = [];

  _id = 0;

  MaxmertkitHelpers = window['MaxmertkitHelpers'];

  Affix = (function(_super) {
    __extends(Affix, _super);

    Affix.prototype._name = _name;

    Affix.prototype._instances = _instances;

    Affix.prototype.started = false;

    function Affix(el, options) {
      var _options;
      this.el = el;
      this.options = options;
      _options = {
        spy: this.el.getAttribute('data-spy') || _name,
        offset: this.el.getAttribute('data-offset') || -25,
        beforeactive: function() {},
        onactive: function() {},
        failactive: function() {},
        beforedeactive: function() {},
        ondeactive: function() {},
        faildeactive: function() {}
      };
      this.options = this._merge(_options, this.options);
      this._setOptions(this.options);
      Affix.__super__.constructor.call(this, this.el, this.options);
      this.scroller = this._getScrollContainer();
      this.container = this._getContainer();
      this.reactor.registerEvent("initialize." + _name);
      this.reactor.registerEvent("start." + _name);
      this.reactor.registerEvent("stop." + _name);
      this.reactor.dispatchEvent("initialize." + _name);
      this.start();
    }

    Affix.prototype.destroy = function() {
      _deactivate.call(this);
      this.el.dataset["kitAffix"] = null;
      return Affix.__super__.destroy.apply(this, arguments);
    };

    Affix.prototype.start = function() {
      if (!this.started) {
        return _beforeactivate.call(this);
      }
    };

    Affix.prototype.stop = function() {
      if (this.started) {
        return _beforedeactivate.call(this);
      }
    };

    Affix.prototype._setOptions = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (this.options[key] == null) {
          return console.error("Maxmertkit Affix. You're trying to set unpropriate option – " + key);
        }
        this.options[key] = value;
        if (typeof value === 'function') {
          this[key] = value;
        }
      }
    };

    return Affix;

  })(MaxmertkitHelpers);

  _beforeactivate = function() {
    var deferred;
    if (this.beforeactive != null) {
      try {
        deferred = this.beforeactive.call(this.el);
        return deferred.done((function(_this) {
          return function() {
            return _activate.call(_this);
          };
        })(this)).fail((function(_this) {
          return function() {
            var _ref;
            return (_ref = _this.failactive) != null ? _ref.call(_this.el) : void 0;
          };
        })(this));
      } catch (_error) {
        return _activate.call(this);
      }
    } else {
      return _activate.call(this);
    }
  };

  _activate = function() {
    var _ref;
    this._addEventListener(this.scroller, 'scroll', _setPosition.bind(this));
    this._addClass('_active_');
    if ((_ref = this.onactive) != null) {
      _ref.call(this.el);
    }
    this.reactor.dispatchEvent("start." + _name);
    return this.started = true;
  };

  _beforedeactivate = function() {
    var deferred;
    if (this.beforedeactive != null) {
      try {
        deferred = this.beforedeactive.call(this.el);
        return deferred.done((function(_this) {
          return function() {
            return _deactivate.call(_this);
          };
        })(this)).fail((function(_this) {
          return function() {
            var _ref;
            return (_ref = _this.faildeactive) != null ? _ref.call(_this.el) : void 0;
          };
        })(this));
      } catch (_error) {
        return _deactivate.call(this);
      }
    } else {
      return _deactivate.call(this);
    }
  };

  _deactivate = function() {
    var _ref;
    this._removeEventListener(this.scroller, 'scroll', _setPosition.bind(this));
    this._removeClass('_active_');
    this.reactor.dispatchEvent("stop." + _name);
    if ((_ref = this.ondeactive) != null) {
      _ref.call(this.el);
    }
    return this.started = false;
  };

  _setPosition = function() {
    var containerTop, style, top;
    containerTop = this.container.offsetTop;
    if (containerTop - this.options.offset <= document.body.scrollTop) {
      if (containerTop + this._outerHeight(this.container) - this.options.offset - this._outerHeight() >= document.body.scrollTop) {
        this.el.style.width = this.el.offsetWidth;
        this.el.style.position = 'fixed';
        top = this.options.offset;
        try {
          style = this.el.currentStyle || getComputedStyle(this.el);
        } catch (_error) {}
        if (style != null) {
          if ((style.marginTop != null) && style.marginTop !== '') {
            top += parseInt(style.marginTop);
          }
        }
        this.el.style.top = "" + this.options.offset + "px";
        return this.el.style.bottom = 'auto';
      } else {
        this.el.style.position = 'absolute';
        this.el.style.top = 'auto';
        this.el.style.bottom = "-" + this.options.offset + "px";
        return this.el.style.width = this.el.offsetWidth;
      }
    } else {
      this.el.style.position = 'relative';
      return this.el.style.top = 'inherit';
    }
  };

  window['Affix'] = Affix;

  window['mkitAffix'] = function(options) {
    var result;
    result = null;
    if (this.dataset == null) {
      this.dataset = {};
    }
    if (!this.dataset['kitAffix']) {
      result = new Affix(this, options);
      this.dataset['kitAffix'] = result;
    } else {
      if (typeof options === 'object') {
        this.dataset['kitAffix']._setOptions(options);
      } else {
        if (typeof options === "string" && options.charAt(0) !== "_") {
          this.dataset['kitAffix'][options];
        }
      }
      result = this.dataset['kitAffix'];
    }
    return result;
  };

}).call(this);

(function() {
  "use strict";
  var MaxmertkitHelpers, Scrollspy, _activate, _activateItem, _beforeactivate, _beforedeactivate, _deactivate, _deactivateItem, _id, _instances, _name, _spy,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _name = "scrollspy";

  _instances = [];

  _id = 0;

  MaxmertkitHelpers = window['MaxmertkitHelpers'];

  Scrollspy = (function(_super) {
    __extends(Scrollspy, _super);

    Scrollspy.prototype._name = _name;

    Scrollspy.prototype._instances = _instances;

    Scrollspy.prototype.started = false;

    Scrollspy.prototype.active = -1;

    function Scrollspy(el, options) {
      var _options;
      this.el = el;
      this.options = options;
      _options = {
        spy: this.el.getAttribute('data-spy') || _name,
        target: this.el.getAttribute('data-target') || 'body',
        offset: this.el.getAttribute('data-offset') || 5,
        elements: this.el.getAttribute('data-elements') || 'li a',
        elementsAttr: this.el.getAttribute('data-elements-attr') || 'href',
        onMobile: this.el.getAttribute('data-on-mobile') || false,
        beforeactive: function() {},
        onactive: function() {},
        failactive: function() {},
        beforedeactive: function() {},
        ondeactive: function() {},
        faildeactive: function() {}
      };
      this.options = this._merge(_options, this.options);
      this.target = document.querySelector(this.options.target);
      this.scroller = this._getScrollContainer(this.target);
      this.spy = _spy.bind(this);
      this._setOptions(this.options);
      Scrollspy.__super__.constructor.call(this, this.el, this.options);
      this.reactor.registerEvent("initialize." + _name);
      this.reactor.registerEvent("start." + _name);
      this.reactor.registerEvent("stop." + _name);
      this.reactor.dispatchEvent("initialize." + _name);
      this.start();
    }

    Scrollspy.prototype.destroy = function() {
      _deactivate.call(this);
      this.el.dataset["data-kit-" + this._name] = null;
      return Scrollspy.__super__.destroy.apply(this, arguments);
    };

    Scrollspy.prototype._setOptions = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (this.options[key] == null) {
          return console.error("Maxmertkit Scrollspy. You're trying to set unpropriate option – " + key);
        }
        switch (key) {
          case 'target':
            this._removeEventListener(this.scroller, 'scroll', this.spy);
            this.target = document.querySelector(value);
            this.scroller = this._getScrollContainer(this.target);
            this._addEventListener(this.scroller, 'scroll', this.spy);
            break;
          case 'elements':
            this.refresh();
        }
        this.options[key] = value;
        if (typeof value === 'function') {
          this[key] = value;
        }
      }
    };

    Scrollspy.prototype.start = function() {
      if (!this.started) {
        return _beforeactivate.call(this);
      }
    };

    Scrollspy.prototype.stop = function() {
      if (this.started) {
        return _beforedeactivate.call(this);
      }
    };

    Scrollspy.prototype.refresh = function() {
      var el, elements, targetEl, _i, _len, _results;
      elements = this.el.querySelectorAll(this.options.elements);
      this.elements = [];
      _results = [];
      for (_i = 0, _len = elements.length; _i < _len; _i++) {
        el = elements[_i];
        targetEl = this.target.querySelector(el.getAttribute(this.options.elementsAttr));
        _results.push(this.elements.push({
          element: el,
          target: targetEl,
          height: targetEl.offsetHeight,
          top: targetEl.offsetTop
        }));
      }
      return _results;
    };

    return Scrollspy;

  })(MaxmertkitHelpers);

  _activateItem = function(itemNumber) {
    var el, _i, _len, _ref;
    _ref = this.elements;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      el = _ref[_i];
      this._removeClass('_active_', el.element);
      this._removeClass('_active_', el.element.parent);
    }
    this._addClass('_active_', this.elements[itemNumber].element);
    return this._addClass('_active_', this.elements[itemNumber].element.parent);
  };

  _deactivateItem = function(itemNumber) {
    this._removeClass('_active_', this.elements[itemNumber].element);
    return this._removeClass('_active_', this.elements[itemNumber].element.parent);
  };

  _spy = function(event) {
    var i, _ref, _results;
    i = 0;
    _results = [];
    while (i < this.elements.length) {
      if ((this.elements[i].top <= (_ref = (event.currentTarget.scrollTop || event.currentTarget.scrollY) + this.options.offset) && _ref <= this.elements[i].top + this.elements[i].height)) {
        if (!this._hasClass('_active_', this.elements[i].element)) {
          _activateItem.call(this, i);
        }
      } else {
        if (this._hasClass('_active_', this.elements[i].element) && (event.currentTarget.scrollTop || event.currentTarget.scrollY) + this.options.offset < this.elements[i].top + this.elements[i].height) {
          _deactivateItem.call(this, i);
        }
      }
      _results.push(i++);
    }
    return _results;
  };

  _beforeactivate = function() {
    var deferred;
    if (this.beforeactive != null) {
      try {
        deferred = this.beforeactive.call(this.el);
        return deferred.done((function(_this) {
          return function() {
            return _activate.call(_this);
          };
        })(this)).fail((function(_this) {
          return function() {
            var _ref;
            return (_ref = _this.failactive) != null ? _ref.call(_this.el) : void 0;
          };
        })(this));
      } catch (_error) {
        return _activate.call(this);
      }
    } else {
      return _activate.call(this);
    }
  };

  _activate = function() {
    var _ref;
    this._addEventListener(this.scroller, 'scroll', this.spy);
    if ((_ref = this.onactive) != null) {
      _ref.call(this.el);
    }
    this.reactor.dispatchEvent("start." + _name);
    return this.started = true;
  };

  _beforedeactivate = function() {
    var deferred;
    if (this.beforedeactive != null) {
      try {
        deferred = this.beforedeactive.call(this.el);
        return deferred.done((function(_this) {
          return function() {
            return _deactivate.call(_this);
          };
        })(this)).fail((function(_this) {
          return function() {
            var _ref;
            return (_ref = _this.faildeactive) != null ? _ref.call(_this.el) : void 0;
          };
        })(this));
      } catch (_error) {
        return _deactivate.call(this);
      }
    } else {
      return _deactivate.call(this);
    }
  };

  _deactivate = function() {
    var _ref;
    this._removeEventListener(this.scroller, 'scroll', this.spy);
    this.reactor.dispatchEvent("stop." + _name);
    if ((_ref = this.ondeactive) != null) {
      _ref.call(this.el);
    }
    return this.started = false;
  };

  window['Scrollspy'] = Scrollspy;

  window['mkitScrollspy'] = function(options) {
    var result;
    result = null;
    if (this.dataset == null) {
      this.dataset = {};
    }
    if (!this.dataset['kitScrollspy']) {
      result = new Scrollspy(this, options);
      this.dataset['kitScrollspy'] = result;
    } else {
      if (typeof options === 'object') {
        this.dataset['kitScrollspy']._setOptions(options);
      } else {
        if (typeof options === "string" && options.charAt(0) !== "_") {
          this.dataset['kitScrollspy'][options];
        }
      }
      result = this.dataset['kitScrollspy'];
    }
    return result;
  };

}).call(this);
