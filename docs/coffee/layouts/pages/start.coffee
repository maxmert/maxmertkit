CollectionViewMenu = require( '../../collectionviews/sidebar/menu' ).module
CollectionViewContent = require( '../../collectionviews/content' ).module

ViewSocial = require( '../../views/pages/social' )


exports.module = Marionette.Layout.extend

    model: new Backbone.Model kit

    template: $.app.templates.common.pages.start

    regions:
        sidebar: '#sidebar'
        content: '#content'

        socialContribute: '#social-contribute'


    onRender: ->

        @sidebar.show new CollectionViewMenu()
        @content.show new CollectionViewContent()
        @socialContribute.show new ViewSocial.github()

        @sidebar.currentView.$el.affix()

        $.app.commands.execute 'menu', 'activate', '#start'
        $.app.commands.execute 'loader', 'finish'

        setTimeout =>
            @$el.find('.dev-version-spinner').replaceWith kit.version
            @$el.find('.dev-version-href').each ->
                href = $(@).attr 'href'
                $(@).attr 'href', href.replace(/\{\{version\}\}/g, kit.version)

        ,1
