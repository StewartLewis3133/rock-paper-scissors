//Random number generator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Randomly returns either Rock, Paper or Scissors
//Create three strings with each name
//Return random string
function computerPlay() {
    var choices = ["rock", "paper", "scissors"];
    return choices[getRndInteger(0,3)];
}

//Compares the two parameters
//If equal, it's a tie and you must play again
//If inequal, test player selection is win or lose
//return string "You Lose" , "You Win!" "You Tied, play again"
function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  computerSelection.toLowerCase();
  if(playerSelection === computerSelection){
    return "You Tied, play again";
  } else if (playerSelection == "rock" && computerSelection == "paper"){
      return "You Lose! paper beats rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors"){
      return "You Win! rock beats scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper"){
      return "You Win! scissors beats paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock"){
    return "You Lose! Rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock"){
      return "You Win! Paper beats rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors"){
      return "You Lose! Scissors beats paper";
}
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
