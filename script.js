let img;
const IMAGE_SIZE_FACTOR = 5;
const LINE_LENGTH_FACTOR = 0.6;
const STROKE_WEIGHT = 1;

function preload() {
	img = loadImage('assets/architecture/13-120x180.jpg');
}

function setup() {
	const canvasWidth = IMAGE_SIZE_FACTOR * img.width;
	const canvasHeight = IMAGE_SIZE_FACTOR * img.height;

	createCanvas(canvasWidth, canvasHeight, SVG);
	noLoop();
	stroke(0);
	strokeWeight(STROKE_WEIGHT);
	background(255);

	print('image size: ' + img.width + ' x ' + img.height);
}

function draw() {

	for (let gridX = 0; gridX < img.width; gridX++) {
		for (let gridY = 0; gridY < img.height; gridY++) {
			// grid position + tile size
			const tileWidth = width / img.width;
			const tileHeight = height / img.height;
			const posX = tileWidth * gridX;
			const posY = tileHeight * gridY;

			// get current color
			img.loadPixels();
			const c = color(img.get(gridX, gridY));

			// greyscale conversion
			const greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);
			// greyscale to line length
			let lineLength = map(greyscale, 0, 255, 10, 0);

			// adjust line lengths
			lineLength *= LINE_LENGTH_FACTOR;
			line(posX, posY, posX + lineLength, posY + lineLength);
		}
	}
}
