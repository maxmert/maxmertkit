# CollectionViewMenu = require( '../../collectionviews/sidebar/menu' ).module
# CollectionViewContent = require( '../../collectionviews/content' ).module

# ViewSocial = require( '../../views/pages/social' )


exports.blog = Marionette.Layout.extend

	model: new Backbone.Model kit

	template: $.app.templates.examples.blog

	regions:
		sidebar: '#sidebar'
		content: '#content'
		socialContribute: '#social-contribute'


	onRender: ->

		setTimeout =>
			$('[data-kind="wall"]').each (index, wall) ->
				wall.wall()

			$('[data-spy="scrollspy"]').each (index, scrollspy) ->
				scrollspy.scrollspy( offset: "50%" )
		, 1