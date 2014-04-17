CollectionViewMenu = require( '../../collectionviews/sidebar/menu' ).module
CollectionViewContent = require( '../../collectionviews/content' ).module

exports.module = Marionette.Layout.extend

    template: $.app.templates.common.pages.basic

    regions:
        sidebar: '#sidebar'
        content: '#content'


    onRender: ->

        @sidebar.show new CollectionViewMenu()
        @content.show new CollectionViewContent()

        @sidebar.currentView.$el.affix()

        $.app.commands.execute 'menu', 'activate', '#basic'
        $.app.commands.execute 'loader', 'finish'
