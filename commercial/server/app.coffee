express = require 'express'
app = express()


port = 3334

	
app.use express.static "#{__dirname}/../"

app.get '/', (req, res) ->
	res.sendfile "server/views/index.html"


app.get '/widgets/wall', (req, res) ->
	res.sendfile "server/views/widgets/wall.html"


app.get '/blog', (req, res) ->
	res.sendfile "server/views/examples/blog.html"

app.listen port
console.log "Listening on port: #{port}"