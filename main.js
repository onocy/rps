var scores, gamePlaying, maxWinAmt;

init();

function init() {
  scores = [0, 0];
  addButtonEvents();
  checkEndState();
}

function addButtonEvents(){
  // Start Game Button
  document.querySelector('#start-game').addEventListener('click', function() {
    maxWinAmt = document.getElementById('max-game-num').value;
    if(maxWinAmt === undefined){
      maxWinAmt = 0;
    }
    document.getElementById('score-0').innerHTML = scores[0];
    document.getElementById('score-1').innerHTML = scores[1];
    document.getElementById('start').style.display = "none";
    document.getElementById('game').style.display = "block";
    document.getElementById('images').style.display = "block";
  });

  // New Game Button
  document.querySelector('#new-game').addEventListener('click', function() {
      newGame();
  });

  // Try Again Button
  document.querySelector('#try-again').addEventListener('click', function() {
    document.getElementById('try-again').style.display = "none";
    document.getElementById('opp-choice').innerHTML = "";
    document.getElementById('status').innerHTML = "";
    document.getElementById('images').style.display = "block";
  });

  document.getElementById('img_0').addEventListener('click', function() {
    guess(0);
  });
  document.getElementById('img_1').addEventListener('click', function() {
    guess(1);
  });
  document.getElementById('img_2').addEventListener('click', function() {
    guess(2);
  });
}

/* New Game */

function newGame(){
  scores = [0, 0];
  document.getElementById('start').style.display = "block";
  document.getElementById('game').style.display = "none";
  document.getElementById('try-again').style.display = "none";
  document.getElementById('opp-choice').innerHTML = "";
  document.getElementById('status').innerHTML = "";
  maxWinAmt = 0;
}

//opponentGuesses
function guess(val) {
  var opponentChoice = Math.floor((Math.random() * 3))
  document.getElementById('try-again').style.display = "block";
  document.getElementById('opp-choice').innerHTML = "<h5>Opponent Chooses: </h5>" + "<img src = '" + opponentChoice + ".png'>";
  roundEnd(val, opponentChoice);
}

// 0 = scissors, 1 = rock, 2 = paper
function roundEnd(yourGuess, opponentGuess) {
  if (yourGuess === opponentGuess){
    endRound('tie')
  }
  else if (yourGuess === 0)(opponentGuess === 1 ? endRound('win') : endRound('loss'));
  else if (yourGuess === 1)(opponentGuess === 2 ? endRound('loss') : endRound('win'));
  else if (yourGuess === 2)(opponentGuess === 0 ? endRound('loss') : endRound('win'));
}

function endRound(val) {
  document.getElementById('try-again').style.display = "block";
  document.getElementById('images').style.display = "none";
  switch (val) {
    case 'win':
      roundWin();
      break;
    case 'loss':
      roundLoss();
      break;
    case 'tie':
      roundTie();
      break;
  }
}

/*  Round Over */

function roundWin(){
  scores[0]++;
  document.getElementById('score-0').innerHTML = "" + scores[0];
  document.getElementById('status').innerHTML = "You Win!";
  checkEndState();
}

function roundLoss(){
  scores[1]++;
  document.getElementById('score-1').innerHTML = "" + scores[1];
  document.getElementById('status').innerHTML = "You Lose!";
  checkEndState();
}

function roundTie(){
  document.getElementById('status').innerHTML = "Tie! Scores do not change.";
  checkEndState();
}

function checkEndState() {
  if(scores[0] >= maxWinAmt){
     endWin();
  }
  else if(scores[1] >= maxWinAmt){
    endLoss();
  }
}

/* Game Over */

function endWin(){
  // Add end game text
  console.log('win');
  document.getElementById('images').style.display = "none";
  document.getElementById('try-again').style.display = "none";
  document.getElementById('status').innerHTML = "Game Over. You Win!";
}

function endLoss(){
  console.log('loss');
  document.getElementById('images').style.display = "none";
  document.getElementById('try-again').style.display = "none";
  document.getElementById('status').innerHTML = "Game Over. You Lose!";
}
