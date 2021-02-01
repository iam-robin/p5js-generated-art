const ITEMSIZE = 40;
const STROKEWIDTH = 8;
const COLUMNS = 8;
const ROWS = 8;
const PADDING = ITEMSIZE * 0.2;
const GRIDBOX = ITEMSIZE + PADDING + STROKEWIDTH;
const START = GRIDBOX / 2;

function setup() {
    const totalX = GRIDBOX * COLUMNS;
    const totalY = GRIDBOX * ROWS;
	createCanvas(totalX, totalY, SVG);
	fill('#F5BB4D');
	stroke(0);
	noLoop();
}

function draw() {

    for (let x = 0; x < COLUMNS; x++) {
        for (let y = 0; y < ROWS; y++) {
            const centerX = START + (x * GRIDBOX);
            const centerY = START + (y * GRIDBOX);

            const leftX = x * GRIDBOX + STROKEWIDTH + PADDING/2;
            const rightX = x * GRIDBOX + ITEMSIZE + STROKEWIDTH + PADDING/2;
            const topY = y * GRIDBOX + STROKEWIDTH + PADDING/2;
            const bottomY = y * GRIDBOX + ITEMSIZE + STROKEWIDTH + PADDING/2;

            strokeWeight(STROKEWIDTH);

            ellipse(centerX, centerY, ITEMSIZE, ITEMSIZE);
        }
    }
}
