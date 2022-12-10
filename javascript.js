function getComputerChoice(){
  let array = [
    'Rock',
    'Paper',
    'Scissors'
  ];
  let randomNumber = Math.floor(Math.random()*array.length);
  return array[randomNumber];
}

function playRound(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  if (playerSelection.toLowerCase() == 'rock') {
    switch(computerSelection.toLowerCase()) {
      case 'rock':
        return "It's a draw!";
      case 'paper':
        return "You Lose! Paper beats Rock";
      case 'scissors':
        return "You Win! Rock beats Scissors!";
      default: 
        return "Something went wrong";
    }
  } else if (playerSelection.toLowerCase() == 'paper') {
    switch(computerSelection.toLowerCase()) {
      case 'rock':
        return "You Win! Paper beats Rock!";
      case 'paper':
        return "It's a draw!";
      case 'scissors':
        return "You Lose! Scissors beats Paper";
      default: 
        return "Something went wrong";
    }
  } else if (playerSelection.toLowerCase() == 'scissors') {
    switch(computerSelection.toLowerCase()) {
      case 'rock':
        return "You Lose! Rock beats Scissors!";
      case 'paper':
        return "You Win! Scissors beat Paper!";
      case 'scissors':
        return "It's a draw!";
      default: 
        return "Something went wrong";
    }
  } else {
    return "Didn't select Rock, Paper or Scissors!"
  }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const counter = document.querySelector('#counter');

buttons.forEach((button) => {
  button.addEventListener('click', playGame);
});

function playGame(event){
  result.textContent = playRound(event);
  if (result.textContent.search("Win") > 0) {
    playerScore++;
  } else if (result.textContent.search("Lose") > 0) {
    computerScore ++;
  }
  counter.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  if (playerScore == 5) {
    counter.textContent = 'You Win!!';
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    counter.textContent = 'You Lose!!';
    playerScore = 0;
    computerScore = 0;
  }
}