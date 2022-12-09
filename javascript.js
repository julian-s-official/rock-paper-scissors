/* 
Requirements
------------
Function to randomly generate Rock, Paper or Scissors as computer choice
Function that has player and computer selection as input and plays game
Function Game that allows multiple rounds and outputs results
*/

function getComputerChoice(){
  let array = [
    'Rock',
    'Paper',
    'Scissors'
  ];
  let randomNumber = Math.floor(Math.random()*array.length);
  return array[randomNumber];
}

const result = document.querySelector('#result');

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

function playGame(event){
  result.textContent = playRound(event);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playGame);
});