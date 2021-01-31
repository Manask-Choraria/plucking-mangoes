var boyImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
   	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	
	ground1 = new Ground(600,height,1200,10);
	 tree = new Tree(850,310,500,400)
	 mango = new Mango(900,200,30);
	 mango2 = new Mango (700,275,30);
	 mango3 = new Mango (750,125,30);
	 mango4 = new Mango (800,168,30);
	 mango5 = new Mango (900,50,30);
	 mango6 = new Mango (1000,175,30);
	 stone = new Stone(125,350,50);
	 slingshot = new Slingshot (stone.body,{x:125,y:350});
	 	Engine.run(engine);
  
}


function draw() {
	background(241, 232, 223);
	imageMode(CENTER)
  image(boyImg,275,470,500,500);
   tree.display();
  ground1.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  slingshot.display();
  
  detectCollision(stone,mango)
  detectCollision(stone,mango2)
  detectCollision(stone,mango6)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)

 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	slingshot.fly()
}


function detectCollision(lstone,lmango){
   mangoBody = lmango.body.position
   stoneBody = lstone.body.position

   var distance = dist(stoneBody.x,stoneBody.y,mangoBody.x,mangoBody.y)
   if(distance<=lmango.radius+lstone.radius){
	   Matter.Body.setStatic(lmango.body,false)
   }
}

function keyPressed(){
	if(keyCode === 32){
      slingshot.attach(stone.body)
	}
}