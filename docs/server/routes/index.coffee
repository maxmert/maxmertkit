phantom = require("node-phantom")

exports.index = ( req, res, next ) ->
	if typeof (req.query._escaped_fragment_) isnt "undefined"
		phantom.create (err, ph) ->
			return ph.createPage (err, page) ->
				return page.open "http://127.0.0.1:3333/#" + req.query._escaped_fragment_, (err, status) ->
					page.evaluate (->
						document.getElementsByTagName("html")[0].innerHTML
					), (err, result) ->
						res.send result
						ph.exit()
	else
		res.render "index"

