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

  return MaxmertkitHelpers;

})();
;var Modal, _name,
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
      backdrop: false
    };
    this.options = this._merge(_options, this.options);
    if ((this.options.beforeopen != null) && typeof this.options.beforeopen === 'function') {
      this.beforeopen = this.options.beforeopen;
    }
    this.$el = $(document).find(this.options.target);
    this.$btn.on(this.options.event, function() {
      return _this._open();
    });
    if (this.options.backdrop) {
      this.$el.on("click." + this._name, function(event) {
        if ($(event.target).hasClass('-modal _active_')) {
          return _this._toggle();
        }
      });
    }
    this.$el.find("*[data-dismiss='modal']").on(this.options.event, function() {
      return _this._toggle();
    });
    Modal.__super__.constructor.call(this, this.$btn, this.options);
  }

  Modal.prototype.destroy = function() {
    this.$btn.off("." + this._name);
    return Modal.__super__.destroy.apply(this, arguments);
  };

  Modal.prototype._toggle = function() {
    return this.$el.toggleClass('_active_');
  };

  Modal.prototype._close = function() {
    this.$el.removeClass('_active_');
    return this.$el.trigger("closed." + this._name);
  };

  Modal.prototype._open = function() {
    var deferred,
      _this = this;
    if (this.beforeopen != null) {
      try {
        deferred = this.beforeopen.call(this.$btn);
        return deferred.done(function() {
          _this.$el.addClass('_active_');
          return _this.$el.trigger("opened." + _this._name);
        }).fail(function() {
          return _this.$el.trigger("fail." + _this._name);
        });
      } catch (_error) {
        this.$el.addClass('_active_');
        return this.$el.trigger("opened." + this._name);
      }
    }
  };

  return Modal;

})(MaxmertkitHelpers);

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
;
//# sourceMappingURL=maxmertkit.js.map