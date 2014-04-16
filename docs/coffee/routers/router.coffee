LayoutWidgets = require('../layouts/pages/widgets').module

mainController =



exports.module = Marionette.AppRouter.extend

    controller: mainController

    routes:
        # '': 'index'
        'widgets': 'widgets'
        # 'utilities': 'utilities'

    # index: ->
    #     Backbone.history.templates = 'index'
    #     $.app.vent.trigger 'index.route'
    widgets: ->
        Backbone.history.templates = 'widgets'
        $.app.vent.trigger 'widgets.route'

        $.app.main.currentView.content.show new LayoutWidgets()

    # utilities: ->
    #     Backbone.history.templates = 'utilities'
    #     $.app.vent.trigger 'utilities.route'
