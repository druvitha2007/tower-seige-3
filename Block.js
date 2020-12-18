class Block{
  constructor(x,y,width,height){
      var options = {
          'restituition': 0.05,
          'friction':0.01
      }
      this.Visibility = 225;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);

  }

  display(){
      if(this.body.speed<3){
      var pos= this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(1.5);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
  }else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visiblity);
      pop();
   }
  }
  score(){
      if(this.Visibility<0 && this.Visibility>-100){
          score++
      }
  }
}