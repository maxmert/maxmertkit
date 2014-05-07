CollectionViewMenu = require( '../collectionviews/header/menu' )
ViewSocialButton = require( '../views/header/social' )


exports.module = Marionette.Layout.extend

    template: $.app.templates.main
    model: new Backbone.Model kit

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

        @menu.show new CollectionViewMenu.main()
        @mobilemenu.show new CollectionViewMenu.mobile()

        @socialTwitter.show new ViewSocialButton.twitter()
        @socialFacebook.show new ViewSocialButton.facebook()
        @socialGithub.show new ViewSocialButton.github()
