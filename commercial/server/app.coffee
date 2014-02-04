express = require 'express'
app = express()


exports.startServer = (port, path, callback) ->
	
	app.use express.static "#{__dirname}/../"
	
	app.get '*', (req, res) ->
		res.sendfile "commercial/index.html"

	app.listen port
	console.log "Listening on port: #{port}"