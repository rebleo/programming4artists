function setup() {
  createCanvas(windowWidth, windowHeight);
  let theIndex = 10;
  let theIndex2 = 0;
  let theRandom = color(random(255), random(255), random(255));
  // while(theIndex >= 0){
  //   theIndex = theIndex - theIndex;
  // }
  // while (theIndex2 <= 10) {
  // console.log(theIndex2);
  // theIndex2 = theIndex2 + 1;
}

function draw() {
  background(200);
  noStroke();
  fill(0);
  for (var theIndex = 0; theIndex < 3; theIndex++) {
    ellipse(theIndex * 20, 100, 35, 35);
  }
  for (var theIndex = 0; theIndex < 30; theIndex++) {
    ellipse(theIndex * 20, 200, 35, 35);
  }
  //
  // for (let i = 0; i < windowWidth; i++){
  //   for (let j = 0; j < windowHeight; j++){
  //     line(50 * i, 0, 50 * i, windowHeight);
  //     line(0, 50* j, windowWidth, 50 * j);
  //   }
  //
  // }
}
