
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,mango1,mango2,mango3,mango4,mango5,mango6,mango7,chain;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:320 , y:225});
	mango1 = new mango(900,150,8);
	mango2 = new mango(950,120,10);
	mango3 = new mango(1000,100,7);
	mango4 = new mango(950,60,9);
	mango5 = new mango(1050,60,6);
	mango6 = new mango(1100,120,10);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	background("0");
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    console.log(rock);
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	rock.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	collision(rock,mango1);
	collision(rock,mango2);
	collision(rock,mango3);
	collision(rock,mango4);
	collision(rock,mango5);
	collision(rock,mango6);

	strokeWeight(3);
	stroke(0);
	fill(255);
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}
