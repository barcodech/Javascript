const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const cellForCheck = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let stringCheck = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
 
startGame();
 
function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
 
    if(stringCheck[cellIndex] != "" || !running){
        return;
    }
 
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(thiscell, cellIndex){
    stringCheck[cellIndex] = currentPlayer;
    thiscell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let gameWin = false;
 
    for(let i = 0; i < cellForCheck.length; i++){
        const cellkeep = cellForCheck[i];
        const cellA = stringCheck[cellkeep[0]];
        const cellB = stringCheck[cellkeep[1]];
        const cellC = stringCheck[cellkeep[2]];
 
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            gameWin = true;
            break;
        }
    }
 
    if(gameWin){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!stringCheck.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    stringCheck = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}