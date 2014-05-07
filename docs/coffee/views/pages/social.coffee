ModelSocial = require('../../models/pages/social')

exports.github = Marionette.ItemView.extend
    tagName: "span"
    model: new ModelSocial.github()
    template: $.app.templates.common.pages.social.github

    initialize: ->
        @listenTo @model, 'sync', @render

        @model.fetch
            data: $.param({ owner: "maxmert", repo: "maxmertkit"})
