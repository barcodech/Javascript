const bike1 = {
    model:"honda",
    color:"white",
    year:2009,
  
    drive : function(){
      console.log(`You are riding ${this.model}`);
    },
    brake : function(){
      console.log("You are braking")
    }
  }
  
  const bike2 = {
    model:"yamaha",
    color:"black",
    year:2010,
  
    drive : function(){
      console.log(`You are riding ${this.year}`);
    },
    brake : function(){
      console.log("You are braking")
    }
  }
  
  console.log(bike1.model);
  console.log(bike1.color);
  console.log(bike1.year);
  
  bike1.drive();
  bike1.brake();
  
  console.log(bike2.model);
  console.log(bike2.color);
  console.log(bike2.year);
  
  bike2.drive();
  bike2.brake();