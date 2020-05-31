var database;
var playerCount=0;

var gameState=0;

var form,player,game;


function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game=new Game();
  game.getState();
  game.start();

  /*hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);*/
}

function draw(){
  background("white");
  
  drawSprites();
  
}


