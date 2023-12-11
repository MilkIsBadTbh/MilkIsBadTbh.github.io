// Multi Coloured Grid
// Terron Adamus
// Nov 9th, 2023
// 
// Extra for Experts:
// - Creating a Multi Coloured Grid

// --------------------------------------------------

// Global
let rectSize = 30;
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(75);
  strokeWeight(2);
  drawGrid();
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function mousePressed() {
  if (mouseButton === LEFT) { // Checking if left mouse is clicked,-
    rectSize -= 10;           // -If so, make the rectangles smaller
    if (rectSize <= 10){      // Prevents our rectangles from getting too small and crashing the program
      rectSize = 10;
    }

  }
  if (mouseButton === RIGHT) { // Checks if right mouse is clicked,-
    rectSize += 10;            // - if so, makes rectangles larger
  }
  drawGrid();
}

function keyPressed(){        // If any key is pressed, this will randomize the grid colours
  drawGrid();
}



function getColour() {       // Creates a rabdom RGB colour per square
  let r = floor(random(255));
  let g = floor(random(255));
  let b = floor(random(255));
  return color(r, g, b);
}
function drawGrid() {        // Creates the grid by adding onto other rectangles
  for (let x = 0; x < width; x += rectSize) {
    for (let y = 0; y < height; y += rectSize) {
      fill(getColour());
      rect(x, y, rectSize, rectSize);
    }
  }
}