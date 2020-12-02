let img;

function preload() {
	img = loadImage('assets/ryuichi-80.jpg');
}

function setup() {
	createCanvas(600, 600, SVG);
	print(img.width + ' • ' + img.height);
}

function draw() {
	background(255);

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
			let l3 = map(greyscale, 0, 255, 30, 0.1);
			// l3 *= mouseXFactor;
			l3 *= 0.3;
			stroke(0);
			strokeWeight(1);
			line(posX, posY, posX + l3, posY + l3);
		}
	}
}
