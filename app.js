let min = 0;
let count = window.prompt("Enter a number to countdown");
count = Number(count);

const myTimer = setInterval(countdown,1000);

function countdown(){
  count -=1;
  console.log(count);
  if(count <= min){
    clearInterval(myTimer);
  }
}