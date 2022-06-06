let item = "coconut";
let price = 50;
 
let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);
 
function firstMessage(item, price){
    alert(`Buy this ${item} for ${price} Baht`);
}
function secondMessage(){
    alert(`6 secends later`);
}
function thirdMessage(){
    alert(`9 secends later`);
}
document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying`);
}
<button id="myButton">Buy</button>