class CannonBall {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      //Radio
      this.r = 40;
  //crear un cuerpo circular
  this.body = Bodies.circle(x,y,this.r,options);
  
  //cargar la imagen
  this.image = loadImage("assets/cannonball.png");
      World.add(world, this.body);
    }
  
    //Función shoot
    shoot() {
      
      //establecer el ángulo de la bala al cañón
      //Formar un ángulo: p5.Vector.formAngle
      //El vector contiene fuerza y velocidad
      var velocity = p5.Vector.fromAngle(cannon.angle);
      velocity.mult(20);
      //establecer un valor estático al cuerpo
      //Se coloca "false" para indicar q cuando se mueva dejará de ser estático
      Matter.Body.setStatic(this.body,false);
      //establecer la velocidad de la bala para moverla
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
  //mostrar la imagen
  image(this.image,0,0,this.r,this.r)
      pop();
  
      }
    }