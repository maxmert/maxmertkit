exports.module = Marionette.ItemView.extend
    tagName: "li"
    template: '<a href="#{{path}}" data-bypass>{{name}}</a><ul class="-list-group">{{#include}}<li><a data-bypass href="#{{path}}">{{name}}</a></li>{{/include}}</ul>'
