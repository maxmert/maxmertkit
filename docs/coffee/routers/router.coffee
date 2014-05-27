LayoutIndex = require('../layouts/pages/index').module
LayoutStart = require('../layouts/pages/start').module
LayoutBasic = require('../layouts/pages/basic').module
LayoutWidgets = require('../layouts/pages/widgets').module
LayoutUtilities = require('../layouts/pages/utilities').module
LayoutComponents = require('../layouts/pages/components').module
LayoutChangelog = require('../layouts/pages/changelog').module
LayoutExamples = require('../layouts/pages/examples')
Layout404 = require('../layouts/pages/404').module

mainController =



exports.module = Marionette.AppRouter.extend

    controller: mainController
    title: $('title')

    routes:
        '': 'index'
        'start': 'start'
        'basic': 'basic'
        'widgets': 'widgets'
        'utilities': 'utilities'
        'components': 'components'
        'changelog': 'changelog'
        'examples/blog': 'examplesBlog'
        "*error": "error404"
    initialize: ->
        @bind 'all', @_trackPageview

    _trackPageview: ->
        url = Backbone.history.getFragment()
        if !/^\//.test(url) then url = '/' + url
        window._gaq?.push(['_trackPageview', url])
        if window['GoogleAnalyticsObject']?
            ga('send', 'pageview', url)

    route: (route, name, callback) ->
    	route = @_routeToRegExp(route)	unless _.isRegExp(route)
    	if _.isFunction(name)
    		callback = name
    		name = ""
    	callback = this[name]	unless callback
    	router = this
    	Backbone.history.route route, (fragment) =>
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

    index: ->
        @title.html("Maxmertkit")
        Backbone.history.templates = 'index'
        $.app.main.currentView.content.show new LayoutIndex()

    start: ->
        @title.html("Start · Maxmertkit")
        Backbone.history.color = '#3f3f3f'
        Backbone.history.templates = 'start'
        $.app.main.currentView.content.show new LayoutStart()

    basic: ->
        @title.html("Basic · Maxmertkit")
        Backbone.history.color = '#b62d93'
        Backbone.history.templates = 'basic'
        $.app.main.currentView.content.show new LayoutBasic()

    # widgets: ->
    #     Backbone.history.color = '#44a4b6'
    #     Backbone.history.templates = 'basic'
    #     $.app.main.currentView.content.show new LayoutBasic()

    widgets: ->
        @title.html("Widgets · Maxmertkit")
        Backbone.history.templates = 'widgets'
        Backbone.history.color = '#3087aa'
        $.app.main.currentView.content.show new LayoutWidgets()

    utilities: ->
        @title.html("Utilities · Maxmertkit")
        Backbone.history.templates = 'utilities'
        Backbone.history.color = '#972822'
        $.app.main.currentView.content.show new LayoutUtilities()

    components: ->
        @title.html("Components · Maxmertkit")
        Backbone.history.templates = 'components'
        Backbone.history.color = '#25a800'
        $.app.main.currentView.content.show new LayoutComponents()

    changelog: ->
        @title.html("Changelog · Maxmertkit")
        Backbone.history.templates = 'changelog'
        Backbone.history.color = '#25a800'
        $.app.main.currentView.content.show new LayoutChangelog()

    examplesBlog: ->
        @title.html("Changelog · Maxmertkit")
        Backbone.history.templates = null
        Backbone.history.color = '#25a800'
        $.app.main.currentView.content.show new LayoutExamples.blog()

    error404: ->
        @title.html("404 · Maxmertkit")
        $.app.commands.execute 'menu', 'activate'
        $.app.main.currentView.content.close()
        $.app.main.currentView.content.show new Layout404()
