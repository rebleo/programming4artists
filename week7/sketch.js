// week 7 - data
// basic json: http://alpha.editor.p5js.org/
// this is an object - it is also a tiny json
var flower = {
  "name": "sunflower",
  "size": 50,
  "r": 255,
  "g": 200,
  "b": 0
}

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //
}

function draw() {
  background(200);
  textSize(64);
  fill(flower.r, flower.g, flower.b);
  ellipse(100, 100, flower.size, flower.size);
  text(flower.name, 100, 150);
  //
  //
}
