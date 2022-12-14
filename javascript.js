function getComputerChoice(){
  let array = [
    'rock',
    'paper',
    'scissors'
  ];
  let randomNumber = Math.floor(Math.random()*array.length);
  return array[randomNumber];
}

/* Returns Winner: (choice)A, (choice)B or D(raw) */
function getWinner(choiceA, choiceB){
  switch(choiceA) {
    case 'rock':
      switch(choiceB) {
        case 'rock':
          return('D');
        case 'paper':
          return('B');
        case 'scissors':
          return('A');
      }
    case 'paper':
      switch(choiceB) {
        case 'rock':
          return('A');
        case 'paper':
          return('D');
        case 'scissors':
          return('B');
      }
    case 'scissors':
      switch(choiceB) {
        case 'rock':
          return('B');
        case 'paper':
          return('A');
        case 'scissors':
          return('D');
      }
  }
}

/* Plays a single round and returns the winner as A, B or D(raw) */
function playRound(event){
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  let winner = getWinner(playerSelection, computerSelection);
  let dict = {
    player: playerSelection,
    computer: computerSelection,
    winner: winner
  }
  return dict;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) =>{
  button.addEventListener('click', playGame);
});

let playerScore = 0;
let computerScore = 0;

function playGame(event){
  const result = document.querySelector('#result');
  const counter = document.querySelector('#counter');
  let gameSummary = playRound(event);
  let resultText = '';
  switch (gameSummary["winner"]) {
    case 'A':
      playerScore += 1;
      resultText = `You Won!`;
      break;
    case 'B':
      computerScore += 1;
      resultText = `You Lost!`;
      break;
    case 'D':
      resultText = `Draw!`;
      break;
  }
  counter.textContent = `Player ${playerScore} | ${computerScore} Computer`;
  result.textContent = resultText;
}