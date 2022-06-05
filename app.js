let count = 0;

document.getElementById("decreseButton").onclick = function(){
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("increseButton").onclick = function(){
  count += 1;
  document.getElementById("myLabel").innerHTML = count;
}

greeting();

function greeting(){
  console.log("Hello");
}

const greeting = function (){
  console.log("Hello");
}