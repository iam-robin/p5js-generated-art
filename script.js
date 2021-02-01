const CANVAS_PADDING = 40;
const CANVAS_COLOR = '#fff';

let shapes;
let img;

function preload() {
	img = loadImage('assets/ryuichi-80.jpg');
}
function setup() {
	createCanvas(600, 600, SVG);
	noStroke();
	noLoop();
	fill('#000');
	background(255);
	shapes = ['@', '%', '#', '*', '+', '=', '-', ':', '.', ' '];
	// const letters = "@,$,B,%,8,&,W,M,#,*,o,a,h,k,b,d,p,q,w,m,Z,O,0,Q,L,C,J,U,Y,X,z,c,v,u,n,x,r,j,f,t,/,\,|,(,),1,{,},[,],?,-,_,+,~,<,>,i,!,l,I,;,:,^,`,',., ";
	// shapes = letters.split(",")

	// set canvas padding
	document.getElementById('defaultCanvas').style.padding = CANVAS_PADDING + 'px';
	document.getElementById('defaultCanvas').style.backgroundColor = CANVAS_COLOR;
}

function draw() {
	
	for (let gridX = 0; gridX < img.width; gridX++) {
		for (let gridY = 0; gridY < img.height; gridY++) {
			// grid position + title size
			const titleWidth = width / img.width;
			const titleHeight = height / img.height;
			const posX = titleWidth * gridX;
			const posY = titleHeight * gridY;

			// get current color
			img.loadPixels();
			const c = img.get(min(gridX, img.width - 1), gridY);

			// greyscale conversion
			const greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);
			const gradientToIndex = round(map(greyscale, 0, 255, 0, shapes.length - 1));
			textSize(8);
			text(shapes[gradientToIndex], posX, posY);
		}
	}
}
