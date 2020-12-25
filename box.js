class Box {
    constructor() {
        var options = {
            'restitution':0.8,
            'isStatic':true,
            'density':0.5
        }
        this.body = Bodies.rectangle(width/2, 200, 50, 50, options);
        this.image = loadImage("package.png");    

        World.add(world, this.body);
    }
    display() {
      var posX = this.body.position.x;
      var posY = this.body.position.y;  
      rectMode(CENTER);
      rect(width/2, 200, 50, 50);
      imageMode(CENTER);
      //image follows position of body
      image(this.image, posX, posY, 50, 50);
      
      //when down arrow is pressed, package isStatic is set to false
      if(keyCode == DOWN_ARROW) {
		Body.setStatic(this.body, false);
	  }
    }
}