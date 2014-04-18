LayoutBasic = require('../layouts/pages/basic').module
LayoutWidgets = require('../layouts/pages/widgets').module
LayoutUtilities = require('../layouts/pages/utilities').module

mainController =



exports.module = Marionette.AppRouter.extend

    controller: mainController

    routes:
        # '': 'index'
        'basic': 'basic'
        'widgets': 'widgets'
        'utilities': 'utilities'
        "*error": "error404"

    route: (route, name, callback) ->
    	route = @_routeToRegExp(route)	unless _.isRegExp(route)
    	if _.isFunction(name)
    		callback = name
    		name = ""
    	callback = this[name]	unless callback
    	router = this
    	Backbone.history.route route, (fragment) ->
            args = router._extractParameters(route, fragment)
            $.app.commands.execute 'loader', 'start', Backbone.history.color
            setTimeout =>
                router.execute callback, args
                router.trigger.apply router, ["route:" + name].concat(args)
                router.trigger "route", name, args
                Backbone.history.trigger "route", router, name, args
                $.app.commands.execute 'loader', 'finish'
            , 50
            return

    	this

    # index: ->
    #     Backbone.history.templates = 'index'
    #     $.app.vent.trigger 'index.route'

    basic: ->
        Backbone.history.color = '#b62d93'
        Backbone.history.templates = 'basic'
        $.app.main.currentView.content.show new LayoutBasic()

    widgets: ->
        Backbone.history.color = '#44a4b6'
        Backbone.history.templates = 'basic'
        $.app.main.currentView.content.show new LayoutBasic()

    widgets: ->
        Backbone.history.templates = 'widgets'
        Backbone.history.color = '#b34c2c'
        $.app.main.currentView.content.show new LayoutWidgets()

    utilities: ->
        Backbone.history.templates = 'utilities'
        $.app.main.currentView.content.show new LayoutUtilities()

    error404: ->
        $.app.commands.execute 'menu', 'activate'
        $.app.main.currentView.content.close()
