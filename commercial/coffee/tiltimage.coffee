class Tiltimage
	
	constructor: (@name) ->


_name = 'tiltimage'
$.fn[_name] = (options_) ->
	@each ->
		unless $.data(this, "kit-" + _name)
			$.data this, "kit-" + _name, new Tiltimage(this, options_)
		else
			if typeof options_ is "object"
				$.data(this, "kit-" + _name)._setOptions options_
			else
				(if typeof options_ is "string" and options_.charAt(0) isnt "_" then $.data(this, "kit-" + _name)[options_] else $.error("What do you want to do?"))
		return


# $.fn[_name] = function( options_ ) {
# 		return this.each(function() {
# 			if( ! $.data( this, 'kit-' + _name ) ) {
# 				$.data( this, 'kit-' + _name, new Affix( this, options_ ) );
# 			}
# 			else {
# 				if( typeof options_ === 'object' )
# 					$.data( this, 'kit-' + _name )._setOptions( options_ )
# 				else
# 				{
# 					typeof options_ === 'string' && options_.charAt(0) !== '_' ? $.data( this, 'kit-' + _name )[ options_ ] : $.error( 'What do you want to do?' );
# 				}
# 			}
# 		});
# 	}