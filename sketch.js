var database;
var voterCount=0;

var State=0;

var form,voter,questions;


function setup(){
  database = firebase.database();
  createCanvas(500,500);

  questions=new Questions();
  questions.getState();
  questions.start();
}

function draw(){
  background("white");
  
  drawSprites();
  
}


