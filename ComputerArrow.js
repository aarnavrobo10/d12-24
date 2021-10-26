class ComputerArrow {
  constructor(x, y, width, height, angle) {
    var options = {
      restitution: 0.1,
      friction: 1.0,
      density: 1.0,
      isStatic: false
    };
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/computerArrow.png");
    World.add(world, this.body);
  }

 display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 50, this.width, this.height);
    pop();
  }
  shoot(angle) {
    var velocity = p5.Vector.fromAngle(angle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body,false);
      Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});

  }
}
