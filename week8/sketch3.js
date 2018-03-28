// this is using a library:
// https://hammerjs.github.io/api/
var theMessage = "swipe";

function setup() {
  pixelDensity(1);
  createCanvas(displayWidth, displayHeight);
  // set options to prevent default behaviors for swipe, pinch, etc
  var theOptions = {
    preventDefault: true
  };
  // document.body registers gestures anywhere on the page
  var thisHammer = new Hammer(document.body, theOptions);
  thisHammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  });
  thisHammer.on("swipe", theSwipe);
}

function draw() {
  background(0, 160, 0);
  textSize(100);
  fill(255);
  text(theMessage, 50, height / 2);
}

function theSwipe(theEvent) {
  // console.log(event);
  if (theEvent.direction == 4) {
    theMessage = "you swiped right";
  } else if (theEvent.direction == 8) {
    theMessage = "you swiped up";
  } else if (theEvent.direction == 16) {
    theMessage = "you swiped down";
  } else if (theEvent.direction == 2) {
    theMessage = "you swiped left";
  }
}
