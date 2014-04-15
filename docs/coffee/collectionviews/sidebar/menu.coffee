ModelMenu = require('../../models/sidebar/menu').module
ViewMenuItem = require('../../views/sidebar/menu').module


CollectionMenu = Backbone.Collection.extend
    model: ModelMenu

collectionMenu = new CollectionMenu()


exports.module = Marionette.CollectionView.extend
    tagName: "ul"
    className: '-list-group'
    itemView: ViewMenuItem
    collection: collectionMenu

    initialize: ->
        @listenTo $.app.vent, 'route', @resetCollection
        @listenTo @collection, 'reset', @render

    resetCollection: ->

        @collection.reset $.app.contents[ Backbone.history.templates ]
