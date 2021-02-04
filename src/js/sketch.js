const p5 = require('p5');
require('p5.js-svg')(p5);
import '../css/style.scss';
import { noise2D, getRandomSeed } from './helper.js';

const sketch = (p) => {

	const ITEMSIZE = 6;
	const STROKEWIDTH = 0;
	const COLUMNS = 40;
	const ROWS = 60;
	const PADDING = ITEMSIZE * 0.05;
	const CANVAS_PADDING = 40;
	const CANVAS_COLOR = '#44413F';
	const SEED = getRandomSeed();

	const GRIDBOX = ITEMSIZE + PADDING + STROKEWIDTH;
	const START = GRIDBOX / 2;

	p.setup = () => {
		const totalX = GRIDBOX * COLUMNS;
		const totalY = GRIDBOX * ROWS;
		p.createCanvas(totalX + CANVAS_PADDING, totalY + CANVAS_PADDING, p.SVG);
		
		p.fill('#fff');
		p.stroke(0);
		p.noLoop();
		
		console.log('SEED: ', SEED);  
		// add button events
		document.querySelector('.export__svg').addEventListener('click', () => p.save(SEED + '.svg'));
		document.querySelector('.export__png').addEventListener('click', () => p.save(SEED + 'canvas.png'));
		// add canvas styles
		document.getElementById('defaultCanvas').style.padding = CANVAS_PADDING + 'px';
		document.getElementById('defaultCanvas').style.backgroundColor = CANVAS_COLOR;
	}

	p.draw = () => {
		for (let x = 0; x < COLUMNS; x++) {
			for (let y = 0; y < ROWS; y++) {
				const u = x / (COLUMNS - 1);
				const v = y / (ROWS - 1);

				const noiseSize = Math.abs(noise2D(u, v, 1, 1, SEED));
				const size = ITEMSIZE/1.5 * noiseSize + ITEMSIZE/3;

				const noiseTransform = Math.abs(noise2D(u, v, 1, 1, SEED)) * 30;

				const centerX = START + x * GRIDBOX;
				const centerY = START + y * GRIDBOX;

				p.strokeWeight(STROKEWIDTH);
				p.ellipse(
					centerX + noiseTransform,
					centerY + noiseTransform,
					size,
					size
				);
			}
		}
	}
};

new p5(sketch);