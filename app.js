let ages = [16,17,18,19,20,21,22];
let adults = ages.filter(checkAge);
adults.forEach(print);


function checkAge(element){
  return element >= 18;
}

function print(element){
  console.log(element);
}