// touch
//
let theBackground = 0;
let theMessage = "touch";
let theY = 200;
//
function setup() {
  createCanvas(displayWidth, displayHeight);
  textSize(85);
  fill(255);
}

function draw() {
  background(theBackground);
  if (touchIsDown) {
    theBackground = 200;
    console.log("this is touching!");
    theMessage = "this is touching";
  } else {
    theMessage = theMessage;
    theBackground = 0;
  }
  text(theMessage, 50, theY);
}

function touchEnded() {
  theMessage = "that was touching";
  theY = windowHeight - 100;
}
// otherwise the display will move around
// with your touch :(
function touchMoved() {
  return false;
}
