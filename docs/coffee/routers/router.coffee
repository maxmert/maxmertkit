LayoutWidgets = require('../layouts/pages/widgets').module

mainController =



exports.module = Marionette.AppRouter.extend

    controller: mainController

    routes:
        # '': 'index'
        'widgets': 'widgets'
        # 'utilities': 'utilities'
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
            $.app.commands.execute 'loader', 'start'
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

    widgets: ->

        Backbone.history.templates = 'widgets'
        $.app.vent.trigger 'widgets.route'

        $.app.main.currentView.content.show new LayoutWidgets()

    error404: ->
        $.app.commands.execute 'menu', 'activate'
        $.app.main.currentView.content.close()

    # utilities: ->
    #     Backbone.history.templates = 'utilities'
    #     $.app.vent.trigger 'utilities.route'
