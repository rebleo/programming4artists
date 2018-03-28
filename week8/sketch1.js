// touch
//
let theBackground = 0;
//
function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(theBackground);
  if (touchIsDown) {
    theBackground = 200;
    console.log("this is touching!")
  } else {
    theBackground = 0;
  }
}
// otherwise the display will move around
// with your touch :(
function touchMoved() {
  return false;
}
