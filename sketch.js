var packageBody, ground, helicopter, package;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	//engine controls the world 
	engine = Engine.create();
	world = engine.world;
	
    //Create a Ground
	ground = new Ground();

	//create the drop zone
	box1 = new DropBox(300,610,20,100);
	box2 = new DropBox(520,610,20,100);
	box3 = new DropBox(410,650,200,20); 

	//create the helicopter
	helicopter = new Helicopter();

	//create package
	package = new Box();

	Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  background(0);
  
  //update engine
  Engine.update(engine);
  
  //display all the stuff
  package.display();

  box1.display();
  box2.display();
  box3.display();
  
  ground.display();
  
  helicopter.display();
}




