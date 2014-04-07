(function() {
  var MaxmertkitHelpers, _globalRotation;

  _globalRotation = {
    x: 0,
    y: 0,
    z: 0
  };

  MaxmertkitHelpers = (function() {
    MaxmertkitHelpers.prototype._id = 0;

    MaxmertkitHelpers.prototype._instances = new Array();

    function MaxmertkitHelpers($btn, options) {
      this.$btn = $btn;
      this.options = options;
      this._pushInstance();
      if (this._afterConstruct != null) {
        this._afterConstruct();
      }
    }

    MaxmertkitHelpers.prototype.destroy = function() {
      this.$el.off("." + this._name);
      return this._popInstance();
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

    MaxmertkitHelpers.prototype._setOptions = function(options) {
      return console.warning("Maxmertkit Helpers. There is no standart setOptions function.");
    };

    MaxmertkitHelpers.prototype._pushInstance = function() {
      this._id++;
      return this._instances.push(this);
    };

    MaxmertkitHelpers.prototype._popInstance = function() {
      var index, instance, _i, _len, _ref, _results;
      _ref = this._instances;
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        instance = _ref[index];
        if (instance._id === this._id) {
          this._instances.splice(index, 1);
        }
        _results.push(delete this);
      }
      return _results;
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

    MaxmertkitHelpers.prototype._setTransform = function(style, transform) {
      style.webkitTransform = transform;
      style.MozTransform = transform;
      return style.transform = transform;
    };

    MaxmertkitHelpers.prototype._equalNodes = function(node1, node2) {
      return node1.get(0) === node2.get(0);
    };

    MaxmertkitHelpers.prototype._deviceMobile = function() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    MaxmertkitHelpers.prototype._refreshSizes = function() {
      this._windowHeight = $(window).height();
      this._windowWidth = $(window).width();
      this._height = this.$el.height();
      this._width = this.$el.width();
      if (this.scroll != null) {
        if (this.scroll[0].nodeName === 'BODY') {
          return this._offset = this.$el.offset();
        } else {
          return this._offset = this.$el.offset();
        }
      } else {
        return this._offset = this.$el.offset();
      }
    };

    MaxmertkitHelpers.prototype._getContainer = function(el) {
      var parent, style;
      parent = el[0] || el;
      while (parent = parent.parentNode) {
        try {
          style = getComputedStyle(parent);
        } catch (_error) {}
        if (style == null) {
          return $(parent);
        }
        if (/(relative)/.test(style['position'])) {
          return parent;
        }
      }
      return document.body;
    };

    MaxmertkitHelpers.prototype._getScrollParent = function(el) {
      var parent, style;
      parent = el[0] || el;
      while (parent = parent.parentNode) {
        try {
          style = getComputedStyle(parent);
        } catch (_error) {}
        if (style == null) {
          return $(parent);
        }
        if (/(auto|scroll)/.test(style['overflow'] + style['overflow-y'] + style['overflow-x']) && $(parent)[0].nodeName !== 'BODY') {
          return $(parent);
        }
      }
      return $(document);
    };

    MaxmertkitHelpers.prototype._isVisible = function() {
      return this._offset.top - this._windowHeight <= this.scroll.scrollTop() && this.scroll.scrollTop() <= this._offset.top + this._height;
    };

    MaxmertkitHelpers.prototype._getVisiblePercent = function() {
      var current, max, min;
      min = this._offset.top;
      current = this.scroll.scrollTop();
      max = this._offset.top + this._height;
      return (current - min) / (max - min);
    };

    MaxmertkitHelpers.prototype._scrollVisible = function() {
      var current, max, min, percent;
      if (this.scroll != null) {
        min = this._offset.top - this._windowHeight;
        max = this._offset.top + this._height + this._windowHeight;
        current = this.scroll.scrollTop() + this._windowHeight;
        percent = 1 - current / max;
        return (1 > percent && percent > 0);
      } else {
        return true;
      }
    };

    MaxmertkitHelpers.prototype._setGlobalRotation = function(x, y, z) {
      return _globalRotation = {
        x: x,
        y: y,
        z: z
      };
    };

    MaxmertkitHelpers.prototype._getGlobalRotation = function() {
      return _globalRotation;
    };

    return MaxmertkitHelpers;

  })();


  /*
  Adds support for the special browser events 'scrollstart' and 'scrollstop'.
   */

  (function() {
    var special, uid1, uid2;
    special = jQuery.event.special;
    uid1 = "D" + (+new Date());
    uid2 = "D" + (+new Date() + 1);
    special.scrollstart = {
      setup: function() {
        var handler, timer;
        timer = void 0;
        handler = function(evt) {
          var _args;
          _args = arguments;
          if (timer) {
            clearTimeout(timer);
          } else {
            evt.type = "scrollstart";
            jQuery.event.trigger.apply(this, _args);
          }
          timer = setTimeout(function() {
            timer = null;
          }, special.scrollstop.latency);
        };
        jQuery(this).bind("scroll", handler).data(uid1, handler);
      },
      teardown: function() {
        jQuery(this).unbind("scroll", jQuery(this).data(uid1));
      }
    };
    special.scrollstop = {
      latency: 300,
      setup: function() {
        var handler, timer;
        timer = void 0;
        handler = function(evt) {
          var _args;
          _args = arguments;
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(function() {
            timer = null;
            evt.type = "scrollstop";
            jQuery.event.trigger.apply(this, _args);
          }, special.scrollstop.latency);
        };
        jQuery(this).bind("scroll", handler).data(uid2, handler);
      },
      teardown: function() {
        jQuery(this).unbind("scroll", jQuery(this).data(uid2));
      }
    };
  })();

  $(window).on("scrollstart.kit", function(event) {
    return $('body').addClass('-no-pointer-events');
  });

  $(window).on("scrollstop.kit", (function(_this) {
    return function() {
      return $('body').removeClass('-no-pointer-events');
    };
  })(this));

  window['MaxmertkitHelpers'] = MaxmertkitHelpers;

}).call(this);
