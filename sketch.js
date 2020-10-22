const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine = Engine.create();
var world = engine.world;


var drops=[];
var x=0;

var batman;

var li1,li2,li3,li4;

function setup() {
  createCanvas(400, 400);
batman=new Umbrella(200,300,40);
  
  li1=loadImage("1.png");
   li2=loadImage("2.png");
   li3=loadImage("3.png");
   li4=loadImage("4.png");
  
}

function draw() {
  background(20);
  
  if(drops.length<200){
    var drop=new Drop(random(0,width),-20,3);
    drops.push(drop);   
  }
  
 if(drops[x].body.position.y>400){
  Body.setStatic(drops[x].body,true);
   Body.setPosition(drops[x].body,{x:random(0,width),y:-20})
   Body.setStatic(drops[x].body,false);     
 }
   
  
 x+=1;
  if(x===200){
    x=0;
  }
  
  
  if(frameCount%120===0){
    switch(Math.round(random(0,4))){
    case 1:image(li1,200,50,300,200);
           break;
           
           case 2:image(li2,200,50,300,200);
                  break; 
                  
           case 3:image(li3,200,50,300,200);
                  break;
                  
            case 4:image(li4,200,50,300,200);
                  break;       
}
  }
  
  
  
  
  
    rain();
  // console.log(drops.length);
  batman.display();
  Engine.update(engine);
}

function rain(){
  
  
  for(var a=0;a<drops.length;a++){
    drops[a].display();
  }
  
   
}