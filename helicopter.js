class Helicopter {
    constructor() {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(width/2, 200, 20, 20, options);
        this.image = loadImage("helicopter.png");
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        rect(width/2, 200, 20, 20);
        imageMode(CENTER);
        image(this.image, width/2, 200, 200, 100);
    }
}