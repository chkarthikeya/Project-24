const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var stone1;
var iron1;


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    plane  = new Plane(600,680,1200,20)
    hammer = new Hammer(10,100);
    rubber1= new Rubber(600,580,60);
    stone1 = new Stone(200,580,50,30);
    iron1  = new Iron(400,550,40,40);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    iron1.display();
    
 
}