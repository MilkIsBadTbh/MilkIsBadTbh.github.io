
// Primitive Paint
// Terron
// Sept 14th

//--------------------------------------------------------------

// Global variable
let currentShape = 0; // 0 is circle, 1 is rect, 2 triangle

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {

  rect(5, 25, 50, 50);
}


function keyTyped() {
  if (key === "a") {
    currentShape = 0;

  }
  else if (key === "s") {
    currentShape = 1;

  }
  else if (key === "d"){
    currentShape = 2;
  }
}

function mousePressed(){
  if (currentShape === 0){
    circle(mouseX, mouseY, 20);
  }
  
  else if (currentShape === 1){
    if (currentShape === 1){
      rect(mouseX,mouseY, 30, 40);
    }

    else if (currentShape === 2){
      if (currentShape === 2){
        triangle(mouseX,mouseY, 30, 20, 30, 20);

      }
    }

  }
}
