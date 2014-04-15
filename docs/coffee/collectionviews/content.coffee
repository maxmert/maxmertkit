ViewContent = require('../views/content').module

CollectionContent = Backbone.Collection.extend()
    # comparator: 'name'

exports.module = Marionette.CollectionView.extend
    itemView: ViewContent
    collection: new CollectionContent()

    initialize: ->
        @listenTo $.app.vent, 'route', @resetCollection
        @listenTo @collection, 'reset', @render

    resetCollection: ->
        @collection.reset toCollection $.app.contents[ Backbone.history.templates ], $.app.templates[ Backbone.history.templates ]
