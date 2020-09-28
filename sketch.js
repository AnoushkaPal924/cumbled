
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world ;
function setup() {
	createCanvas(800, 700);
  engine = Engine.create();

	//engine = Engine. create        ();
	world = engine.world;

	ground2 = new Ground();
    paper1 = new Paper();
    
	//Engine.run(engine);
  
}


function draw() {

  background(0);

 

  ground2.display();
  paper1.display();

  drawSprites();
 
}



