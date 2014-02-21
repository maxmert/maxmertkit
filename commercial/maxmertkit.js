(function() {
  var Tiltimage, _name;

  Tiltimage = (function() {
    function Tiltimage(name, options) {
      this.name = name;
      this.options = options;
      console.log(123);
    }

    return Tiltimage;

  })();

  _name = 'tiltimage';

  $.fn[_name] = function(options_) {
    return this.each(function() {
      if (!$.data(this, "kit-" + _name)) {
        $.data(this, "kit-" + _name, new Tiltimage(this, options_));
      } else {
        if (typeof options_ === "object") {
          $.data(this, "kit-" + _name)._setOptions(options_);
        } else {
          if (typeof options_ === "string" && options_.charAt(0) !== "_") {
            $.data(this, "kit-" + _name)[options_];
          } else {
            console.log("Maxmertkit error. You passed into the " + _name + " something wrong.");
          }
        }
      }
    });
  };

}).call(this);
;
//# sourceMappingURL=maxmertkit.js.map