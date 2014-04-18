ModelSocial = require('../../models/header/social')

exports.twitter = Marionette.ItemView.extend
    tagName: "span"
    model: new ModelSocial.twitter()
    template: $.app.templates.common.header.social.twitter

    initialize: ->
        @listenTo @model, 'sync', @render

        @model.fetch
            data: $.param({ url: "www.maxmert.com"})




exports.facebook = Marionette.ItemView.extend
    tagName: "span"
    model: new ModelSocial.facebook()
    template: $.app.templates.common.header.social.facebook

    initialize: ->
        @listenTo @model, 'sync', @render

        @model.fetch
            data: $.param({ url: "www.maxmert.com"})



exports.github = Marionette.ItemView.extend
    tagName: "span"
    model: new ModelSocial.github()
    template: $.app.templates.common.header.social.github

    initialize: ->
        @listenTo @model, 'sync', @render

        @model.fetch
            data: $.param({ owner: "maxmert", repo: "maxmertkit"})
