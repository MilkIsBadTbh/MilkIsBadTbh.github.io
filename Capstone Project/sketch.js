// Dino Game, Capstone Project
// Terron Adamus
// Dec 11th, 2023
//
// Extra for Experts:
// - Final capstone project replicating the chrome dino game

//  ---------------------------------------------------------
let dinoImages = [];

let ySpeed;
let gravity;
let dino;


function preload(){
  dinoImages.push(loadImage("assets/standing dino.png"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  dino = new Dino(width*0.15, height/1.15);
}

function draw() {
  background(220);
  drawGround();
  dino.move();
  dino.display();
  
}

function drawGround(){
  rectMode(CORNERS);
  rect(0,height,width,height*0.9);
}

function keyPressed(){}
//   if(keyCode === UP_ARROW){
//     dino.velocity.y = -5;
//     //dinoY /=1.2;
//   }
//   else{
//     dino.velocity.y = 5;
//     //dinoY = height/1.15;
//   }
// }

class Dino{
  //constrcutor and class properties
  constructor(x,y){
    this.position = createVector(x,y);  this.s = 20;
    this.velocity = createVector(0, 0);
    this.gravity = createVector(0,0.5);
  }

  move(){
    if(this.position.y+dinoImages[0].height/2 > height*0.9){
      this.gravity.y = 0;
      this.position.y = height*0.9-dinoImages[0].height/2;
      print("line");
    }
    else{
      this.gravity.y = 0.5;
    }

    if(keyIsPressed){
      if(keyCode === UP_ARROW){
        print("up");
        this.velocity.y = -10;
      }
      
    }
    
    
    this.velocity.add(this.gravity);
    //Then apply our velocity to position
    this.position.add(this.velocity);
    //↑ is a MUTATOR method
    
  }

  display(){
    image(dinoImages[0],this.position.x,this.position.y);
  }
}
