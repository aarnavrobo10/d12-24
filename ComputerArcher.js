class computerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);
    }
  
   
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      if (keyIsDown(DOWN_ARROW)) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
      if (keyIsDown(UP_ARROW) && angle) {
        angle += 0.01; 
        Matter.Body.setAngle(this.body, angle);
      } 
      //Matter.Body.setAngle(this.body, PI / 2); // -90 degree
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 50, this.width, this.height);
      pop();
    }
  }