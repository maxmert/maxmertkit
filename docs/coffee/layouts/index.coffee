CollectionViewMainMenu = require( '../collectionviews/header/mainmenu' ).module
CollectionViewMobileMenu = require( '../collectionviews/header/mobilemenu' ).module

ViewSocial = require( '../views/header/social' )

ViewSocialTwitter = ViewSocial.twitter
ViewSocialFacebook = ViewSocial.facebook
ViewSocialGithub = ViewSocial.github

exports.module = Marionette.Layout.extend

    template: $.app.templates.main

    regions:
        menu: '#mainmenu'
        mobilemenu: '#mobilemenu'
        content: '#maincontent'

        socialTwitter: '#social-twitter'
        socialFacebook: '#social-facebook'
        socialGithub: '#social-github'

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

        @menu.show new CollectionViewMainMenu()
        @mobilemenu.show new CollectionViewMobileMenu()

        @socialTwitter.show new ViewSocialTwitter()
        @socialFacebook.show new ViewSocialFacebook()
        @socialGithub.show new ViewSocialGithub()
