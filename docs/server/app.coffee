errorHandler = require './libs/errorHandler'
routes = require './routes'
api = require './routes/api/0.1'
express = require 'express'
app = express()

app.configure ->
	app.set('port', process.env.PORT or 3333)
	app.set 'view engine', 'html'
	app.use express.static "#{__dirname}/../"
	app.set 'views', "#{__dirname}/views"
	app.engine 'html', require('hogan-express')
	app.use errorHandler
	app.locals.kit = JSON.stringify require('../../package.json')



app.get /^((?!\/api).)*$/, routes.index

app.get "/api/01/social/twitter/shares", api.social.twitter.shares
app.get "/api/01/social/facebook/shares", api.social.facebook.shares

app.get "/api/01/social/github/watch", api.social.github.watch
app.get "/api/01/social/github/contribute", api.social.github.contribute


app.listen app.get 'port'

console.log "Listening on port: #{app.get 'port'}"
