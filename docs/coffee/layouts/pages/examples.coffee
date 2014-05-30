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
		, 1

		setTimeout =>
			$('[data-spy="scrollspy"]').each (index, scrollspy) ->
				scrollspy.scrollspy( offset: "50%" )

			$('[data-spy="skyline"]').each (index, skyline) ->
				skyline.skyline
					delay: ->
						2000 * Math.random()
		, 500

	onBeforeClose: ->
		$('[data-kind="wall"]').each (index, wall) ->
			wall.data['kitWall'].destroy()

		$('[data-spy="scrollspy"]').each (index, spy) ->
			spy.data['kitScrollspy'].destroy()

		$('[data-spy="skyline"]').each (index, sky) ->
			sky.data['kitSkyline'].destroy()