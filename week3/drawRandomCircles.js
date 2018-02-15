// code from p5 example: http://alpha.editor.p5js.org/projects/HJg8jfcT3
// and http://alpha.editor.p5js.org/projects/r1JeQqa3
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
}

function draw() {
  let theX = random(width);
  let theY = random(height);
  let theDiameter = random(10, 100);
  let theRed = random(255);
  var theGreen = random(255);
  var theBlue = random(255);
  let theAlpha = random(100, 255);
  fill(theRed, theGreen, theBlue, theAlpha);
  ellipse(theX, theY, theDiameter, theDiameter);
}
