ModelMenu = require('../../models/sidebar/menu').module
ViewMenuItem = require('../../views/sidebar/menu').module


CollectionMenu = Backbone.Collection.extend
    model: ModelMenu

collectionMenu = new CollectionMenu()


exports.module = Marionette.CollectionView.extend
    tagName: "ul"
    className: '-list-group -primary-'
    itemView: ViewMenuItem
    collection: collectionMenu

    initialize: ->
        @listenTo $.app.vent, 'route', @resetCollection
        @$el.append "<li class='_small' style='margin-bottom: 15px'><small class='dev-menu-small'><a href='#mainmenu' data-bypass><i class='fa fa-arrow-up'></i> on top</a></small></li>"
        # @listenTo @collection, 'reset', @render

    resetCollection: ->
        @collection.reset $.app.contents[ Backbone.history.templates ]
