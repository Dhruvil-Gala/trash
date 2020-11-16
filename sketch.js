
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground,paper;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	box1=new Box(600,650,150,20);
	box2 = new Box(525,620,20,80);
	box3 = new Box(675,620,20,80);
	paper=new radius(200,600,20);
	ground = new Box(400,670,800,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();

  keypressed();

  drawSprites();
 
}


function keypressed(){
	if (keyCode === up){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
