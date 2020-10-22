class Umbrella{
  constructor(x,y,r){
    var options={
      'restituion':0.5,
      'isStatic': true
    }
    
    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
    
    this.img1=loadImage("walking_1.png");
     this.img2=loadImage("walking_2.png");
     this.img3=loadImage("walking_3.png");
     this.img4=loadImage("walking_4.png");
     this.img5=loadImage("walking_5.png");
     this.img6=loadImage("walking_6.png");
    World.add(world,this.body);
  }
  
  display(){
    var pos=this.body.position;
   imageMode(CENTER);
 
    
    
    image(this.img1,pos.x,pos.y,100,100)
    
    
  }
}