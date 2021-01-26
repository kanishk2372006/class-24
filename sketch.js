const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,500,50,50);
    box2 = new Box(1000,500,50,50);
    box3=new Box(800,400,50,50);
    box4=new Box(1000,400,50,50)
    box5=new Box(910,200,50,50);
    ground = new Ground(600,height,1200,20)
    pigs1=new Pigs(910,500);
    pigs2=new Pigs(910,400)
    log1=new Logs(900,480,250,PI/2)
    log2=new Logs(900,300,250,PI/2);
    log3=new Logs(850,100,140,PI/4)
    log4=new Logs(950,100,130,-PI/4)
    bird1=new Bird(300,300)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pigs1.display();
    ground.display();
    log1.display();
    bird1.display();
    box3.display();
    box4.display();
    box5.display();
    pigs2.display();
    log2.display();
    log3.display();
    log4.display();
}