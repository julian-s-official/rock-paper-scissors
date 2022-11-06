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

console.log(getComputerChoice());