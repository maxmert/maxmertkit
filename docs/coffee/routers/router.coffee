LayoutStart = require('../layouts/pages/start').module
LayoutBasic = require('../layouts/pages/basic').module
LayoutWidgets = require('../layouts/pages/widgets').module
LayoutUtilities = require('../layouts/pages/utilities').module
LayoutComponents = require('../layouts/pages/components').module

mainController =



exports.module = Marionette.AppRouter.extend

    controller: mainController

    routes:
        # '': 'index'
        'start': 'start'
        'basic': 'basic'
        'widgets': 'widgets'
        'utilities': 'utilities'
        'components': 'components'
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

    start: ->
        Backbone.history.color = '#3f3f3f'
        Backbone.history.templates = 'start'
        $.app.main.currentView.content.show new LayoutStart()

    basic: ->
        Backbone.history.color = '#b62d93'
        Backbone.history.templates = 'basic'
        $.app.main.currentView.content.show new LayoutBasic()

    # widgets: ->
    #     Backbone.history.color = '#44a4b6'
    #     Backbone.history.templates = 'basic'
    #     $.app.main.currentView.content.show new LayoutBasic()

    widgets: ->
        Backbone.history.templates = 'widgets'
        Backbone.history.color = '#3087aa'
        $.app.main.currentView.content.show new LayoutWidgets()

    utilities: ->
        Backbone.history.templates = 'utilities'
        Backbone.history.color = '#972822'
        $.app.main.currentView.content.show new LayoutUtilities()

    components: ->
        Backbone.history.templates = 'components'
        Backbone.history.color = '#25a800'
        $.app.main.currentView.content.show new LayoutComponents()

    error404: ->
        $.app.commands.execute 'menu', 'activate'
        $.app.main.currentView.content.close()
