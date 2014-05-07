exports.main = Marionette.ItemView.extend
    tagName: "li"
    template: $.app.templates.common.header.menu.item

exports.mobile = Marionette.ItemView.extend
    tagName: "li"
    template: $.app.templates.common.header.menu.mobile
