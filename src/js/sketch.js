const p5 = require('p5');
require('p5.js-svg')(p5);
import '../css/style.scss';
import { noise2D, getRandomSeed } from './helper.js';

const sketch = (p) => {

	const LINES = 60;
	const LINE_SPACING = 4.5;
	const STROKEWIDTH = 2;
	const VERTICAL_STEPS = 8;
	const VERTICAL_STEP_SPACING = 85;
	const CANVAS_PADDING = 40;
	const CANVAS_COLOR = '#fff';
	const NOISE_FACTOR = 50;

	const SEED = getRandomSeed();
	const LINEWIDTH = STROKEWIDTH + LINE_SPACING;


	p.setup = () => {
		const canvasWidth = LINEWIDTH * LINES + CANVAS_PADDING*2;
		const canvasHeight = VERTICAL_STEPS * VERTICAL_STEP_SPACING - VERTICAL_STEP_SPACING + CANVAS_PADDING/2;
		p.createCanvas(canvasWidth, canvasHeight, p.SVG);
		
		p.noFill();
		p.stroke('#000');
		p.strokeWeight(STROKEWIDTH);
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
		for (let x = 0; x <= LINES; x++) {
			p.beginShape();
			for (let y = 0; y <= VERTICAL_STEPS; y++) {
				const u = x / (LINES - 1);
				// const v = y / (VERTICAL_STEPS - 1);
				const v = y / VERTICAL_STEP_SPACING;

				const noise = Math.abs(noise2D(u, v, 1.4, 1.2, SEED) * NOISE_FACTOR);

				const stepX = (x + 1) * LINEWIDTH;
				const stepY = (y - 0.5) * VERTICAL_STEP_SPACING;
				
				p.curveVertex(stepX + noise, stepY + noise);
			}
			p.endShape();
		}
	}
};

new p5(sketch);