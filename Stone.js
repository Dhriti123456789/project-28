class stone {
    constructor(x,y){
        var options = {
          //  isStatic : false,
            'restitution' : 0,
            'friction': 1,
            'density': 0.8
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        
        this.image = loadImage("stone.png");

        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius)
    }
    
}