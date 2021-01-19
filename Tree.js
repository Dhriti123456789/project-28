class tree {
    constructor(x,y){
        var options = {
            isStatic : true,
            
        }
        this.body = Bodies.rectangle(x,y,0,0,options);
        this.width = 0;
        this.height = 0;
       
        this.image = loadImage("tree.png");
     //   this.image.scale = 0.2;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,700,700);
       

    }
}