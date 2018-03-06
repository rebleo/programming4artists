// the bouncing balls
///
///
// this is an empty array
var theBalls = [];
////
/// this is a constructor function
// https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)
// create an object at theX, theY, make it theSize in Pixels, and r, g, b, alpha values.
function theBall(theX, theY, theSize, theRed, theGreen, theBlue, theAlpha) {
  this.x = theX;
  this.y = theY;
  this.size = theSize;
  this.r = theRed;
  this.g = theGreen;
  this.b = theBlue;
  // this the alpha value
  this.z = theAlpha;
  ///
  this.xDirection = 2;
  this.yDirection = 3;
  // this is whre we display or draw the ellipse to the canvas.
  this.makeBall = function() {
    // noStroke();
    fill(this.r, this.g, this.b, this.z);
    ellipse(this.x, this.y, this.size, this.size);
    this.x = this.x + this.xDirection;
    this.y = this.y + this.yDirection;
    if (this.x > windowWidth - this.size / 2 || this.x < this.size / 2) {
      this.xDirection = this.xDirection * -1;
    }
    if (this.y > windowHeight - this.size / 2 || this.y < this.size / 2) {
      this.yDirection = this.yDirection * -1;
    }
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // here is where we make the object - it exists, but we can not see it.
  theRedBall = new theBall(random(windowWidth), random(windowHeight), 100, 200, 0, 0, 175);
  theYellowBall = new theBall(random(windowWidth), random(windowHeight), 100, 255, 255, 0, 175);
  theBlueBall = new theBall(random(windowWidth), random(windowHeight), 100, 0, 0, 200, 175);
  //
}

function mousePressed() {
  var thisBall = new theBall(mouseX, mouseY, random(10, 100), random(255), random(255), random(255), random(50, 255));
  theBalls.push(thisBall);
}

function draw() {
  background(255);
  // here is where we call the DISPLAY funciton - draw it to the canvas
  theRedBall.makeBall();
  theYellowBall.makeBall();
  theBlueBall.makeBall();
  for (var i = 0; i < theBalls.length; i++) {
    theBalls[i].makeBall();
  }
}
