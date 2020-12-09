const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
 
 
 var hr = hour()
var sec = second()
var min = minute()
function setup() {
  engine = Engine.create();
	world = engine.world;

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr1 = Bodies.rectangle(width/2,height/2,10,10)
  Engine.run(engine);
}

function draw() {

  angleMode(DEGREES)
  background(255,255,255);  
  drawSprites();
  rect(hr1.x,hr1.y,hr1.width,hr1.height)
  
}