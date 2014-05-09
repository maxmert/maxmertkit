exports.twitter = Backbone.Model.extend
    url: ->
        "#{$.app.config.api}/social/twitter/shares"
    defaults:
        sign: "twit"


exports.facebook = Backbone.Model.extend
    url: ->
        "#{$.app.config.api}/social/facebook/shares"
    defaults:
        sign: "share"


exports.github = Backbone.Model.extend
    url: ->
        "#{$.app.config.api}/social/github/watch"
    defaults:
        sign: "watch"
