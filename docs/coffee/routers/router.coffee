mainController =



exports.module = Marionette.AppRouter.extend

    controller: mainController

    routes:
        '': 'index'
        'widgets': 'widgets'

    index: ->
        Backbone.history.templates = 'index'
        $.app.vent.trigger 'index.route'
    widgets: ->
        Backbone.history.templates = 'widgets'
        $.app.vent.trigger 'widgets.route'
    components: ->
        Backbone.history.templates = 'components'
        $.app.vent.trigger 'components.route'
