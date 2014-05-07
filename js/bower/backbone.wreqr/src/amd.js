(function (root, factory) {
  if (typeof exports === 'object') {

    var underscore = require('underscore');
    var backbone = require('backbone');

    module.exports = factory(underscore, backbone);

  } else if (typeof define === 'function' && define.amd) {

    define(['underscore', 'backbone'], factory);

  } 
}(this, function (_, Backbone) {
  "use strict";

  // @include wreqr.js
  return Backbone.Wreqr; 

}));

