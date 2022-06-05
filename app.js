let username = "barcode";
let item = 5;
let total = 100;

console.log(`Hello ${username}`);
console.log(`You have ${item} items`);
console.log(`Your total is ${total} Baht`);

let text = `Hello ${username} You have ${item} items Your total is ${total} Baht`;

console.log(text);
document.getElementById("myLabel").innerHTML = text;