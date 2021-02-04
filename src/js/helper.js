const SimplexNoise = require('simplex-noise');

export function getRandomSeed() {
	var seed = String(Math.floor(Math.random() * 1000000));
	return seed;
}

export function noise2D(x, y, frequency, amplitude, seed) {
	const noiseGenerator = new SimplexNoise(seed);
	return amplitude * noiseGenerator.noise2D(x * frequency, y * frequency);
}