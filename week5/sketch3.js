// the bouncing balls
///
///
// this is an empty array
var theBalls = [];
////
/// this is a constructor function
// https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)
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
  //
  this.makeBall = function() {
    // noStroke();
    fill(this.r, this.g, this.b, this.z);
    ellipse(this.x, this.y, this.size, this.size);
    this.x = this.x + this.xDirection;
    this.y = this.y + this.yDirection;
    if (this.x > windowWidth - this.size / 2 || this.x < this.size / 2) {
      this.xDirection = this.xDirection * -1;
    }
    if (this.y >= windowHeight - this.size || this.y <= this.size / 2) {
      this.yDirection = this.yDirection * -1;
    }
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  theRedBall = new theBall(random(windowWidth), random(windowHeight), 100, 200, 0, 0, 175);
  theYellowBall = new theBall(random(windowWidth), random(windowHeight), 100, 255, 255, 0, 175);
  theBlueBall = new theBall(random(windowWidth), random(windowHeight), 100, 0, 0, 200, 175);
  //
  //
  //
  //
  // let's get fancy
}

function mousePressed() {
  //   var thisBall = new theBall(random(windowWidth), random(windowHeight), 100);
  //   theBalls.push(thisBall);
}

function draw() {
  background(255);
  theRedBall.makeBall();
  theYellowBall.makeBall();
  theBlueBall.makeBall();
}
