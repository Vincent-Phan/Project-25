class Paper extends dustbin{
    constructor(x,y){
        super(x,y)
var options = {
    isStatic: false,
    restitution:0.3, 
    friction:0,
    density:1.2
}
this.image=loadImage("paper.png")


    }
}
function keyPressed(){
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:130,y:-145})
    }
}