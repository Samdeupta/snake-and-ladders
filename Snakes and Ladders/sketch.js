// game basic elements
var gameState = 0;
var playerCount = 0;
var turn;
var database;

//player elements
var allPlayers,player;
var index,PlayerIndex;
var block;
var turn1,turn2; 

//board
var board,boardImg;
var backgroundImg;

//sub functoin variables
var inputWindow,optionWindow,game;

//charecters
var red,blue,green,yellow;


function preload(){
  //board and background image
  boardImg = loadImage('images/Board.png');
  backgroundImg = loadImage('images/background.png');
  
  //peices images

}


function setup() {
  //canvas creation and database initialization
  createCanvas(displayWidth,displayHeight-111);
  database = firebase.database();

  //game class initialization
  game = new Game();
  game.getState();
  game.start();

  //board creation
  board = createSprite(displayWidth/2,(displayHeight-111)/2);
  board.addImage(boardImg);
  board.scale = (displayWidth/displayHeight)/1.4;
  board.visible = false;
  

  
  

}

function draw() {
  background(backgroundImg);

  //console.log("X",mouseX);
  game.playUpdate();
  //console.log("Y",mouseY);
  
 
  //update gamestate
  if(playerCount === 2){
    game.update(1);
  }

  //start game
  if(gameState === 1){
    //inputWindow.destroy();

    board.visible = true;

    optionWindow = new OptionWindow();
    optionWindow.display();
    optionWindow.button();
    
  }

  
  drawSprites();
}