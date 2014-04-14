"use strict"


exports.module = Backbone.Model.extend
    defaults:
        nameNormalized: ->
            @name.replace(/[0-9]/g, '')
