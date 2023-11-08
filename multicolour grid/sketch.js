// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global
let rectSize = 30;
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(75);
  strokeWeight(2);
  drawGrid();
}

function getColour(){
  let r = floor(random(255));
  let g = floor(random(255));
  let b = floor(random(255));
  return color(r,g,b);
}
function drawGrid(){
  for(let x = 0; x < width; x+=rectSize){
    for(let y = 0; y < height; y +=rectSize){
      fill(getColour());
      rect(x, y, rectSize, rectSize);
    }
  }

}