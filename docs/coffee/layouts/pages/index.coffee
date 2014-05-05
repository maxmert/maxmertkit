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
            @seriesModel.next()
        , 1000

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