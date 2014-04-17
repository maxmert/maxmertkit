# ModelMenu = require('../../models/sidebar/menu').module
ViewMenuItem = require('../views/mainmenu').module
#
#
collectionData = []
_.each $.app.contents, ( val, key ) ->
    collectionData.push
        name: key

collectionMenu = new Backbone.Collection collectionData

exports.module = Marionette.CollectionView.extend
    tagName: "ul"
    className: '-menu -kit-'
    itemView: ViewMenuItem
    collection: collectionMenu
    channel: Backbone.Wreqr.radio.channel( 'menu' )

    initialize: ->

        @channel.commands.setHandler 'activate', ( id ) =>
            @$el.find('li._active_').removeClass '_active_'
            if id?
                @$el.find( id ).parent().addClass '_active_'
