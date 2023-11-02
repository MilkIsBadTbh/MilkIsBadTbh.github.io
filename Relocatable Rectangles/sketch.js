// Relocatable rectangles
// Terron Adamus
// Sept 27, 2023

// Global variables
let x, y, rHeight, rWidth;
let rLeft, rRight, rTop, rBottom;
let mouseOver = false; // We be hovering over the rectangle??????????????????

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; y = height/2;
  rHeight = 100; rWidth = 200;
}

function updateEdgePositions(){
  rLeft = x - rWidth/2;
  rRight = x + rWidth/2;
  rTop = y - rHeight/2;
  rBottom = y + rHeight/2;
}

function drawRectangle(){
  // Does hella rectangle stuff
  updateEdgePositions();
  print(rLeft + " " + rRight + " " + rTop + " " + rBottom)

  // Are we in the region
  if(mouseX > rLeft && mouseX > rRight && mouseY > rTop && mouseY > rBottom)(
    fill(70,230,130);
    mouseOver = true;
  else(
    fill(30,)
  )
  )
}

function mousePressed(){
  if(mouseOver)(
    pickedUp = true;
  )
}

function mouseRelesed(){
  pickeUp = false;
}


function draw() {
  background(220);
  drawRectangle();
}