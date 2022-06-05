let numbers = [1,2,3,4,5];
let newArray = numbers.map(square);
newArray.forEach(print);

function square(element){
  return Math.pow(element,2);
}

function print(element){
  console.log(element);
}