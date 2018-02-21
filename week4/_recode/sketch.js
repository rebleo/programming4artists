// http://recodeproject.com/translation/genevieve-hoffman-direct-untitled-2-aaron-marcus
/*
Part of the ReCode Project (http://recodeproject.com)
Based on "Untitled 2" by Aaron Marcus
Originally published in "Computer Graphics and Art" vol3 no2, 1978
Copyright (c) 2012 Genevieve Hoffman - OSI/MIT license (http://recodeproject/license).
*/
// "Untitled photoprlet", 15" x 19"
// Other works in the Hieroglyphs series are "Noise Barrier", and various "Untitled" works.
function setup() {
  createCanvas(800, 800);
  background(0);
  let gridSize = width / 10;
  for (let x = gridSize; x <= width; x += gridSize) {
    for (let y = gridSize; y <= height; y += gridSize) {
      //make grid
      stroke(255);
      smooth();
      line(x, 0, x, height);
      line(x - gridSize, y, width, y);
      //generate random seed values for location and size
      let randLoc = random(-gridSize / 2, gridSize / 2);
      let randLoc2 = random(-gridSize / 2, gridSize / 2);
      let randLoc3 = random(-gridSize / 2, gridSize / 2);
      let randLoc4 = random(-gridSize / 2, gridSize / 2);
      let randLoc5 = random(-gridSize / 2, gridSize / 2);
      let randLoc6 = random(-gridSize / 2, gridSize / 2);
      let randLoc7 = random(-gridSize / 2, gridSize / 2);
      let randLoc8 = random(-gridSize / 2, gridSize / 2);
      let circSize = random(0, gridSize - 10);
      let sqSize = random(0, (gridSize - 10) / 2);
      //draw circles
      noFill();
      ellipse(x + randLoc, y + randLoc2, circSize, circSize);
      //draw squares
      push();
      translate(x + randLoc3, y + randLoc4);
      rotate(random(TWO_PI));
      rect(0, 0, sqSize, sqSize);
      pop();
      //draw lines
      push();
      translate(x + randLoc5, y + randLoc6);
      rotate(random(TWO_PI));
      line(0, 0, randLoc7, randLoc8);
      pop();
    }
  }
}

function draw() {}
// function keyPressed() {
//   saveCanvas("Aaron_Marcus_Untitled2_###.jpg");
// }
