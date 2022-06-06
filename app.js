class Bike{
  constructor(model,year,color){
    this.model = model;
    this.year = year;
    this.color = color;
  }
}


const bike1 = new Bike("Honda",2007,"red");

changecolor(bike1,"white");
print(bike1);



function print(bike){
  console.log(bike.model);
  console.log(bike.year);
  console.log(bike.color);
}

function changecolor(bike,color){
  bike.color = color;
}