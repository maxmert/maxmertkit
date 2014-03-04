express = require 'express'
app = express()


port = 3334

	
app.use express.static "#{__dirname}/../"

app.get '*', (req, res) ->
	res.sendfile "server/index.html"

app.listen port
console.log "Listening on port: #{port}"