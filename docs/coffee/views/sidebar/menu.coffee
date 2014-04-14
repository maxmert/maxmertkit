exports.module = Marionette.ItemView.extend
    tagName: "li"
    template: '<a href="#{{name}}" data-bypass>{{nameNormalized}}</a><ul class="-list-group">{{#includes}}<li><a data-bypass href="#{{name}}">{{nameNormalized}}</a></li>{{/includes}}</ul>'
