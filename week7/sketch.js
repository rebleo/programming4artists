// week 7 - data
// live code from class w/ notes
//
// basic json: http://alpha.editor.p5js.org/
// this is an object - it is also a tiny json
var flower = {
  "name": "sunflower",
  "size": 50,
  "r": 255,
  "g": 300,
  "b": 0
}
let rawData;
let theData = [];
// we use preload to bring data into our program BEFORE the html page loads
function preload() {
  // load our home made data set of flowers!
  rawData = loadJSON('flowers.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //
  console.log(rawData);
  for (var i = 0; i < rawData.theFlowers.length; i++) {
    theData[i] = rawData.theFlowers[i]
  }
}

function draw() {
  background(200);
  // textSize(34);
  // fill the flower with the rgb values from the object
  fill(flower.r, flower.g, flower.b);
  // make the ellipse the size value from the object
  ellipse(100, 100, flower.size, flower.size);
  text(flower.name, 100, 150);
  //
  // llop through theData array + draw an ellipse at 100 pixel with 200 pixels between each item.
  // fill the ellipses teh color from its object in the json
  for (var i = 0; i < theData.length; i++) {
    fill(theData[i].r, theData[i].g, theData[i].b);
    ellipse(100 + 200 * i, 350, theData[i].size, theData[i].size);
  }
}
