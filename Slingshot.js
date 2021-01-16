class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA, 
            pointB : pointB,
            lenght : 10, 
            stiffness : 0.04 
        } 
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }
    display(){
        if(this.sling.bodyA){
            var PointA = this.sling.bodyA.position;
            var PointB = this.pointB;
            strokeWeight(3);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
        }
    }
    fly(){
        this.sling.bodyA = null; 
    }
}
