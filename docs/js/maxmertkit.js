var MaxmertkitHelpers;

MaxmertkitHelpers = (function() {
  function MaxmertkitHelpers($btn, options) {
    this.$btn = $btn;
    this.options = options;
  }

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

  return MaxmertkitHelpers;

})();
;var Modal, _name,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_name = "modal";

Modal = (function(_super) {
  __extends(Modal, _super);

  function Modal(btn, options) {
    var _options,
      _this = this;
    this.btn = btn;
    this.options = options;
    this.$btn = $(this.btn);
    _options = {
      target: this.$btn.data('target'),
      toggle: this.$btn.data('toggle') || 'modal',
      event: 'click'
    };
    this.options = this._merge(_options, this.options);
    this.$el = $(document).find(this.options.target);
    this.$btn.on(this.options.event, function() {
      return _this.$el.toggleClass('_active_');
    });
    console.log(this);
  }

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