const answer = Math.floor(Math.random() * 10 + 1);

document.getElementById("submitButton").onclick = function (){
 
  let guess = document.getElementById("guessField").value;
  
 
  if(guess == answer){
    alert(`${answer} is the number`);
  }
  else if(guess < answer){
    alert("Too small!");
  }
  else{
    alert("Too large!");
  }
}