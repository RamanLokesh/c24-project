
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,rubber,sand;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    hammer = new Box(700,320,100,30);
    stone = new Stone(350,20,80,80);
    stone2 = new Stone(500,20,50,30);
    ground = new Ground(500,height,1000,20)
    rubber = new Rubber(300,20,50);
    sand1 = new Sand(200,350,10);
    sand2 = new Sand(205,350,10);
    sand3 = new Sand(210,350,10);
    sand4 = new Sand(203,350,10);
    sand5 = new Sand(212,350,10);
    sand6 = new Sand(285,350,10);
    sand7 = new Sand(213,350,10);
    sand8 = new Sand(207,350,10);
    sand9 = new Sand(214,350,10);
    sand10 = new Sand(201,350,10);


}

function draw(){
    background("grey");
    Engine.update(engine);
    console.log(hammer.body.position.x);
    console.log(hammer.body.position.y);
    console.log(hammer.body.angle);
    hammer.display();
    stone.display();
    stone2.display();
    ground.display();
    rubber.display();
    sand1.display(); 
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display(); 
    sand6.display(); 
    sand7.display(); 
    sand8.display(); 
    sand9.display(); 
    sand10.display();
    
}
