CollectionViewMenu = require( '../../collectionviews/sidebar/menu' ).module
CollectionViewContent = require( '../../collectionviews/content' ).module

ViewSocial = require( '../../views/pages/social' )


exports.module = Marionette.Layout.extend

    model: new Backbone.Model kit

    template: $.app.templates.common.pages.components

    regions:
        sidebar: '#sidebar'
        content: '#content'
        socialContribute: '#social-contribute'


    onRender: ->

        @sidebar.show new CollectionViewMenu()
        @content.show new CollectionViewContent()
        @socialContribute.show new ViewSocial.github()

        @sidebar.currentView.$el.affix()

        $.app.commands.execute 'menu', 'activate', '#components'
        $.app.commands.execute 'loader', 'finish'

        ###
            TODO: WTF? Remove setTimeout.
        ###
        setTimeout =>
            # Init first buttons block
            @$el.find( '[data-group="bbb"], [data-group="bbb1"], .btn-simple' ).button()

            # Buttons with before
            $('.btn-with-before').button
            	beforeactive: ->
            		d = $.Deferred()
            		@html 'Loading...'
            		@addClass '_disabled_'
            		setTimeout ->
            			d.resolve()
            		,2000
            		d.promise()

            	onactive: ->
            		@removeClass '_disabled_'
            		@html 'Checked'

            	onunactive: ->
            		@html 'Checkbox'

            $('.radio-with-before').button
            	beforeactive: ->
            		d = $.Deferred()
            		@html 'Loading...'
            		@addClass '_disabled_'
            		setTimeout ->
            			d.resolve()
            		,2000
            		d.promise()

            	onactive: ->
            		@removeClass '_disabled_'
            		@html 'Checked'

            	beforeunactive: ->
            		d = $.Deferred()
            		@html 'Unchecking...'
            		@addClass '_disabled_'
            		setTimeout ->
            			d.resolve()
            		,3000
            		d.promise()

            	onunactive: ->
            		@removeClass '_disabled_'
            		@html 'Radio'






            # POPUPS
            $('.btn-popup-demo').popup
            	beforeopen: ->
            		# Get popup class instance
            		popup = @data('kit-popup')
            		# Find content element inside popup
            		content = popup.$el.find '.-content'
            		# Set new content
            		content.html "Set content here"

            	onopen: ->
            		# Add active class to the button
            		@addClass '_active_'

            	onclose: ->
            		# Remove active class to the button
            		@removeClass '_active_'

            $('.btn-popup-demo-left').popup
            	positionVertical: 'middle'
            	positionHorizontal: 'left'
            	beforeopen: ->
            		popup = @data('kit-popup')
            		content = popup.$el.find '.-content'
            		content.html "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

            	onopen: ->
            		@addClass '_active_'

            	onclose: ->
            		@removeClass '_active_'

            $('.btn-popup-demo-right').popup
                positionVertical: 'middle'
                positionHorizontal: 'right'
                beforeopen: ->
                    popup = @data('kit-popup')
                    content = popup.$el.find '.-content'
                    content.html "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

                onopen: ->
                    @addClass '_active_'

                onclose: ->
                    @removeClass '_active_'

            $('.btn-popup-demo-bottom').popup
                positionVertical: 'bottom'
                positionHorizontal: 'center'
                beforeopen: ->
                    popup = @data('kit-popup')
                    content = popup.$el.find '.-content'
                    content.html "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

                onopen: ->
                    @addClass '_active_'

                onclose: ->
                    @removeClass '_active_'

            $('.btn-popup-demo-bottom-right').popup
                positionVertical: 'bottom'
                positionHorizontal: 'right'
                beforeopen: ->
                    popup = @data('kit-popup')
                    content = popup.$el.find '.-content'
                    content.html "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

                onopen: ->
                    @addClass '_active_'

                onclose: ->
                    @removeClass '_active_'

            $('.btn-popup-demo-top-left').popup
                positionVertical: 'top'
                positionHorizontal: 'left'
                beforeopen: ->
                    popup = @data('kit-popup')
                    content = popup.$el.find '.-content'
                    content.html "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

                onopen: ->
                    @addClass '_active_'

                onclose: ->
                    @removeClass '_active_'





            # TABS
            @$el.find("[data-toggle='tabs']").tabs()


            # MODALS
            $('.btn-modal-fast').modal()
            $('.btn-modal123').modal
            	beforeopen: ->
            		d = $.Deferred()

            		setTimeout ->
            			d.resolve()
            		, 2000

            		d.promise()



            # SCROLLSPY
            @$el.find('[data-spy="scroll"]').scrollspy()
        , 1
