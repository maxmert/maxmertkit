ViewSocial = require( '../../views/pages/social' )


exports.module = Marionette.Layout.extend

    model: new Backbone.Model kit

    template: $.app.templates.common.pages.index

    regions:
        socialContribute: '#social-contribute'


    onRender: ->

        @socialContribute.show new ViewSocial.github()

        $.app.commands.execute 'menu', 'activate', '#index'
        $.app.commands.execute 'loader', 'finish'

        setTimeout =>
            @$el.find('.dev-version-spinner').replaceWith kit.version
        ,1
