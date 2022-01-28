let computerScore = 0;
let playerScore = 0;
let rounds = 0;

function playerPlay() {
    const playerInput = prompt('Type rock, paper or scissors');
    if (playerInput === 'rock' || playerInput === "paper" || playerInput === "scissors") {
        if (typeof playerInput === 'string'){
            playerInput.toLowerCase();
        }else {
            console.log('Input is not valid');
        }
        return playerInput;
    }else {
        return console.log('Error, please type rock, paper, or scissors!')
    }
};

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        ++computerScore;
        ++playerScore;
        return "Tie!"
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            ++computerScore;
            return "Paper Covers Rock! Computer Won!";
    }else {
          ++playerScore;
          return "Rock Crushes! You Won!";
        }
    } 

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            ++computerScore;
            return "Scissor Cuts Paper! Computer Won!";
       }else {
            ++playerScore;
            return "Paper Covers Rock! You Won!";
       }
    }
    
    if (playerSelection === 'scissors') {
       if (computerSelection === 'rock'){
           ++computerScore;
           return "Rock Crushes! Computer Won!"
       }else {
           ++playerScore; 
           return "Scissor Cuts Paper! You Won!"
       }
     }
};

const playerSelection = playerPlay();
const computerSelection = computerPlay();


function winner() {
    if (computerScore > playerScore){
        alert("Computer is the Conquerer!");
    }else if (playerScore > computerScore){ 
        alert("You are the Conquerer!");
    }else {
        alert("Tie!")
    }
    console.log(computerScore);
    console.log(playerScore);
};

function game() {
    while (rounds != 5) {
        ++rounds;
        console.log('You selected' + " " + playerSelection);
        console.log('Computer selected' + " " + computerSelection);
        console.log(playRound(playerPlay(), computerPlay())); 
    }  
    if (rounds = 5) {
            alert('Game Over!');
            winner();
    }    
};


game();