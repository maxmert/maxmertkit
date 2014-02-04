var Tiltimage, _name;

Tiltimage = (function() {
  function Tiltimage(name) {
    this.name = name;
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
          $.error("What do you want to do?");
        }
      }
    }
  });
};
;
//# sourceMappingURL=maxmertkit.js.map