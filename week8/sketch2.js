// multi touch
//
let theBackground = 100;
let theY = 200;
//
function setup() {
  createCanvas(displayWidth, displayHeight);
  textSize(85);
  fill(255);
}

function draw() {
  background(theBackground);
  // touches is a p5 array that stores the number of finger-tips on the screen
  for (var i = 0; i < touches.length; i++) {
    // console.log(touches[i]);
    text("touching!", touches[i].x, touches[i].y);
  }
}
// otherwise the display will move around
// with your touch :(
function touchMoved() {
  return false;
}
