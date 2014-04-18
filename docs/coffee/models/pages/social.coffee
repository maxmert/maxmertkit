exports.github = Backbone.Model.extend
    url: ->
        "#{$.app.config.api}/social/github/contribute"
    defaults:
        sign: "contribute"
