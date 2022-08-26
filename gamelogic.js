let computerScore = 0;
let playerScore = 0;
let playerSelection;
let rounds = 0;

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
        return 'rock';
    }else if (randomNumber === 2) {
        return 'paper';
    }else {
        return 'scissors';
    }
    
};

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        ++computerScore;
        ++playerScore;
        document.getElementById('round').innerHTML = "Tie!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            ++computerScore;
            document.getElementById('round').innerHTML = "Paper Covers Rock! Computer Won!";
        }else {
          ++playerScore;
          document.getElementById('round').innerHTML = "Rock Crushes! You Won!";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            ++computerScore;
            document.getElementById('round').innerHTML  = "Scissor Cuts Paper! Computer Won!";
        }else {
            ++playerScore;
            document.getElementById('round').innerHTML  = "Paper Covers Rock! You Won!";
        }
    } else if (playerSelection === 'scissors') {
       if (computerSelection === 'rock'){
           ++computerScore;
           document.getElementById('round').innerHTML = "Rock Crushes! Computer Won!";
        }else {
           ++playerScore; 
           document.getElementById('round').innerHTML = "Scissor Cuts Paper! You Won!";
        } 
     }
     winner();
     game();
  
};

     
function winner() {
    if (computerScore > playerScore){
        document.getElementById('winner').innerHTML = "Computer is the Conquerer!";
    }else if (playerScore > computerScore){ 
        document.getElementById('winner').innerHTML = "You are the Conquerer!";
    }else {
        document.getElementById('winner').innerHTML = "Rounds are Tie!";
    }

    document.getElementById('pscore').innerHTML = computerScore;
    document.getElementById('cscore').innerHTML = playerScore;
};

function game() {
    ++rounds;
    if (rounds == 5) {
        document.getElementById('game').innerHTML = 'Game Over!';
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
    }          
};


const rock = document.createElement('button');
rock.innerHTML = 'Rock';
rock.addEventListener('click', function () {playRound(computerPlay(), 'rock')});
document.body.appendChild(rock);

const paper = document.createElement('button');
paper.innerHTML = 'Paper';
paper.addEventListener('click', function() {playRound(computerPlay(), 'paper')});
document.body.appendChild(paper);

const scissors = document.createElement('button');
scissors.innerHTML = 'Scissors';
scissors.addEventListener('click', function() {playRound(computerPlay(), 'scissors')});
document.body.appendChild(scissors);


