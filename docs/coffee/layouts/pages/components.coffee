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
		setTimeout =>
			@sidebar.currentView.$el[0].affix( offset: -25 )
		, 1
		$.app.commands.execute 'menu', 'activate', '#components'
		$.app.commands.execute 'loader', 'finish'

		###
			TODO: WTF? Remove setTimeout.
		###
		setTimeout =>
			# Init first buttons block
			@$el.find( '[data-group="bbb"], [data-group="bbb1"], .btn-simple' ).each (index, btn) ->
				btn.button()

			# Buttons with before
			$('.btn-with-before').each (index, btn) ->
				btn.button
					beforeactive: ->
						d = $.Deferred()
						@$el = $(@)
						@$el.html 'Loading...'
						@$el.addClass '_disabled_'
						setTimeout ->
							d.resolve()
						,2000
						d.promise()

					onactive: ->
						@$el.removeClass '_disabled_'
						@$el.html 'Checked'

					onunactive: ->
						@$el.html 'Checkbox'

			$('.radio-with-before').each (index, btn) ->
				btn.button
					beforeactive: ->
						d = $.Deferred()
						@$el = $(@)
						@$el.html 'Loading...'
						@$el.addClass '_disabled_'
						setTimeout ->
							d.resolve()
						,2000
						d.promise()

					onactive: ->
						el = $(@)
						el.removeClass '_disabled_'
						el.html 'Checked'

					beforedeactive: ->
						d = $.Deferred()
						@$el = $(@)
						@$el.html 'Unchecking...'
						@$el.addClass '_disabled_'
						setTimeout ->
							d.resolve()
						,3000
						d.promise()

					ondeactive: ->
						@$el = $(@)
						@$el.removeClass '_disabled_'
						@$el.html 'Radio'






			# # POPUPS
			$('.btn-popup-demo').each (index, popup) ->
				popup.popup
					beforeactive: ->
						# Get popup class instance
						popup = @data['kitPopup']
						# Set new content
						popup.dialog.innerHTML = "Set content here"

					onactive: ->
						# Add active class to the button
						@data['kitPopup']._addClass '_active_'

					ondeactive: ->
						# Remove active class to the button
						@data['kitPopup']._removeClass '_active_'

			$('.btn-popup-demo-left').each (index, popup) ->
				popup.popup
					position:
						vertical: 'middle'
						horizontal: 'left'
					beforeactive: ->
						popup = @data['kitPopup']
						popup.dialog.innerHTML = "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

					onactive: ->
						@data['kitPopup']._addClass '_active_'

					ondeactive: ->
						@data['kitPopup']._removeClass '_active_'

			$('.btn-popup-demo-right').each (index, popup) ->
				popup.popup
					position:
						vertical: 'middle'
						horizontal: 'right'
					beforeactive: ->
						popup = @data['kitPopup']
						popup.dialog.innerHTML = "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

					onactive: ->
						@data['kitPopup']._addClass '_active_'

					ondeactive: ->
						@data['kitPopup']._removeClass '_active_'

			$('.btn-popup-demo-bottom').each (index, popup) ->
				popup.popup
					position:
						vertical: 'bottom'
						horizontal: 'center'
					beforeactive: ->
						popup = @data['kitPopup']
						popup.dialog.innerHTML = "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

					onactive: ->
						@data['kitPopup']._addClass '_active_'

					ondeactive: ->
						@data['kitPopup']._removeClass '_active_'

			$('.btn-popup-demo-bottom-right').each (index, popup) ->
				popup.popup
					position:
						vertical: 'bottom'
						horizontal: 'right'
					beforeactive: ->
						popup = @data['kitPopup']
						popup.dialog.innerHTML = "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

					onactive: ->
						@data['kitPopup']._addClass '_active_'

					ondeactive: ->
						@data['kitPopup']._removeClass '_active_'

			$('.btn-popup-demo-top-left').each (index, popup) ->
				popup.popup
					position:
						vertical: 'top'
						horizontal: 'left'
					beforeactive: ->
						popup = @data['kitPopup']
						popup.dialog.innerHTML = "Popup #{popup._id} with dynamic content Random number #{Math.random()}"

					onactive: ->
						@data['kitPopup']._addClass '_active_'

					ondeactive: ->
						@data['kitPopup']._removeClass '_active_'





			# TABS
			@$el.find("[data-toggle='tabs']").each (index, tabs) ->
				tabs.tabs()


			# # MODALS
			$('.btn-modal-fast').each (index, modal) ->
				modal.modal()

			$('.btn-modal123').each (index, modal) ->
				modal.modal
					beforeactive: ->
						d = $.Deferred()

						setTimeout ->
							d.resolve()
						, 2000

						d.promise()



			# SCROLLSPY
			@$el.find('[data-spy="scroll"]').each (index, scrollspy) ->
				scrollspy.scrollspy
					offset: 100
		, 1
