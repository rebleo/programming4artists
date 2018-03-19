var x = 0;
var speed = 3;
var y = 0;
var checkbox;
var theBackground;

function setup() {
  createCanvas(600, 400);
  theBackground = color(255, 204, 0);
  checkbox = createCheckbox('clicky click', false);
  checkbox.changed(myCheckedEvent);
}

function myCheckedEvent() {
  if (this.checked()) {
    theBackground = color(255, 0, 0);
  } else {
    theBackground = color(255, 204, 0);
  }
}

function draw() {
  // background(255, 204, 0);
  background(theBackground);
  stroke(8, 1, 177);
  strokeWeight(4);
  noFill();
  //
  for (var i = 0; i < random(10, 50); i++) {
    ellipse(i * x, i * y, 100, 100);
  }
  if (x > width || x < 0 && y > height - 100 || y < 0) { //if x goes to the screen width or
    //it goes to the left edge (where it would be less than 0)...
    speed = speed * -1 //reverse the direction of the speed
  }
  x = x + speed;
  y = y + speed;
}
