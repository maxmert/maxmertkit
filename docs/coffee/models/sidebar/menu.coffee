"use strict"


exports.model = Backbone.Model.extend
    defaults:
        existIncludes: ->
            @include? and @include.length > 0 and not ( @include.length is 1 and @include[0].invisible? )
