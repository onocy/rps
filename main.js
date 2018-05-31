var scores, yourChoice, activePlayer, gamePlaying, opponentChoice, maxWinAmt;


document.querySelector('#start-game').addEventListener('click', function() {
    init(); 
    maxWinAmt = document.getElementById('max-game-num').value;
    document.getElementById('score-0').innerHTML = 0;
    document.getElementById('score-1').innerHTML = 0;
    document.getElementById('start').style.display = "none";
    document.getElementById('game').style.display = "block";
});

document.querySelector('#new-game').addEventListener('click', function() {
    gamePlaying = false; 
    document.getElementById('start').style.display = "block";
    document.getElementById('game').style.display = "none";
});

document.querySelector('#try-again').addEventListener('click', function() {
    document.getElementById('opp-choice').innerHTML = "";
    document.getElementById('status').style.display = "none";
    document.getElementById('images').style.display = "block";
});

document.querySelector('#img_0').addEventListener('click', function() {
    guess(0);
});
document.querySelector('#img_1').addEventListener('click', function() {
    guess(1);
});
document.querySelector('#img_2').addEventListener('click', function() {
    guess(2);
});

function guess(val){
    yourChoice = val;
    opponentChoice = Math.floor((Math.random()*3));
    checkGame(yourChoice, opponentChoice);
    console.log(yourChoice, opponentChoice);
    document.getElementById('score-0').innerHTML = "" + scores[0];
    document.getElementById('score-1').innerHTML = "" + scores[1];
}

function checkGame(a, b){
    checkWin();
    if(a === b) endRound(0);
    if(a === 0) (b === 1 ? endRound(1): endRound(-1));
    if(a === 1) (b === 2 ? endRound(1): endRound(-1));
    if(a === 2) (b === 0 ? endRound(1): endRound(-1));
}

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
}

function checkWin(){
    //you win
    if(scores[0] === maxWinAmt){
        
    }
    if(scores[1] === maxWinAmt){
        
    }
}

function init() {
    scores = [0, 0];
    gamePlaying = true;
}