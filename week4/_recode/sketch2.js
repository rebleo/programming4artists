// http://recodeproject.com/translation/nick-santaniello-direct-untitled-1-various
/*
Part of the ReCode Project (http://recodeproject.com)
Based on "Untitled 1" by Various (Reiner Schneeberger and unnamed students)
Originally published in "Computer Graphics and Art" vol1 no4 pg 28
Copyright (c) 2012 Nick Santaniello - OSI/MIT license (http://recodeproject/license).
*/
let cols = 11;
let rows = 10;
let offsetX;
let offsetY;
let sqSize = 100;
let sizeDifference = 17;

function setup() {
  createCanvas(1000, 1000);
  offsetX = random(-6, 6);
  offsetY = random(-6, 6);
  rectMode(CENTER);
  strokeWeight(2);
  fill(240);
  //for every row...
  for (let r = 0; r < rows; r++) {
    //for every column...
    for (let c = 0; c < cols; c++) {
      //choose a new offset
      offsetX = random(-7, 7);
      offsetY = random(-7, 7);
      rect(c * sqSize, r * sqSize, sqSize, sqSize);
      for (let i = 1; i < 6; i++) {
        rect((c * sqSize) + (i * offsetX), (r * sqSize) + (i * offsetY), sqSize - (i * sizeDifference), sqSize - (i * sizeDifference));
      }
    }
  }
}

function draw() {}
