class Bike{


  static numberOfBike = 0;
  constructor(model){
    this.model = model;
    Bike.numberOfBike +=1;
  }
}

const bike1 = new Bike("honda");
const bike2 = new Bike("yamaha");
const bike3 = new Bike("suzuki");

console.log(bike1.model);
console.log(bike2.model);
console.log(bike3.model);

console.log(Bike.numberOfBike);