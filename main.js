var scores, gamePlaying, maxWinAmt;

init();

function init() {
  scores = [0, 0];
  addButtonEvents();
  //check if nothing entered
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

<<<<<<< HEAD
function guess(val) {
  //opponentGuesses
  var opponentChoice = Math.floor((Math.random() * 3))
  roundEnd(val, opponentChoice);
  document.getElementById('try-again').style.display = "block";
  document.getElementById('opp-choice').innerHTML = "<h5>Opponent Chooses: </h5>" + "<img src = '" + opponentChoice + ".png'>";
=======
function endRound(val){
    //increment score values
    switch(val){ //win, lose, tie
        case 1:
            document.getElementById('win').style.display = "block";
            document.getElementById('lose').style.display = "none";
            document.getElementById('tie').style.display = "none";
            scores[0]++;
        case -1: 
            document.getElementById('win').style.display = "none";
            document.getElementById('lose').style.display = "block";
            document.getElementById('tie').style.display = "none";
            scores[1]++;
        case 0: 
            document.getElementById('win').style.display = "none";
            document.getElementById('lose').style.display = "none";
            document.getElementById('tie').style.display = "block";    
    }
    document.getElementById('opp-choice').innerHTML = "<h3>Opponent Chooses: </h3>" + "<img src = '" + opponentChoice + ".png'>";
    console.log("<img src = '" + opponentChoice + ".png'>");
    document.getElementById('status').style.display = "block";
    document.getElementById('try-again').style.display = "block";
    document.getElementById('images').style.display = "none";
>>>>>>> 81bfe7765a2f273ad888f774b5fa72cc4b8cc457
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
  //increment score values
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
  document.getElementById('try-again').style.display = "block";
  document.getElementById('images').style.display = "none";
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
  console.log(scores);
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
  document.getElementById('status').innerHTML = "Game Over. You Win!";
  document.getElementById('images').style.display = "none";
  document.getElementById('try-again').style.display = "none";
}

function endLoss(){
  console.log('loss');
  document.getElementById('status').innerHTML = "Game Over. You Lose!";
  document.getElementById('images').style.display = "none";
  document.getElementById('try-again').style.display = "none";
}
