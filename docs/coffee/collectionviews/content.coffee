ViewContent = require('../views/content').module

CollectionContent = Backbone.Collection.extend()

exports.module = Marionette.CollectionView.extend
    itemView: ViewContent
    collection: new CollectionContent()

    initialize: ->
        @listenTo $.app.vent, 'route', @resetCollection

    resetCollection: ->
        @collection.reset toCollection $.app.contents[ Backbone.history.templates ], $.app.templates[ Backbone.history.templates ]

    onRender: ->
        if $.app.main.currentView.content.currentView?

            menu = $.app.main.currentView.content.currentView.sidebar.$el
            if menu.data('kit-scrollspy')?
                menu.data('kit-scrollspy').refresh()
            else
                menu.scrollspy()
