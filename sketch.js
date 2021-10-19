const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var obj;

function setup() {
 var tela =  createCanvas(400, 400);
 engine = Engine.create();
 world = engine.world;

 var obj_options ={
   isStatic: true
 }

 obj = Bodies.rectangle(200,100,50,50, obj_options);
 World.add(world,obj);

 console.log(obj);
 console.log(obj.type);
 console.log(obj.position.x);
 console.log(obj.position.y);

}
function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  rect (obj.position.x, obj.position.y,50,50);
  
  
}
