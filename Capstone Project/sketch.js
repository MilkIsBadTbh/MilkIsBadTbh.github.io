// Dino Game, Capstone Project
// Terron Adamus
// Dec 11th, 2023
//
// Extra for Experts:
// - Final capstone project replicating the chrome dino game

//  ---------------------------------------------------------
let dinoImages = [];

let dinoY;
let dinoX;


function preload(){
  dinoImages.push(loadImage("assets/standing dino.png"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  dinoY = height/1.15;
  dinoX = width*0.15;
}

function draw() {
  background(220);
  drawGround();
  //dinoStand(width/2,height/2);
 
  image(dinoImages[0],dinoX,dinoY);
}

function drawGround(){
  rectMode(CORNERS);
  rect(0,height,width,height*0.9);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    dinoY /=1.5;
  }
  else{
    dinoY = height/1.15;
  }
}