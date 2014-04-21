# replaceTag = (tag) ->
#     tagsToReplace[tag] or tag
#
# safe_tags_replace = (str) ->
#     str.replace /[&<>]/g, replaceTag
#
# tagsToReplace =
#     "&": "&amp;"
#     "<": "&lt;"
#     ">": "&gt;"

exports.module = Marionette.ItemView.extend
    template: $.app.templates.common.partials


    # onRender: ->
    #     @$el.find('[hljs]').each ( index, pre ) =>
    #         html = $(pre).html()
    #         $(pre).html "<pre><code>#{safe_tags_replace(html)}</code></pre>"
    #         hljs.highlightBlock($(pre).find('pre code')[0])
