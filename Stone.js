class Stone {
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':0.9,
            'density':12
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world, this.body);

    };
    display(){
        var stonepos=this.body.position;
        var angle = this.body.angle;
    push();
    translate(stonepos.x, stonepos.y);
    strokeWeight(3);
    stroke('black');
    fill('darkred');
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
}