// http://recodeproject.com/translation/chris-allick-direct-detail-from-tapestry-jean-claude-marquette
/*
Part of the ReCode Project (http://recodeproject.com)
Based on "Detail from Tapestry" by Jean Claude Marquette
Originally published in "Computer Graphics and Art" vol1 no2, 1976
Copyright (c) 2012 Chris Allick - OSI/MIT license (http://recodeproject/license).
*/
let pGraphic;

function setup() {
  createCanvas(416, 500);
  fill(0);
  noStroke();
  pGraphic = createGraphics(416, 500);
  rotate(-0.01);
  drawSquares();
}

function draw() {}
// the author wrote this function
function drawSquares() {
  background(240);
  pGraphic.background(240);
  for (let r = 2; r < 15; r++) {
    for (let c = 0; c < 28; c++) {
      let rand = round(random(0, 1));
      pGraphic.noStroke();
      if (rand == 1) {
        pGraphic.fill(63);
      } else {
        pGraphic.noFill();
      }
      pGraphic.rect(r * 26, c * 26, 26, 26);
    }
  }
  image(pGraphic, 0, 0);
}

function mousePressed() {
  rotate(-0.01);
  drawSquares();
}
