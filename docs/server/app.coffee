express = require 'express'
app = express()

port = 3333



app.use express.static "#{__dirname}/../"

app.get '*', (req, res) ->
	res.sendfile "docs/index.html"

app.listen port
console.log "Listening on port: #{port}"