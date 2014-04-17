CollectionViewMainMenu = require( '../collectionviews/header/mainmenu' ).module
CollectionViewMobileMenu = require( '../collectionviews/header/mobilemenu' ).module
# CollectionViewMenu = require( '../collectionviews/sidebar/menu' ).module
# CollectionViewContent = require( '../collectionviews/content' ).module

exports.module = Marionette.Layout.extend

    template: $.app.templates.main

    regions:
        # sidebar: '#sidebar'
        # content: '#content'
        menu: '#mainmenu'
        mobilemenu: '#mobilemenu'
        content: '#maincontent'

    channel: Backbone.Wreqr.radio.channel( 'loader' )

    initialize: ->

        @channel.commands.setHandler 'start', ( color ) =>
            if @loader?
                if color?
                    @loader.attr 'style',"background-color: #{color};"
                else
                    @loader.removeAttr 'style'
                setTimeout =>
                    @loader.addClass '_active_'
                , 1

        @channel.commands.setHandler 'finish', =>
            if @loader? then @loader.removeClass '_active_'


    onRender: ->
        @loader = @$el.find '#loader'

        # @sidebar.show new CollectionViewMenu()
        # @content.show new CollectionViewContent()
        @menu.show new CollectionViewMainMenu()
        @mobilemenu.show new CollectionViewMobileMenu()

        # @sidebar.affix()
