/*
 * Creates Turbelence Motion on particles
 * (see http://www.lab4games.net/zz85/blog/2011/09/21/music-colour-particles/)
 *
 * Uses SimplexNoise.js
 */

var perlin = new SimplexNoise();

var Turbulence = function() {
	this.frequency = 1;
	this.octaves = 1;
	this.amplitude = 1000;
	this.evolution = 0;

	Turbulence._turbulenceVel = new THREE.Vector3();
};

Turbulence.prototype.noise = function(x, y, z) {
	var result = 0.0;
	var _frequency = this.frequency;
	var _octaves = this.octaves;
	var _amplitude = this.amplitude;
	var _evolution = this.evolution;

	x *= _frequency;
	y *= _frequency;
	z *= _frequency;
	//var t = _evolution * _frequency;

	var divider = 0;
	var scale = 1;
	for (var i = 0; i < _octaves; i++) {
		result += perlin.noise3d(x,y,z) * scale;
		//result += perlin.noise4d(x,y,z,t) * scale;
		// t *= 2;
		x *= 2;
		y *= 2;
		z *= 2;

		divider += scale;
		scale *= 0.5;
	}
	return _amplitude * Math.pow(result / divider, 3.0);
};

Turbulence.prototype.update = function(emitter, particle, time) {
    var v = particle.velocity;
	var pos = particle.position;
	var turbulenceVel = Turbulence._turbulenceVel;

	turbulenceVel.x =this.noise(pos.x,pos.y,pos.z);
	turbulenceVel.y =this.noise(pos.x,pos.y,pos.z);
	turbulenceVel.z =this.noise(pos.x,pos.y,pos.z);

	turbulenceVel = turbulenceVel.multiplyScalar(time); //  
	pos.addSelf(turbulenceVel);

};