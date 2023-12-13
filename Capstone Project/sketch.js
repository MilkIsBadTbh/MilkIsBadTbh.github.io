// Dino Game, Capstone Project
// Terron Adamus
// Dec 11th, 2023
//
// Extra for Experts:
// - Final capstone project replicating the chrome dino game

//  ---------------------------------------------------------

function pp(){
  
}

function preload(){
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawGround();
}

function drawGround(){
  rectMode(CORNERS);
  rect(0,height,width,height*0.9);
}

function drawDino(){

}