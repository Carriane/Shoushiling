let computerScore = 0;
let playerScore = 0;
let rounds = 0;

function playerPlay() {
    const playerInput = prompt('Type rock, paper or scissors');
    if (typeof playerInput === 'string'){
        playerInput.toLowerCase();
        if(playerInput === 'rock' || playerInput === "paper" || playerInput === "scissors"){
            return playerInput;
        }else {
            console.log('Input is not valid');
        }   
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
        console.log("Tie!");
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            ++computerScore;
            console.log( "Paper Covers Rock! Computer Won!");
    }else {
          ++playerScore;
          console.log( "Rock Crushes! You Won!");
        }
    } 

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            ++computerScore;
            console.log( "Scissor Cuts Paper! Computer Won!");
       }else {
            ++playerScore;
            console.log( "Paper Covers Rock! You Won!");
       }
    }
    
    if (playerSelection === 'scissors') {
       if (computerSelection === 'rock'){
           ++computerScore;
           console.log( "Rock Crushes! Computer Won!");
       }else {
           ++playerScore; 
           console.log( "Scissor Cuts Paper! You Won!");
       }
     }
};


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
        console.log(playRound(playerPlay(), computerPlay())); 
    }  
    if (rounds = 5) {
            alert('Game Over!');
            winner();
    }    
};


game();