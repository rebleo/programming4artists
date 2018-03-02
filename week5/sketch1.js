var theEarth, theMoon, theSun;
// we can declare an empty array to anticipate future (user) data
var thePix = [];
//
// load image-data into your program
function preload() {
  //
  theEarth = loadImage("pix/earth.png");
  theMoon = loadImage("pix/moon.png");
  theSunImage = loadImage("pix/sun.png");
  //
  // push the images into an array.
  thePix[0] = theEarth;
  thePix[1] = theMoon;
  thePix.push(theSunImage);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(15);
  //
  // first we hardcode
  // theEarth = image(theEarth, 100, 100, 200, 200);
  // theMoon = image(theMoon, 100, 300, 200, 200);
  // theSun = image(theSunImage, 100, 500, 200, 200);
  //
  // 
  // for every item in thePix, draw an image(of that image, at thisX, thisY, thisPixelWidth, thisPixelHeight)
  //
  for (let i = 0; i < thePix.length; i++) {
    for (j = 0; j < windowHeight; j++) {
      image(thePix[i], i * 100, 100 * j, 100, 100);
    }
  }
}
