class Bike{
  constructor(model,year,color){
    this.model = model;
    this.year = year;
    this.color = color;
  }
  ride(){
    console.log(`You ride the ${this.model}`);
  }

}


const bike1 = new Bike("Honda",2007,"red");
const bike2 = new Bike("Yamaha",2006,"blue");
const bike3 = new Bike("Suzuki",2005,"yellow");

const bikes = [bike1,bike2,bike3];

console.log(bikes[0].color);
console.log(bikes[1].color);
console.log(bikes[2].color);

riding(bikes);

function riding(bikes){
  for(const bike of bikes){
    bike.ride();
  }
}