CollectionViewMenu = require( '../../collectionviews/sidebar/menu' ).module
CollectionViewContent = require( '../../collectionviews/content' ).module

ViewSocial = require( '../../views/pages/social' )


exports.module = Marionette.Layout.extend

    model: new Backbone.Model kit

    template: $.app.templates.common.pages.components

    regions:
        sidebar: '#sidebar'
        content: '#content'
        socialContribute: '#social-contribute'


    onRender: ->

        @sidebar.show new CollectionViewMenu()
        @content.show new CollectionViewContent()
        @socialContribute.show new ViewSocial.github()

        @sidebar.currentView.$el.affix()

        $.app.commands.execute 'menu', 'activate', '#components'
        $.app.commands.execute 'loader', 'finish'
