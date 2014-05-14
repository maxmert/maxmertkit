(function() {
  "use strict";
  var MaxmertkitEvent, MaxmertkitHelpers, MaxmertkitReactor, _eventCallbacks, _id, _reactor, _reactorEvents;

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
    var _removeEventListener;

    MaxmertkitHelpers.prototype._id = null;

    MaxmertkitHelpers.prototype._instances = new Array();

    MaxmertkitHelpers.prototype.reactor = _reactor;

    function MaxmertkitHelpers(el, options) {
      this.el = el;
      this.options = options;
      this._pushInstance();
    }

    MaxmertkitHelpers.prototype.destroy = function() {
      var _ref;
      this._popInstance();
      if ((_ref = this.el.parentNode) != null) {
        _ref.removeChild(this.el);
      }
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
          _results.push(instance.close());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    MaxmertkitHelpers.prototype._isOnMobile = function() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    };

    _removeEventListener = function(el, eventName, handler) {
      if (el.removeEventListener) {
        el.removeEventListener(eventName, handler);
      } else {
        el.detachEvent("on" + eventName, handler);
      }
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
  var Affix, _id, _instances, _name,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _name = "affix";

  _instances = [];

  _id = 0;

  Affix = (function(_super) {
    __extends(Affix, _super);

    Affix.prototype._name = _name;

    Affix.prototype._instances = _instances;

    function Affix(el, options) {
      this.el = el;
      this.options = options;
      this.el.parent.appendChild(this.el);
    }

    return Affix;

  })(MaxmertkitHelpers);

}).call(this);
