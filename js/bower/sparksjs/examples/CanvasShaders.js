(function(){ 

	/************************
	* Canvas shader programs
	*************************/

	var PI2 = Math.PI * 2;

	var particleShaders = []; 

	var circles = function ( context ) {
		context.beginPath();
		context.arc( 0, 0, 1, 0, PI2, true );
		context.closePath();
		context.fill();
	};

	// circle circum
	var circleLines = function 	( context ) {
		context.lineWidth = 0.1; //0.05
		context.beginPath();
		context.arc( 0, 0, 1, 0, PI2, true );
		context.closePath();
		context.stroke();
	}

	var squares = function ( context ) {
		context.beginPath();
		context.rect( 0, 0, 1, 1 );
		context.closePath();
		context.fill();
	}

	var hearts = function ( context ) {
		context.globalAlpha = 0.5;
		var x = 0, y = 0;
		context.scale(0.1, -0.1);
		context.beginPath();
		context.bezierCurveTo( x + 2.5, y + 2.5, x + 2.0, y, x, y );
		context.bezierCurveTo( x - 3.0, y, x - 3.0, y + 3.5,x - 3.0,y + 3.5 );
		context.bezierCurveTo( x - 3.0, y + 5.5, x - 1.0, y + 7.7, x + 2.5, y + 9.5 );
		context.bezierCurveTo( x + 6.0, y + 7.7, x + 8.0, y + 5.5, x + 8.0, y + 3.5 );
		context.bezierCurveTo( x + 8.0, y + 3.5, x + 8.0, y, x + 5.0, y );
		context.bezierCurveTo( x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5 );
		context.closePath();
		context.fill();
		
		context.lineWidth = 0.05; //0.05
		context.stroke();
	}

	var hexagons = function ( ctx ) {
		var x = y = 0;
		var width = 1, height = 1;
		var dist  = 1;
		var cx  = x * (width + dist) - y * (width + dist) / 2,
         cy  = y * (3/4 * height + dist);

		ctx.beginPath();
	    ctx.moveTo(cx, cy - height/2);
	    ctx.lineTo(cx + width/2, cy - height/4);
	    ctx.lineTo(cx + width/2, cy + height/4);
	    ctx.lineTo(cx, cy + height/2);
	    ctx.lineTo(cx - width/2, cy + height/4);
	    ctx.lineTo(cx - width/2, cy - height/4);
	    ctx.lineTo(cx, cy - height/2);  
	    ctx.fill();
		//context.fill();
		//context.lineWidth = 0.4; //0.05
		//context.stroke();
	}

	var polygons = function(context, sides, radius, fill, stroke)  {
		// drived from http://www.kozlenko.info/blog/2010/11/19/how-to-calulate-polygon-points-for-html5-canvas/
		var delta_theta = 2.0 * Math.PI / sides;
		var theta = 0;

		context.beginPath();

		for (var i = 0, x, y; i < sides; i++ ) {
			x = (radius * Math.cos(theta));
			y = (radius * Math.sin(theta));
			context.lineTo(x, y);

			theta += delta_theta;
		}

		context.closePath();
		if (fill) context.fill();
		if (stroke)  {
			context.lineWidth = 0.5;
			if (fill) context.stroke(); 
		}

	}


	//var star TODO

	var octagons = function(context) {
		return polygons(context, 5, 3, true, true);
	}

	var septagon = function(context) {
		return polygons(context, 8, 3, true, true);
	}

	var random = function(context) {
		var i = Math.floor(Math.random()*particleShaders.length);
		return particleShaders[i];
	}



particleShaders.push(circles);
particleShaders.push(circleLines);
particleShaders.push(squares);
particleShaders.push(hearts);
particleShaders.push(hexagons);
particleShaders.push(octagons);
particleShaders.push(septagon);

SPARKS.CanvasShadersUtils = {};
SPARKS.CanvasShadersUtils.circles = circles;
SPARKS.CanvasShadersUtils.circleLines = circleLines;
SPARKS.CanvasShadersUtils.squares = squares;
SPARKS.CanvasShadersUtils.hearts = hearts;
SPARKS.CanvasShadersUtils.hexagons = hexagons;
SPARKS.CanvasShadersUtils.octagons = octagons;
SPARKS.CanvasShadersUtils.septagon = septagon;
SPARKS.CanvasShadersUtils.random = random;



})(SPARKS);