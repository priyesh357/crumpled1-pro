class dustbin {
    constructor(x,y,r) {
      
        this.x=x;
         this.y=y;
          this.dustbinWidth=200;
           this.dustbinHeight=100;
            this.wallThickness=20;
             this.angle=0; 
             this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true}) 
             this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
              Matter.Body.setAngle(this.leftWallBody, this.angle);
               this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
                Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
                 World.add(world, this.bottomBody)
                  World.add(world, this.leftWallBody)
                   World.add(world, this.rightWallBody);
    
        



    }
    display(){
      var posb =this.bottomBody.position;
      var posl =this.leftWallBody.position;
       var posr =this.rightWallBody.position;
      push();
      translate(posl.x,posl.y)
      rectMode(CENTER);
      angleMode(RADIANS)
      rotate(this.angle)
      fill("brown");
    rect(0, 0, this.wallThickness, this.dustbinHeight);
      pop();

      push();
      translate(posr.x,posr.y)
      rectMode(CENTER);
      angleMode(RADIANS)
      rotate(-1*this.angle)
      fill("brown");
    rect(0, 0, this.wallThickness, this.dustbinHeight);
      pop();

      push();
      translate(posb.x,posb.y)
      rectMode(CENTER);
      angleMode(RADIANS)
      rotate(this.angle)
      fill("brown");
    rect(0, 0, this.dustbinWidth, this.wallThickness);
      pop();


    }
  };