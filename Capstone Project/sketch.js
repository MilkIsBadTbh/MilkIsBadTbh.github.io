// Dino Game, Capstone Project
// Terron Adamus
// Dec 11th, 2023
//
// Extra for Experts:
// - Final capstone project replicating the chrome dino game

//  ---------------------------------------------------------
//let  i = ["assets/standing dino.png"];

function preload(){
  push.loadImage("assets/standing dino.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  drawGround();
  drawDino();
  //dinoStand(width/2,height/2);
}

function drawGround(){
  rectMode(CORNERS);
  rect(0,height,width,height*0.9);
}

function drawDino(){

}