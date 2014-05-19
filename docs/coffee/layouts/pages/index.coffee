ViewSocial = require( '../../views/pages/social' )
ViewSeries = require( '../../views/pages/index/series' )
ModelSeries = require( '../../models/pages/index/series' ).model



widgets = [
    {
        name: '-btn'
        themes: mkit.buttons.common.themes
        sizes: mkit.buttons.common.sizes
        body: $.app.templates.common.pages.index.series.widgets.btn
    }
    {
        name: '-btn-bordered'
        themes: mkit.buttons.bordered.themes
        sizes: mkit.buttons.bordered.sizes
        body: $.app.templates.common.pages.index.series.widgets.btn
    }
    {
        name: '-group'
        themes: mkit.groups.buttons.themes
        sizes: mkit.groups.buttons.sizes
        body: $.app.templates.common.pages.index.series.widgets.group
    }
    {
        name: '-drop'
        themes: mkit.dropdowns.common.themes
        sizes: mkit.dropdowns.common.sizes
        body: $.app.templates.common.pages.index.series.widgets.dropdown
    }
    {
        name: '-tabs'
        themes: mkit.nav.tabs.themes
        sizes: mkit.nav.tabs.sizes
        body: $.app.templates.common.pages.index.series.widgets.tabs
    }
    {
        name: '-pills'
        themes: mkit.nav.pills.themes
        sizes: mkit.nav.pills.sizes
        body: $.app.templates.common.pages.index.series.widgets.pills
    }
    {
        name: '-menu'
        themes: mkit.nav.menu.themes
        sizes: mkit.nav.menu.sizes
        body: $.app.templates.common.pages.index.series.widgets.menu
    }
    {
        name: '-navbar'
        themes: mkit.nav.bar.themes
        sizes: mkit.nav.bar.sizes
        body: $.app.templates.common.pages.index.series.widgets.navbar
    }
    {
        name: '-list-group'
        themes: mkit.nav.listGroup.themes
        sizes: mkit.nav.listGroup.sizes
        body: $.app.templates.common.pages.index.series.widgets.listGroup
    }
    {
        name: '-label'
        themes: mkit.labels.common.themes
        sizes: mkit.labels.common.sizes
        body: $.app.templates.common.pages.index.series.widgets.label
    }
    {
        name: '-badge'
        themes: mkit.badges.common.themes
        sizes: mkit.badges.common.sizes
        body: $.app.templates.common.pages.index.series.widgets.badge
    }
    {
        name: '-progress'
        themes: mkit.progress.common.themes
        sizes: mkit.progress.common.sizes
        body: $.app.templates.common.pages.index.series.widgets.progress
    }
    {
        name: '-alert'
        themes: mkit.alerts.common.themes
        sizes: mkit.alerts.common.sizes
        body: $.app.templates.common.pages.index.series.widgets.alert
    }
    {
        name: '-thumbnail'
        themes: mkit.thumbnails.common.themes
        sizes: mkit.thumbnails.common.sizes
        body: $.app.templates.common.pages.index.series.widgets.thumbnail
    }
    {
        name: '-spinner-square'
        themes: mkit.spinners.square.themes
        sizes: mkit.spinners.square.sizes
        body: $.app.templates.common.pages.index.series.widgets.spinnerSquare
    }
    {
        name: '-spinner-fb'
        themes: mkit.spinners.fb.themes
        sizes: mkit.spinners.fb.sizes
        body: $.app.templates.common.pages.index.series.widgets.spinnerFb
    }
    {
        name: '-spinner-waves'
        themes: mkit.spinners.waves.themes
        sizes: mkit.spinners.waves.sizes
        body: $.app.templates.common.pages.index.series.widgets.spinnerWaves
    }
]


exports.module = Marionette.Layout.extend

    model: new Backbone.Model kit
    seriesModel: new ModelSeries widgets: widgets

    template: $.app.templates.common.pages.index.layout

    events:
        'mouseenter #series-header, #series': 'stopTimer'
        'mouseleave #series-header, #series': 'startTimer'

    regions:
        socialContribute: '#social-contribute'
        seriesHeader: '#series-header'
        series: '#series'

    initialize: ->
        @listenTo @seriesModel, 'change:active change:themeActive change:sizeActive', @seriesReset

    onRender: ->

        @socialContribute.show new ViewSocial.github()
        @seriesHeader.show new ViewSeries.header model: @seriesModel
        @series.show new ViewSeries.body model: @seriesModel

        @startTimer()

        $.app.commands.execute 'menu', 'activate', '#index'
        $.app.commands.execute 'loader', 'finish'


        setTimeout =>
            @$el.find('.dev-version-spinner').replaceWith kit.version
        ,1

    stopTimer: ->
        clearInterval @timer
        @timer = null

    startTimer: ->
        @timer = setInterval =>
            @seriesModel.prev()
        , 2000

    seriesReset: ->
        active = @seriesModel.get 'active'
        themeActive = @seriesModel.get 'themeActive'
        sizeActive = @seriesModel.get 'sizeActive'

        widgets = @seriesModel.get 'widgets'
        @seriesModel.set 'body', widgets[active].body
        @seriesModel.set 'name', widgets[active].name
        @seriesModel.set 'theme', widgets[active].themes[themeActive]
        @seriesModel.set 'size', widgets[active].sizes[sizeActive]

        # @render()

    onClose: ->
        @stopTimer()
