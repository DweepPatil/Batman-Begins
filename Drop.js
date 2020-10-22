class Drop{
  constructor(x,y,r){
    var options={
      'restituion':0.7,
      'friction':0.1
    }
    
    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
    World.add(world,this.body);
  }
  
  display(){
    var pos=this.body.position;
    fill("cyan");
    if(this.body){
          ellipse(pos.x,pos.y,this.r*2);    

    }
  }
}