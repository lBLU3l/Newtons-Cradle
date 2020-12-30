
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, b1, b2, b3, b4, b5, r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	canvas.shapeColor = "white"


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400,100,600,30);
	roof.shapeColor = "white";

	b1 = new Bob(400,500,100,100)
	b2 = new Bob(300,500,100,100)
	b3 = new Bob(200,500,100,100)
	b4 = new Bob(500,500,100,100)
	b5 = new Bob(600,500,100,100)

	r1 = new Rope(b1.body,roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  drawSprites();
 
}



