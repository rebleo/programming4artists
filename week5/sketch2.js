function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  //
  // first we hardcode
  // theFace(250, 200);
  // theFace(350, 450);
  // theFace(100, 200);
  //
  // then we automate
  for (var i = 0; i < windowWidth; i++) {
    for (var j = 0; j < windowHeight; j++) {
      // here we call the function we wrote below
      theFace(i * 100, j * 200);
    }
  }
}

function draw() {
  // frameRate(1);
}
// this function is also an object
//
// theX + the Y are declared in setup when we draw the grid of faces
//
function theFace(theX, theY) {
  this.x = theX;
  this.y = theY;
  stroke(0);
  noFill();
  // randomize the size of the face
  let theDiameter = random(25, 150);
  //
  // a face a circle
  // here we draw an ellipse
  ellipse(this.x, this.y, theDiameter, theDiameter);
  //
  //
  // for the eyes - relative to the circle
  //
  fill(0);
  ellipse(this.x - theDiameter / 10, this.y - theDiameter / 10, theDiameter / 10, theDiameter / 10);
  ellipse(this.x + theDiameter / 10, this.y - theDiameter / 10, theDiameter / 10, theDiameter / 10);
}
