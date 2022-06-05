let a = 1; 
let b = 2; 
let c = 3; 
let d = 4; 
let e = 5; 
let f = 6;

console.log(sum(a,b,c,d,e, f));

function sum(...numbers) {
    let total = 0; 
    for(let i of numbers){
    total+=1
    }
    return total
}
