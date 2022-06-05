// เงื่อนไข ? True : False

/*
function checkWinner(win){

    win ? console.log("You win!"):console.log("You lose!");
}

checkWinner(false);
*/

function checkPass(points){

    return points >= 50? "You are passed":"You are failed"
}

console.log(checkPass(30));