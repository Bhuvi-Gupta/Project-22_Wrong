class Rope{
	constructor(body1, body2, pointA, pointB)
	{
		this.pointA=pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
	//create rope constraint here
		con =Matter.Constraint.create({
				pointA:{x:200,y:20},
				bodyB:body2,
				pointB:{x:0,y:0},
				length:10,
				stiffness:0.1
			})
		World.add(world, con);
		this.body1=body1;
		this.body2=body2;
	}

	display(){
		var pointA=this.body1.position;
		var pointB=this.body2.position;

		push()
		strokeWeight(2);
		line(ball3.position.x,ball3.position.y,roof.position.x,roof.position.y);
		pop()
	}
    //create display() here 

}
