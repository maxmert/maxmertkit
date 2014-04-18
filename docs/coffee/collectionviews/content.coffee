replaceTag = (tag) ->
    tagsToReplace[tag] or tag

safe_tags_replace = (str) ->
    str.replace /[&<>]/g, replaceTag

tagsToReplace =
    "&": "&amp;"
    "<": "&lt;"
    ">": "&gt;"


ViewContent = require('../views/content').module

CollectionContent = Backbone.Collection.extend()

exports.module = Marionette.CollectionView.extend
    itemView: ViewContent
    collection: new CollectionContent()

    initialize: ->
        @listenTo $.app.vent, 'route', @resetCollection
        @listenTo @, "collection:rendered", @highlightCode

    toCollection: ( contents, object) ->
        result = []

        for key, value in contents
            if key.include? and key.include.length
                inner = object[ key.name ]

                for menuItem in key.include
                    result.push
                        name: menuItem.name
                        path: menuItem.path
                        value: inner[ menuItem.name ]

            else
                result.push
                    name: key.name
                    path: key.path
                    value: object[ key.name ]
        result

    resetCollection: ->
        @collection.reset @toCollection $.app.contents[ Backbone.history.templates ], $.app.templates.kit[ Backbone.history.templates ]

    onRender: ->
        if $.app.main.currentView.content.currentView?

            menu = $.app.main.currentView.content.currentView.sidebar.$el
            if menu.data('kit-scrollspy')?
                menu.data('kit-scrollspy').refresh()
            else
                menu.scrollspy()

    highlightCode: ->
        $elements = @$el.find('[hljs]')
        count = $elements.length

        $elements.each ( index, pre ) =>
            html = $(pre).html()
            $(pre).html safe_tags_replace(html)
            if --count <= 0 then prettyPrint()
