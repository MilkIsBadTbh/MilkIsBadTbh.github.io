// Random Squares
// Terron Adamus
// Oct 5
//
// Making a random terrain with squares

// Global Variables
let noiseReduction = 1;

let rectWidth = 3;

const noiseShift = 0.03;

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  generateTerr();       //temp...?
}


function generateTerr(){
  let tallest = 0;
  let tallestX = 0;
  for (let x = 0; x<width; x+=rectWidth){

    let sectionHeight = random(0, height);
    sectionHeight = noise(noiseReduction);
    sectionHeight = map(sectionHeight,0,1,0, height * 0.6);
    noiseReduction += noiseShift;
    rect(x, height, x+ rectWidth, height - sectionHeight);
    if(sectionHeight > tallest){
      tallest = sectionHeight;
      tallestX = x;
    }
  }
  drawFlag(tallestX, height - tallest);
}

function draw() {
  background(150);
  noiseReduction = 1;
  generateTerr();
}

function keyPressed(){
  background(150);
  generateTerr();
  //drawFlag(100,100);
}

function drawFlag(x,y){
  line(x,y,x,y-30);
  triangle(x , y - 30, x+ 30, y- 10, x, y -10);
  fill(20, 20, 60);
}