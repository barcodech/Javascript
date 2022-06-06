class bike{
  constructor(name,year,color){
    this.name = name;
    this.year = year;
    this.color = color;
  }
  status(){
    console.log(`${this.name} is moving` )
  }
}

const bike1 = new bike("honda",2005,"white");
const bike2 = new bike("yamaha",2006,"black");


console.log(bike1.name);
console.log(bike1.year);
console.log(bike1.color);

bike1.status();

console.log(bike2.name);
console.log(bike2.year);
console.log(bike2.color);

bike2.status();