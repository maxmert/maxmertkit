request = require 'request'
kFormatter = require('../../../../libs/kformatter').kFormatter

exports.shares = ( req, res, next ) ->

    if not req.param('url')?
        next msg: "No URL specified.", status: 400
    else
        request "http://urls.api.twitter.com/1/urls/count.json?url=#{req.param('url')}", (error, response, body) ->
        	if error?
                next error

            count = { count: kFormatter JSON.parse(body).count }
            res.json count
