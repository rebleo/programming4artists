let theX = 100;
let theY = 200;
let theUser = false;
let theCanvas = (200, 160, 200);
// let rad = 25;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(theCanvas);
  fill(255, 0, 0, 50);
  rect(75, 100, 50, 50);
  triangle(50, 300, 100, 250, 150, 300);
  push()
  translate(width / 2, height / 2);
  rotate(.5);
  rect(150, 150, 300, 30);
  pop();
  ellipse(theX, theY, 50, 50);
  if (keyCode === 32) {
    theUser = true;
    // console.log('here!')
  }
  // console.log(theUser)
}
// EVENT FUNCTIONS
// if the user pressed RIGHT_ARROW - the ellipse will go to the edge of the window
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    theX = windowWidth;
  } else if (keyCode === LEFT_ARROW) {
    theX = 0
  }
}
// if the user has pushed the spacebar and moves the mouse, the ellipse's X value will be that of the mouse
function mouseMoved() {
  if (theUser == true && keyCode === 32) {
    theX = mouseX;
  }
}
