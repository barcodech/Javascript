// ternary operator
// condition ? true : false

let adult =checkAge(15);
console.log(adult);

function checkAge(age){
    return age>=18 ? true : false ;
}


checkWinner(false);

function checkWinner(win){

    win ? console.log("You win") : console.log("You lose");
}