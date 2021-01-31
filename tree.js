class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          density : 0
      }
      this.body = Bodies.rectangle(x,y,100,100,options);
      this.width = 500;
      this.height = 610;
      this.image = loadImage("Plucking mangoes/tree.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  }
