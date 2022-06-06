try{
  let x = window.prompt("Enter a number");
  x = Number(x);
  
  if(isNaN(x)) throw "That isn't a number";
  if(x == "") throw "That is empty";
 
 
  console.log(`${x} is a number`);
 
 }
 catch(error){
   console.log(error);
 }
 finally{
   console.log("This always run");
 }