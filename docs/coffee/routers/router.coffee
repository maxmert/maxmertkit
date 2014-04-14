mainController =



exports.module = Marionette.AppRouter.extend

    controller: mainController

    routes:
        '': 'index'
        'widgets': 'widgets'

    widgets: ->
        console.log Backbone.history
    index: ->
        console.log Backbone.history
