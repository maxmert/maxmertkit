ViewMenuItem = require('../../views/sidebar/menu').module

exports.module = Marionette.CollectionView.extend
    tagName: "ul"
    className: '-menu'
    itemView: ViewMenuItem
    collection: new Backbone.Collection($.app.contents.widgets)
