
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree1;
var ground1;
var stone1;
var boy;
var mango1,mango2,mango3,mango4,mango5,mango6;
var rope1;
var mangoBposition,stoneBposition;
//var lmango,lstone;

function preload(){
	boy = loadImage("boy.png")
}


function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
 

	tree1 = new tree(600,470);
	
	ground1 = new ground(400,800,1200,10);
	
	stone1 = new stone(150,690);

	mango1 = new mango(700,250);
	mango2 = new mango(600,270);
	mango3 = new mango(550,250);
	mango4 = new mango(400,350);
	mango5 = new mango(600,400);
	mango6 = new mango(750,400);

	rope1 = new Rope(stone1.body,{x:150,y:690});

	


  
	Engine.run(engine);
  
}


function draw() {
 Engine.update(engine); 
  background("black");
  
  
  ground1.display();
  
 
  tree1.display();
  stone1.display();
 // boy.display();

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();

 rope1.display();

 detectollision(stone1,mango1);
 detectollision(stone1,mango2);
 detectollision(stone1,mango3);
 detectollision(stone1,mango4);
 detectollision(stone1,mango5);
 detectollision(stone1,mango6);

 

  image(boy,200,730,200,200);
 
}
 function mouseDragged(){
	 Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
	 rope1.fly();
 }

function detectollision(Lstone,Lmango){
mangoBposition = Lmango.body.position;
stoneBposition = Lstone.body.position;
var distance = dist(stoneBposition.x,stoneBposition.y,mangoBposition.x,mangoBposition.y);
if(distance<=Lmango.radius+Lstone.radius){

	Matter.Body.setStatic(Lmango.body,false);
}
console.log(Lmango.radius);

 }
 /*function keyPressed(){
	 if(keyCode === 32){
		 Matter.Body.setPosition(stone1.body,{x:150,y:690});
		 rope1.attach(stone1);
	 }
 }*/



