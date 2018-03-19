// week 7 - data
// live code from class w/ notes
//
let rawArts;
let theArts = [];
let thePoem;
// we use preload to bring data into our program BEFORE the html page loads
function preload() {
  // load a list of art "isms" from Darius Kazemi's Corpora project // https://github.com/dariusk/corpora/blob/master/data/art/isms.json
  rawArts = loadJSON('arts.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //
  // typeof [variable] - will tell us what kind of thing the variable is
  console.log(rawArts);
  for (var i = 0; i < rawArts.isms.length; i++) {
    theArts[i] = rawArts.isms[i]
  }
  //
  // [array].length - will tell us how many items are in the array
  // console.log(theArts.length);
  //
  // GENERATIVE POETRY!!
  //
  // create a variable that stores string from a randomly choses word from theArts array + "this other string we wrote" + another random word
  thePoem = random(theArts) + " is derivative of " + random(theArts);
}

function draw() {
  background(200);
  // GENERATIVE POETRY -- is different every time you reload the page
  push();
  textSize(60);
  text(thePoem, 20, windowWidth);
  pop();
}
