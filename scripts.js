let computerSelection;
let playerSelection = '';
let gameNumber = 0;
let computerScore = 0;
let playerScore = 0;
let consoleOut;

//Declare and add event listeners to the buttons
const rpsButtons = document.querySelectorAll('.player-button');
rpsButtons.forEach(button => {button.addEventListener('click', playerSelect)});

//Sets player selection to the id of the clicked element
//Calls playRound Function
function playerSelect(e) {
  playerSelection = e.currentTarget.id;
  playRound();
}

//Random positive integer generator
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Randomly stores either Rock, Paper or Scissors in the computerSelection variable
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    computerSelection = choices[getRandomInteger(0,3)];
    return computerSelection;
}

//Main playRound function tests playerSelection against computerSelection
//Calls computerPlay to get randomized rock paper or scissors
//Calls either tieGame, playerLose, or playerWin
function playRound() {
  computerSelection = computerPlay();

  //Tie Case
  if (playerSelection == computerSelection) { //player and computer chose the same thing
    tieGame(); 
    return;
  }

  //Rock Case
  if (playerSelection == "rock") { //player chose rock
    if (computerSelection == "paper"){ //computer chose paper
      playerLose();
    }
    else { //computer chose scissors
      playerWin();
    }
  }

  //Paper Case
  if (playerSelection == "paper") { //player chose paper
    if (computerSelection == "scissors"){ //computer chose scissors
      playerLose();
    }
    else { //computer chose rock
      playerWin();
    }
  }

  //Scissors Case
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      playerLose();
    }
    else { //computer chose paper
      playerWin();
    }
  }
}

//Prints that the round is a tie
function tieGame() {
  console.log("You and the computer both chose " + playerSelection + "!"); 
  consoleOut = document.querySelector('#console-out-text');
  consoleOut.textContent = "You and the computer both chose " + playerSelection +
  "! No change in score";
}

//Outputs result of the round and the score of the player
function playerWin() {
  console.log("You win! The computer chose " + computerSelection);
  playerScore++;
  gameNumber++;
  consoleOut = document.querySelector('#console-out-text');
  consoleOut.textContent = "You win! The computer chose " + computerSelection +
  "! You're score is: " + playerScore;
  console.log("Game number " + gameNumber + " goes to the you!");
  checkWin();
}

//Outputs result of the round and the score of the computer
function playerLose() {
  console.log("You Lose! The computer chose " + computerSelection);
  consoleOut = document.querySelector('#console-out-text');
  computerScore++;
  gameNumber++;
  consoleOut.textContent = "You lose! The computer chose " + computerSelection +
  "! The computer's score is: " + computerScore;
  console.log("Game number " + gameNumber + " goes to the computer!");
  checkWin();
}

//Used to check gameNumber, if it is 5, displays result
function checkWin() {
  if (computerScore == 5 || playerScore == 5){//Runs when the score hits 5 and returns winner to console element
    if (playerScore > computerScore) {
      consoleOut.textContent = "You won the whole game with " + playerScore + 
      " points";
    } else {
      consoleOut.textContent = "You lost with " + playerScore + 
      " points while the computer has " + computerScore;
    }
    gameNumber = 0;
    playerScore = 0;
    computerScore = 0;
  } 
}