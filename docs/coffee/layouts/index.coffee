CollectionViewMenu = require( '../collectionviews/sidebar/menu' ).module

exports.module = Marionette.Layout.extend

    template: $.app.templates.main

    regions:
        sidebar: '#sidebar'
        content: '#content'

    onRender: ->
        
        @sidebar.show new CollectionViewMenu()
