CollectionViewMainMenu = require( '../collectionviews/mainmenu' ).module
# CollectionViewMenu = require( '../collectionviews/sidebar/menu' ).module
# CollectionViewContent = require( '../collectionviews/content' ).module

exports.module = Marionette.Layout.extend

    template: $.app.templates.main

    regions:
        # sidebar: '#sidebar'
        # content: '#content'
        menu: '#mainmenu'
        content: '#maincontent'

    channel: Backbone.Wreqr.radio.channel( 'loader' )

    initialize: ->

        @channel.commands.setHandler 'start', =>
            if @loader? then @loader.addClass '_active_'

        @channel.commands.setHandler 'finish', =>
            if @loader? then @loader.removeClass '_active_'


    onRender: ->
        @loader = @$el.find '#loader'

        # @sidebar.show new CollectionViewMenu()
        # @content.show new CollectionViewContent()
        @menu.show new CollectionViewMainMenu()

        # @sidebar.affix()
