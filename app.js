var userChoices= [];

document.getElementById('button1').addEventListener("click", player1Choice);

function player1Choice() {
  var userChoice= prompt("Please choose rock, paper, or scissors:", " ");
  userChoices.push(userChoice);
  return userChoices;
}

document.getElementById('button2').addEventListener("click", player2Choice);

function player2Choice() {
  var userChoice2 = prompt("Please choose rock, paper, or scissors:", " ");
  userChoices.push(userChoice2);
  return userChoices;
}


document.getElementById('compare').addEventListener("click", function(event){revealWinner(userChoices[0], userChoices[1])});

function revealWinner(player1choice, player2choice) {
  var winner;
  if(player1choice === 'rock' && player2choice=== 'paper') {
    winner = "Player 2 Wins!";
  } else if(player1choice === 'rock' && player2choice === 'scissors'){
    winner = "Player 1 Wins!";
  } else if(player1choice === 'rock' && player2choice === 'rock'){
    winner = "Tie! Try Again.";
  } else if(player1choice === 'paper' && player2choice === 'rock'){
    winner = "Player 1 Wins!";
  } else if(player1choice === 'paper' && player2choice === 'scissors'){
    winner = "Player 2 Wins!";
  } else if(player1choice === 'paper' && player2choice === 'paper'){
    winner = "Tie! Try Again.";
  } else if(player1choice === 'scissors' && player2choice === 'paper'){
    winner = "Player 1 Wins!";
  } else if(player1choice === 'scissors' && player2choice === 'rock'){
    winner = "Player 2 Wins!";
  } else if(player1choice === 'scissors' && player2choice === 'scissors'){
    winner = "Tie! Try Again.";
  }
  document.getElementById('winner').innerHTML = winner;
  document.getElementById('choice1').innerHTML = player1choice;
  document.getElementById('choice2').innerHTML = player2choice;
};
