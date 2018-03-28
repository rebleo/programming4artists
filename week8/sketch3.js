// this is using a library:
// https://hammerjs.github.io/api/
var theMessage = "swipe";
var theAlbum = [];
let theImage;
let rawData;
let theData = [];

function preload() {
  theAlbum[0] = loadImage('pix/cat.jpg');
  theAlbum[1] = loadImage('pix/earth.png');
  theAlbum[2] = loadImage('pix/moon.png');
  theAlbum[3] = loadImage('pix/sun.png');
  rawData = loadJSON('tv.json');
}

function setup() {
  pixelDensity(1);
  createCanvas(displayWidth, displayHeight);
  theImage = theAlbum[0];
  for (var i = 0; i < rawData.tv_shows.length; i++) {
    theData.push(rawData.tv_shows[i]);
  }
  // console.log(theData);
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
  image(theImage, 0, 0, displayWidth, displayHeight);
  text(theMessage, 50, height / 2);
}

function theSwipe(theEvent) {
  // console.log(event);
  if (theEvent.direction == 4) {
    theImage = theAlbum[0];
    theMessage = "you swiped right";
    console.log(random(theData));
    console.log(random(0, 100));
  } else if (theEvent.direction == 8) {
    theImage = theAlbum[1];
    theMessage = "you swiped up";
  } else if (theEvent.direction == 16) {
    theImage = theAlbum[2];
    theMessage = "you swiped down";
  } else if (theEvent.direction == 2) {
    theImage = theAlbum[3];
    theMessage = "you swiped left";
  }
}
