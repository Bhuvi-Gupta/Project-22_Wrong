const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1;
var con;
//Create multiple bobs, mulitple ropes varibale here
var ball, ball2, ball3, ball4, ball5;
var engine, world;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options = {
		restitution: 0.2//bouncing
	}
	
	ball = Bodies.circle(300,350,10,ball_options);
	ball2 = Bodies.circle(350,350,12,ball_options);
	ball3 = Bodies.circle(400,350,10,ball_options);
	ball4 = Bodies.circle(450,350,12,ball_options);
	ball5 = Bodies.circle(500,350,10,ball_options);
	World.add(world,ball);
	World.add(world,ball2);
	World.add(world,ball3);
	World.add(world,ball4);
	World.add(world,ball5);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	rope1 =  new Rope(ball3, roof, -80, 0);
	World.add(world,rope1);
	/*rope1 =  new Rope(ball, roof, -80, 0);
	World.add(world,rope1);
	rope1 =  new Rope(ball, roof, -80, 0);
	World.add(world,rope1);
	rope1 =  new Rope(ball, roof, -80, 0);
	World.add(world,rope1);
	rope1 =  new Rope(ball, roof, -80, 0);
	World.add(world,rope1);*/
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x, 350, 25)
  ellipse(ball2.position.x, 350, 25)
  ellipse(ball3.position.x, 350, 25)
  ellipse(ball4.position.x, 350, 25)
  ellipse(ball5.position.x, 350, 25)
  ellipseMode(RADIUS)

  Engine.update(engine);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
