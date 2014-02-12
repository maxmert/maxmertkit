(function() {
  var MaxmertkitHelpers;

  MaxmertkitHelpers = (function() {
    MaxmertkitHelpers.prototype._id = 0;

    MaxmertkitHelpers.prototype._instances = [];

    function MaxmertkitHelpers($btn, options) {
      this.$btn = $btn;
      this.options = options;
      this._pushInstance();
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
      return console.log(options);
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

    MaxmertkitHelpers.prototype._equalNodes = function(node1, node2) {
      return node1.get(0) === node2.get(0);
    };

    MaxmertkitHelpers.prototype._getScrollParent = function(el) {
      var parent, style, _ref;
      parent = el[0] || el;
      while (parent = parent.parentNode) {
        try {
          style = getComputedStyle(parent);
        } catch (_error) {}
        if (style == null) {
          return $(parent);
        }
        if (/(auto|scroll)/.test(style['overflow'] + style['overflow-y'] + style['overflow-x'])) {
          if (position !== 'absolute' || ((_ref = style['position']) === 'relative' || _ref === 'absolute' || _ref === 'fixed')) {
            return parent;
          }
        }
      }
      return document.body;
    };

    return MaxmertkitHelpers;

  })();

  window['MaxmertkitHelpers'] = MaxmertkitHelpers;

}).call(this);
;(function() {
  var Modal, _beforeclose, _beforeopen, _close, _name, _open,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _name = "modal";

  Modal = (function(_super) {
    __extends(Modal, _super);

    Modal.prototype._name = _name;

    function Modal(btn, options) {
      var _options,
        _this = this;
      this.btn = btn;
      this.options = options;
      this.$btn = $(this.btn);
      _options = {
        target: this.$btn.data('target'),
        toggle: this.$btn.data('toggle') || 'modal',
        event: "click." + this._name,
        eventClose: "click." + this._name,
        backdrop: false
      };
      this.options = this._merge(_options, this.options);
      this.beforeopen = this.options.beforeopen;
      this.onopen = this.options.onopen;
      this.beforeclose = this.options.beforeclose;
      this.onclose = this.options.onclose;
      this.$el = $(document).find(this.options.target);
      this.$btn.on(this.options.event, function() {
        return _this.open();
      });
      if (this.options.backdrop) {
        this.$el.on("click." + this._name, function(event) {
          if ($(event.target).hasClass('-modal _active_')) {
            return _this.close();
          }
        });
      }
      this.$el.find("*[data-dismiss='modal']").on(this.options.event, function() {
        return _this.close();
      });
      Modal.__super__.constructor.call(this, this.$btn, this.options);
    }

    Modal.prototype.destroy = function() {
      this.$btn.off("." + this._name);
      return Modal.__super__.destroy.apply(this, arguments);
    };

    Modal.prototype.open = function() {
      return _beforeopen.call(this);
    };

    Modal.prototype.close = function() {
      return _beforeclose.call(this);
    };

    return Modal;

  })(MaxmertkitHelpers);

  _beforeopen = function() {
    var deferred,
      _this = this;
    if (this.beforeopen != null) {
      try {
        deferred = this.beforeopen.call(this.$btn);
        return deferred.done(function() {
          return _open.call(_this);
        }).fail(function() {
          return _this.$el.trigger("fail." + _this._name);
        });
      } catch (_error) {
        return _open.call(this);
      }
    } else {
      return _open.call(this);
    }
  };

  _open = function() {
    this.$el.addClass('_active_');
    this.$el.trigger("opened." + this._name);
    if (this.onopen != null) {
      try {
        return this.onopen.call(this.$btn);
      } catch (_error) {}
    }
  };

  _beforeclose = function() {
    var deferred,
      _this = this;
    if (this.beforeclose != null) {
      try {
        deferred = this.beforeclose.call(this.$btn);
        return deferred.done(function() {
          return _close.call(_this);
        }).fail(function() {
          return _this.$el.trigger("fail." + _this._name);
        });
      } catch (_error) {
        return _close.call(this);
      }
    } else {
      return _close.call(this);
    }
  };

  _close = function() {
    this.$el.removeClass('_active_');
    this.$el.trigger("closed." + this._name);
    if (this.onclose != null) {
      try {
        return this.onclose.call(this.$btn);
      } catch (_error) {}
    }
  };

  $.fn[_name] = function(options) {
    return this.each(function() {
      if (!$.data(this, "kit-" + _name)) {
        $.data(this, "kit-" + _name, new Modal(this, options));
      } else {
        if (typeof options === "object") {
          $.data(this, "kit-" + _name)._setOptions(options);
        } else {
          if (typeof options === "string" && options.charAt(0) !== "_") {
            $.data(this, "kit-" + _name)[options];
          } else {
            console.error("Maxmertkit error. You passed into the " + _name + " something wrong.");
          }
        }
      }
    });
  };

}).call(this);
;(function() {
  var Popup, _beforeclose, _beforeopen, _close, _name, _open, _position,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _name = "popup";

  Popup = (function(_super) {
    __extends(Popup, _super);

    Popup.prototype._name = _name;

    function Popup(btn, options) {
      var _options,
        _this = this;
      this.btn = btn;
      this.options = options;
      this.$btn = $(this.btn);
      _options = {
        target: this.$btn.data('target'),
        toggle: this.$btn.data('toggle') || 'popup',
        event: "click." + this._name,
        eventClose: "click." + this._name,
        positionVertical: 'bottom',
        positionHorizontal: 'right',
        offset: {
          horizontal: 5,
          vertical: 5
        }
      };
      this.options = this._merge(_options, this.options);
      this.beforeopen = this.options.beforeopen;
      this.onopen = this.options.onopen;
      this.beforeclose = this.options.beforeclose;
      this.onclose = this.options.onclose;
      this.$el = $(document).find(this.options.target);
      this.$btn.on(this.options.event, function() {
        if (!_this.$el.is(':visible')) {
          return _this.open();
        } else {
          return _this.close();
        }
      });
      this.$el.find("*[data-dismiss='popup']").on(this.options.event, function() {
        return _this.close();
      });
      this.$el.removeClass('_top_ _bottom_ _left_ _right_');
      this.$el.addClass("_" + this.options.positionVertical + "_ _" + this.options.positionHorizontal + "_");
      Popup.__super__.constructor.call(this, this.$btn, this.options);
    }

    Popup.prototype.destroy = function() {
      this.$btn.off("." + this._name);
      return Popup.__super__.destroy.apply(this, arguments);
    };

    Popup.prototype.open = function() {
      return _beforeopen.call(this);
    };

    Popup.prototype.close = function() {
      return _beforeclose.call(this);
    };

    return Popup;

  })(MaxmertkitHelpers);

  _position = function() {
    var newLeft, newTop, position, positionBtn, scrollParent, scrollParentBtn, size, sizeBtn;
    scrollParent = this._getScrollParent(this.$el);
    scrollParentBtn = this._getScrollParent(this.$btn);
    positionBtn = this.$btn.offset();
    position = this.$el.offset();
    sizeBtn = {
      width: this.$btn.outerWidth(),
      height: this.$btn.outerHeight()
    };
    size = {
      width: this.$el.outerWidth(),
      height: this.$el.outerHeight()
    };
    newTop = newLeft = 0;
    switch (this.options.positionVertical) {
      case 'top':
        newTop = positionBtn.top - size.height - this.options.offset.vertical;
        break;
      case 'bottom':
        newTop = positionBtn.top + sizeBtn.height + this.options.offset.vertical;
        break;
      case 'middle' || 'center':
        newTop = positionBtn.top + sizeBtn.height / 2 - size.height / 2;
    }
    switch (this.options.positionHorizontal) {
      case 'center' || 'middle':
        newLeft = positionBtn.left + sizeBtn.width / 2 - size.width / 2;
        break;
      case 'left':
        newLeft = positionBtn.left - size.width - this.options.offset.horizontal;
        break;
      case 'right':
        newLeft = positionBtn.left + sizeBtn.width + this.options.offset.horizontal;
    }
    return this.$el.css({
      left: newLeft,
      top: newTop
    });
  };

  _beforeopen = function() {
    var deferred,
      _this = this;
    if (this.beforeopen != null) {
      try {
        deferred = this.beforeopen.call(this.$btn);
        return deferred.done(function() {
          return _open.call(_this);
        }).fail(function() {
          return _this.$el.trigger("fail." + _this._name);
        });
      } catch (_error) {
        return _open.call(this);
      }
    } else {
      return _open.call(this);
    }
  };

  _open = function() {
    _position.call(this);
    this.$el.addClass('_active_');
    this.$el.trigger("opened." + this._name);
    if (this.onopen != null) {
      try {
        return this.onopen.call(this.$btn);
      } catch (_error) {}
    }
  };

  _beforeclose = function() {
    var deferred,
      _this = this;
    if (this.beforeclose != null) {
      try {
        deferred = this.beforeclose.call(this.$btn);
        return deferred.done(function() {
          return _close.call(_this);
        }).fail(function() {
          return _this.$el.trigger("fail." + _this._name);
        });
      } catch (_error) {
        return _close.call(this);
      }
    } else {
      return _close.call(this);
    }
  };

  _close = function() {
    this.$el.removeClass('_active_');
    this.$el.trigger("closed." + this._name);
    if (this.onclose != null) {
      try {
        return this.onclose.call(this.$btn);
      } catch (_error) {}
    }
  };

  $.fn[_name] = function(options) {
    return this.each(function() {
      if (!$.data(this, "kit-" + _name)) {
        $.data(this, "kit-" + _name, new Popup(this, options));
      } else {
        if (typeof options === "object") {
          $.data(this, "kit-" + _name)._setOptions(options);
        } else {
          if (typeof options === "string" && options.charAt(0) !== "_") {
            $.data(this, "kit-" + _name)[options];
          } else {
            console.error("Maxmertkit error. You passed into the " + _name + " something wrong.");
          }
        }
      }
    });
  };

}).call(this);
;
//# sourceMappingURL=maxmertkit.js.map