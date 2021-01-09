 class chain {

  constructor(bodyA,bodyB){

    var options={

        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:1,
        length:10
    }

    this.chain=Constraint.create(options);
    World.add(world,this.chain);


  }
    display(){

        push ();    //insert the command
        strokeWeight(4);
        line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);  //line(x1,y1,x2,y2)
        pop ();  //remove the command
       
    

    }

 }