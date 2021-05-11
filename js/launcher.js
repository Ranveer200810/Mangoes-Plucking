class Launcher{

    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 5
        };

        this.pointB = pointB;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    };

    fly(){

        this.launch.bodyA = null;
        
    };

    attach(body) {

        this.launch.bodyA = body;

    };

    display(){

        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);

            line(pointA.x, pointA.y, pointB.x, pointB.y);

        };

    };
    
};