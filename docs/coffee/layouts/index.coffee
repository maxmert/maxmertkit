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


    onRender: ->

        # @sidebar.show new CollectionViewMenu()
        # @content.show new CollectionViewContent()
        @menu.show new CollectionViewMainMenu()

        # @sidebar.affix()
