var theMessage = "swipe";

function setup() {
  pixelDensity(1);
  createCanvas(displayWidth, displayHeight);
  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };
  // document.body registers gestures anywhere on the page
  var thisHammer = new Hammer(document.body, options);
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

function theSwipe(event) {
  // console.log(event);
  if (event.direction == 4) {
    theMessage = "you swiped right";
  } else if (event.direction == 8) {
    theMessage = "you swiped up";
  } else if (event.direction == 16) {
    theMessage = "you swiped down";
  } else if (event.direction == 2) {
    theMessage = "you swiped left";
  }
}
