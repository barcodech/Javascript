const gameBoard = document.querySelector("#gameBoard");
const conText = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "green";
const paddle1Color = "blue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 10;
const paddleSpeed = 40;
let intervalID;
let ballSpeed;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
    width: 20,
    height: 100,
    x: 0,
    y: 0
};
let paddle2 = {
    width: 20,
    height: 100,
    x: gameWidth - 20,
    y: gameHeight - 100
};
 
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);
 
 
gameStart();
 
function gameStart(){
    createBall();
    nextTick();
};
function drawPaddles(){
    conText.strokeStyle = paddleBorder;
 
    conText.fillStyle = paddle1Color;
    conText.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    conText.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
 
    conText.fillStyle = paddle2Color;
    conText.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    conText.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};
function nextTick(){
    intervalID = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkClash();
        nextTick();
    }, 20)
};
function clearBoard(){
    conText.fillStyle = boardBackground;
    conText.fillRect(0, 0, gameWidth, gameHeight);
};
function changeDirection(event){
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;
 
    switch(keyPressed){
        case(paddle1Up):
            if(paddle1.y > 0){
                paddle1.y -= paddleSpeed;
            }
            break;
        case(paddle1Down):
            if(paddle1.y < gameHeight - paddle1.height){
                paddle1.y += paddleSpeed;
            }
            break;
        case(paddle2Up):
            if(paddle2.y > 0){
                paddle2.y -= paddleSpeed;
            }
            break;
        case(paddle2Down):
            if(paddle2.y < gameHeight - paddle2.height){
                paddle2.y += paddleSpeed;
            }
            break;
    }
};
function drawBall(ballX, ballY){
    conText.fillStyle = ballColor;
    conText.strokeStyle = ballBorderColor;
    conText.lineWidth = 2;
    conText.beginPath();
    conText.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    conText.stroke();
    conText.fill();
};
function createBall(){
    ballSpeed = 1;
    if(Math.round(Math.random()) == 1){
        ballXDirection =  1;
    }
    else{
        ballXDirection = -1;
    }
    if(Math.round(Math.random()) == 1){
        ballYDirection = Math.random() * 1;
    }
    else{
        ballYDirection = Math.random() * -1;
    }
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    drawBall(ballX, ballY);
};
function moveBall(){
    ballX += (ballSpeed * ballXDirection);
    ballY += (ballSpeed * ballYDirection);
};
function checkClash(){
    if(ballY <= 0 + ballRadius){
        ballYDirection *= -1;
    }
    if(ballY >= gameHeight - ballRadius){
        ballYDirection *= -1;
    }
    if(ballX <= 0){
        player2Score+=1;
        updateScore();
        createBall();
        return;
    }
    if(ballX >= gameWidth){
        player1Score+=1;
        updateScore();
        createBall();
        return;
    }
    if(ballX <= (paddle1.x + paddle1.width + ballRadius)){
        if(ballY > paddle1.y && ballY < paddle1.y + paddle1.height){
            ballX = (paddle1.x + paddle1.width) + ballRadius;
            ballXDirection *= -1;
            ballSpeed += 1;
        }
    }
    if(ballX >= (paddle2.x - ballRadius)){
        if(ballY > paddle2.y && ballY < paddle2.y + paddle2.height){
            ballX = paddle2.x - ballRadius;
            ballXDirection *= -1;
            ballSpeed += 1;
        }
    }
};
function updateScore(){
    scoreText.textContent = `${player1Score} : ${player2Score}`;
};
function resetGame(){
    player1Score = 0;
    player2Score = 0;
    paddle1 = {
        width: 20,
        height: 100,
        x: 0,
        y: 0
    };
    paddle2 = {
        width: 20,
        height: 100,
        x: gameWidth - 20,
        y: gameHeight - 100
    };
    ballSpeed = 1;
    ballX = 0;
    ballY = 0;
    ballXDirection = 0;
    ballYDirection = 0;
    updateScore();
    clearInterval(intervalID);
    gameStart();
};