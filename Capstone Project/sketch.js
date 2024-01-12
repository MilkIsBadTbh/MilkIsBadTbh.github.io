// Dino Game, Capstone Project
// Terron Adamus
// Dec 11th, 2023
//
// Extra for Experts:
// - Final capstone project replicating the chrome dino game

//  ---------------------------------------------------------

let dinoImages = [];
let cactiImages = [];
let currentImage = 0;
let cactiSpeed = 8;
let stayinAlive = true;

let ySpeed;
let gravity;
let dino;
let cactus1;


function preload() {
  dinoImages.push(loadImage("assets/standing dino.png"));
  dinoImages.push(loadImage("assets/left foot up dino.png"));
  dinoImages.push(loadImage("assets/right foot up dino.png"));
  dinoImages.push(loadImage("assets/dead dino.png"));
  cactiImages.push(loadImage("assets/cactus1.png"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  dino = new Dino(width * 0.15, height / 1.15);
  cactus1 = new Cacti(width, height / 1.135);
}

function draw() {
  background(220);
  drawGround();

  dino.display();
  cactus1.display();

  collision();
  if (stayinAlive === true) {
    dino.move();
    cactus1.move();
  }
  else {

  }
}

function drawGround() {
  rectMode(CORNERS);
  rect(0, height, width, height * 0.9);
}


class Dino {
  //constrcutor and class properties
  constructor(x, y) {
    this.position = createVector(x, y); this.s = 20;
    this.velocity = createVector(0, 0);
    this.gravity = createVector(0, 0.5);
    this.jumping = false;
  }


  move() {
    this.velocity.add(this.gravity);
    //Then apply our velocity to position
    this.position.add(this.velocity);
    //↑ is a MUTATOR method
    if (this.position.y + dinoImages[0].height / 2 > height * 0.92) {
      // this.gravity.y = 0;
      this.position.y = height * 0.92 - dinoImages[0].height / 2;
      this.jumping = false;

    }

    if (keyIsPressed) {
      if (keyCode === UP_ARROW && this.jumping === false) {
        print("up");
        this.velocity.y = -13;
        this.jumping = true;
      }
      //else currentImage = 0;

    }
  }
  display() {
    print(currentImage);
    if (stayinAlive === true) {
      if (this.jumping === true) {
        currentImage = 0;
      }
      else {
        if (currentImage === 0) { currentImage = 1; }

        if (frameCount % 10 === 0) {
          if (currentImage === 1) {
            currentImage = 2;
          }
          else {
            currentImage = 1;
          }
        }

      }


    }

    image(dinoImages[currentImage], this.position.x, this.position.y);
    //print(this.position.y);
  }
}
class Cacti {
  constructor(x, y) {
    this.position = createVector(x, y); this.s = 20;
  }
  display() {
    image(cactiImages[0], this.position.x, this.position.y);
  }
  move() {
    this.position.x -= cactiSpeed;
    if (this.position.x < 30) {
      this.position.x = width;
    }
  }
}

function collision() {
  if (dist(dino.position.x, dino.position.y, cactus1.position.x, cactus1.position.y) < 100) {
    print("collide!");
    currentImage = 3;
    stayinAlive = false;
  }
}