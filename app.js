class Player{
  score = 0;

  pause(){
    console.log("You paused the game");

  }
  exit(){
    console.log("You exited the game")
  }
}

const Player1 = new Player();
const Player2 = new Player();
const Player3 = new Player();
const Player4 = new Player();

Player1.score += 1;
Player2.score += 5;
Player3.score -= 3;

console.log(Player1.score);
Player1.pause();

console.log(Player3.score);
Player3.pause();