//
//
let theButton;
let thePortrait;
//
//
function setup() {
  createCanvas(windowWidth, windowHeight);
  // load an image into the program
  thePortrait = loadImage('barf.png');
  //
  // make an HTML ELEMENT BUTTON
  theButton = createButton("the Click!");
  //
  theButton.position(100, 200);
  theButton.mousePressed(myFunction);
  // Skip down to the function
}

function draw() {
  background(200);
  ellipse(120, 100, 100, 100);
}

function myFunction() {
  console.log("click");
}
