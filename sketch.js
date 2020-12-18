const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var stand1,stand2;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var block17,block18,block19,block20,block21;
var block22,block23,block24;
var block25;

var polygon, slingShot, polygon_img;
var stand1, stand2;

var score = 0;
var bg = "sprites/bg1.jpg";

function preload(){

    getBackgroundImg();
}

function setup(){
    createCanvas(900,400);
    
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    polygon_img=loadImage("polygon.png");


    slingShot = new SlingShot (this.polygon, {x:100,y:200});

    ground1 = new Ground();

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    block1 = new Block(300,275,30,40);  
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
  
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
  
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
  
    block16 = new Block(390,155,30,40);
  
    block17 = new Block(640,175,30,40);
    block18 = new Block(670,175,30,40);
    block19 = new Block(700,175,30,40);
    block20 = new Block(730,175,30,40);
    block21 = new Block(760,175,30,40);
  
    block22 = new Block(670,135,30,40);
    block23 = new Block(700,135,30,40);
    block24 = new Block(730,135,30,40);
  
    block25 = new Block(700,95,30,40)
  
    
}

function draw(){
   background(56,44,44);
    Engine.update(engine);


    ground1.display();

    stand1.display();
    stand2.display();
    strokeWeight(3);
    stroke(15);
    fill(135,206,234);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
  
    fill(255,192,203);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
  
    fill(63,224,208);
    block13.display();
    block14.display();
    block15.display();
  
    fill(128,128,128);
    block16.display();
  
    fill(135,206,234);
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
  
    fill(255,192,203);
    block22.display();
    block23.display();
    block24.display();
  
    fill(128,128,128);
    block25.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
  
    
    fill("white");
    textSize(22);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);
   // textSize(16);
    //text("Press Space to get a second Chance to Play!!", 730,370);
    
    fill("white")
    textSize(16);
    text("SCORE : "+score,50,370)
    
    
    fill("gold");
    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.jpg";
    }
    else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage("bg");

    //console.log(backgroundImg);
}