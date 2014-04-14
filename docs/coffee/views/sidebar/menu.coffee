exports.module = Marionette.ItemView.extend
    tagName: "li"
    template: '<a href="#{{name}}">{{name}}</a><ul>{{#include}}<li><a href="#{{name}}">{{name}}</a></li>{{/include}}</ul>'
