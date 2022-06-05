const greeting = function(name){
    console.log(`Hello ${name}`);
   }
    greeting("barcode");
    
   const greeting = (name) => console.log(`Hello ${name}`);
   greeting("barcode");
    
    
    
   const percentage = function(x,y){
    return (x/y)*100;
   }
    
   console.log(`${percentage(10,2)}`)
    
   const percentage = (x,y) => (x/y)*100;
   console.log(`${percentage(10,2)}`)
    
    
    
    
   const numbers = [20, 10, 30, 5];
    
   numbers.sort(descending);
   numbers.forEach(print);
    
   function descending(x, y){
     return y-x;
   }
   function print(element){
     console.log(element);
   }
    
    
   const numbers = [20, 10, 30, 5];
    
   numbers.sort((x, y) => y - x);
   numbers.forEach((element) => console.log(element));