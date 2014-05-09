request = require 'request'
kFormatter = require('../../../../libs/kformatter').kFormatter

exports.shares = ( req, res, next ) ->

    if not req.param('url')?
        next msg: "No URL specified.", status: 400
    else
        request "https://api.facebook.com/method/fql.query?query=select%20%20url,like_count,%20total_count,%20share_count,%20click_count%20from%20link_stat%20where%20url%20=%20%22http://#{req.param('url')}%22&format=json", (error, response, body) ->
            if error?
                next error

            count = { count: kFormatter JSON.parse(body)[0].share_count }
            res.json count
