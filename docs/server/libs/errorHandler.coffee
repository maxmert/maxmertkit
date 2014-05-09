error = ( err, req, res, next ) ->

	if req.xhr

		res.status err.status
		res.json(err)

	else

		res.render 'error',
			title: 'Error'
			error: err


exports = module.exports = error
