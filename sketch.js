const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,width+500,20);
    platform = new Ground(150, height-90, 300, 170);

    box1 = new Box(700,height-100,70,70);
    box2 = new Box(920,height-100,70,70);
    pig1 = new Pig(810, height-100);
    log1 = new Log(810,height-120,300, PI/2);

    box3 = new Box(670,height-140,70,70);
    box4 = new Box(900,height-140,70,70);
    pig3 = new Pig(810,height-140);

    log3 =  new Log(810,height-160,300, PI/2);

    box5 = new Box(810,height-170,70,70);
    log4 = new Log(760,height-170,150, PI/7);
    log5 = new Log(870,height-170,150, -PI/7);

    bird = new Bird(200,height-200);

    log6 = new Log(230,180,80, PI/2);
    slingShot = new Slingshot(bird.body,{x:200,y:height-325});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    bird.display();
    platform.display();
        
    slingShot.display();    
}

function mouseDragged()
{

Matter.Body.setPosition( bird.body,{x:mouseX,y:mouseY})

}

function mouseReleased()
{
    slingShot.fly()
}
