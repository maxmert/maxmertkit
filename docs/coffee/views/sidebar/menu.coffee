exports.module = Marionette.ItemView.extend
    tagName: "li"
    template: '<a href="#{{name}}" data-bypass>{{name}}</a><ul class="-list-group">{{#include}}<li><a data-bypass href="#{{name}}">{{name}}</a></li>{{/include}}</ul>'
