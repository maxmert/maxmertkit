# ModelMenu = require('../../models/sidebar/menu').module
ViewMenu = require('../../views/header/menu')
#
#
collectionData = []
_.each $.app.contents, ( val, key ) ->
    collectionData.push
        name: key

collectionMenu = new Backbone.Collection collectionData


# Main menu in header
# Visible only on big screens
exports.main = Marionette.CollectionView.extend
    tagName: "ul"
    className: '-menu'
    itemView: ViewMenu.main
    collection: collectionMenu
    channel: Backbone.Wreqr.radio.channel( 'menu' )

    initialize: ->

        @channel.commands.setHandler 'activate', ( id ) =>
            @$el.find('li._active_').removeClass '_active_'
            if id?
                $.app.commands.execute 'mobilemenu', 'activate', id
                @$el.find( id ).parent().addClass '_active_'
            else
                $.app.commands.execute 'mobilemenu', 'activate'


# Mobile menu in header
# Visible only on tablets and phones
exports.mobile = Marionette.CollectionView.extend
    tagName: "ul"
    className: '-pills -dark-'
    itemView: ViewMenu.mobile
    collection: collectionMenu
    channel: Backbone.Wreqr.radio.channel( 'mobilemenu' )

    initialize: ->

        @channel.commands.setHandler 'activate', ( id ) =>
            @$el.find('li._active_').removeClass '_active_'
            if id?
                @$el.find( id ).parent().addClass '_active_'
