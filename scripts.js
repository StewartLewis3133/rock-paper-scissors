//Variables that store each player's selections
let computerSelection;
let playerSelection;

//Used later to determine which game number the current round is
let gameNumber;

//Variables that store what each player's score is
let computerScore = 0;
let playerScore = 0;

//Random positive integer generator
//Parameters are minimum and maximum ranges for the random number required
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Randomly stores either Rock, Paper or Scissors in the computerSelection variable
//Create three strings with each name
//Uses getRndInteger to randomly assign the string from the choices array
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    computerSelection = choices[getRndInteger(0,3)];
    return;
}

//Asks the player to choose rock paper or scissors
//Changes their selection to lower case letters
//Alerts cancelled if the box is empty or they press cancel
//Calls itself again if the string is something other than rock paper or scissors
//Changes variable playerSelection
function playerSelect(){
  playerSelection = prompt("Choose either Rock, Paper, or Scissors!");
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "" || playerSelection === null){
    alert("Cancelled");
    return;
  } else if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    return;
  } else {
    playerSelect()
    return;
  }
}

//prints that the round is a tie
function tieGame() {
  console.log("You and the computer both chose " + playerSelection + "!"); 
}

//prints that the round goes to the player
//prints which round it is
//increments playerScore variable
function playerWin() {
  console.log("You win! The computer chose " + computerSelection);
  console.log("Game number " + gameNumber + " goes to the player!");
  playerScore++;
}

//prints that the round goes to the computer
//prints which round it is
//increments computerScore variable
function playerLose() {
  console.log("You Lose! The computer chose " + computerSelection);
  console.log("Game number " + gameNumber + " goes to the computer!");
  computerScore++;
}

function game() {
  //Calls the playRound function 5 times
  for (gameNumber = 1; gameNumber < 6; gameNumber++) {
    playRound();
  }
  
  //Compares the two parameters
  //If equal, it's a tie and you must play again
  //If inequal, test player selection is win or lose
  //return string "You Lose" , "You Win!" "You Tied, play again"
  function playRound() {
    
    //Calls for Player input
    playerSelect();
    //Calls for Computer input
    computerPlay();
  
    //Tie Case
    if (playerSelection == computerSelection){ //player and computer chose the same thing
      tieGame(); 
      gameNumber--; //Used to negate the for loops increment because the tie game does not count
      return;
    }
  
    //Rock Case
    if (playerSelection == "rock") { //player chose rock
      if (computerSelection == "paper"){ //computer chose paper
        playerLose();
        return;
      }
      else { //computer chose scissors
        playerWin();
        return;
      }
    }
  
    //Paper Case
    if (playerSelection == "paper") { //player chose paper
      if (computerSelection == "scissors"){ //computer chose scissors
        playerLose();
        return;
      }
      else { //computer chose rock
        playerWin();
        return;
      }
    }
  
    //Scissors Case
    if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        playerLose();
        return;
      }
      else { //computer chose paper
        playerWin();
        return;
      }
    }
  }
}

game();

//Tests who won based on who had the higher score
if (playerScore > computerScore){
  alert("You win!!! Good Job on your luck");
} else {
    alert("The computer has won, I guess humanity really is unimportant");
  }