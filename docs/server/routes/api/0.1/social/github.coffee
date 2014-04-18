request = require 'request'
kFormatter = require('../../../../libs/kformatter').kFormatter

exports.watch = ( req, res, next ) ->

    if not req.param('owner')? or not req.param('repo')?
        next msg: "No OWNER or REPO specified.", status: 400
    else

        options =
            url: "https://api.github.com/repos/#{req.param('owner')}/#{req.param('repo')}",
            headers:
                'User-Agent': 'request'
        request options,
            (error, response, body) ->
                if error?
                    next error

                parsedBody = JSON.parse(body)


                result =
                    count: if not parsedBody.watchers? then " " else kFormatter parsedBody.watchers
                    body: parsedBody

                res.json result


exports.contribute = ( req, res, next ) ->

    if not req.param('owner')? or not req.param('repo')?
        next msg: "No OWNER or REPO specified.", status: 400
    else

        options =
            url: "https://api.github.com/repos/#{req.param('owner')}/#{req.param('repo')}/contributors",
            headers:
                'User-Agent': 'request'
        request options,
            (error, response, body) ->
                if error?
                    next error

                parsedBody = JSON.parse(body)

                result =
                    count: if not parsedBody.length? then " " else kFormatter parsedBody.length
                    body: parsedBody
                res.json result
