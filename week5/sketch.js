// CR video 7.1: What is an array? https://www.youtube.com/watch?v=VIQoUghHSxU
//
//
// Delcalare the array:
let theArray = ["red", "orange", "yellow", "green", "blue", "purple"];
//
// Declare and empty array to add user data
// skip to line 35 for the rest of this...
var theObjects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(theArray);
}

function draw() {
  background(200);
  textSize(36);
  // you have to loop through the list to get to theIndex
  text(theArray, 100, 400);
  for (var theIndex = 0; theIndex < theArray.length; theIndex++) {
    text(theArray[theIndex], 100, theIndex * 50);
  }
  // on line 37 we declare what the Object is.
  // every time the user clicks it adds an object to theObjects array.
  // notice the syntax: .theColor + .theX, .theY
  for (var i = 0; i < theObjects.length; i++) {
    fill(theObjects[i].theColor);
    rect(theObjects[i].theX, theObjects[i].theY, 50, 25);
  }
}
// objects - are data structures, key - value pairs
// this object has 3 keys: theX, theY + theColor
// + their values are mouseX, mouseY + a random gray value
//
// Code + Explaination From: Allsion Parris' Arrays + Objects: https://creative-coding.decontextualize.com/arrays-and-objects/
function mousePressed() {
  // key: value
  theObjects.push({
    theX: mouseX,
    theY: mouseY,
    theColor: random(255)
  });
}
