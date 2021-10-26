const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var computerArrow,playerArrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  ComputerArcher = new computerArcher(
    width - 285,
    computerBase.body.position.y - 195,
    120,
    120,
    90
  );

  
  //Create an arrow Object
  computerArrow = new ComputerArrow(
    ComputerArcher.body.x,
    ComputerArcher.body.y,
    70,
    7,
    ComputerArcher.angle
  )
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  //playerArcher.display();
  ComputerArcher.display();


  //Display arrow();
  computerArrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
     computerArrow.shoot(ComputerArcher.angle);
  }
   //Create an arrow Object
   //ComputerArcher.display();
   //computerArrow.x = ComputerArcher.x;
   //computerArrow.y = ComputerArcher.y;
   
}