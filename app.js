class Car{
  constructor(power){
    this._gas = 25;
    this._power = power;
  }
  get gas(){
    return `${this._gas}L`;
  }
  get power(){
    return `${this._power}HP`;
  }
  set gas(value){
    if(value > 50){
      value = 50;
    }
    else if(value < 0){
      value = 0;
    }
    this._gas = value;
  }


}

let car = new Car(300);

car.gas = 60;

console.log(car.gas);
console.log(car.power);