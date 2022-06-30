let computerScore = 0;
let playerScore = 0;
let rounds = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        ++computerScore;
        ++playerScore;
        alert("Tie!");
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            ++computerScore;
            alert( "Paper Covers Rock! Computer Won!");
    }else {
          ++playerScore;
          alert( "Rock Crushes! You Won!");
        }
    } 

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            ++computerScore;
            alert( "Scissor Cuts Paper! Computer Won!");
       }else {
            ++playerScore;
            alert( "Paper Covers Rock! You Won!");
       }
    }
    
    if (playerSelection === 'scissors') {
       if (computerSelection === 'rock'){
           ++computerScore;
           alert( "Rock Crushes! Computer Won!");
       }else {
           ++playerScore; 
           alert( "Scissor Cuts Paper! You Won!");
       }
     }
};

function playerPlay() {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper')
    const scissors = document.getElementById('scissors')

    rock.addEventListener('click', RockMessage);
    paper.addEventListener('click', PaperMessage);
    scissors.addEventListener('click', ScissorsMessage);


    function RockMessage() {
        document.getElementById('rockchosen').innerHTML += "You chose Rock!" + "<br>";
    }

    function PaperMessage() {
        document.getElementById('paperchosen').innerHTML += "You chose Paper!" + "<br>";
    }

    function ScissorsMessage() {
        document.getElementById('scissorschosen').innerHTML += "You chose Scissors!" + "<br>";
    }

    // if (rock.target.id === 'rock')
    // if (typeof playerInput === 'string'){
    //     playerInput.toLowerCase();
    //     if(playerInput === 'rock' || playerInput === "paper" || playerInput === "scissors"){
    //         document.write(playerInput);
    //     }else {
    //         document.write('Input is not valid');
    //     }   
    // }else {
    //     return document.write('Error, please type rock, paper, or scissors!')
    // }
};

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
        document.getElementById('rockchosen1').innerHTML += "Computer chose Rock!" + "<br>";
    }else if (randomNumber === 2) {
        document.getElementById('paperchosen2').innerHTML += "Computer chose Paper!" + "<br>";
    }else {
        document.getElementById('scissorschosen3').innerHTML += "Computer chose Scissors!" + "<br>";
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
    alert(computerScore);
    alert(playerScore);
};

// function game() {
    // while (rounds != 5) {
    //     ++rounds;   
    console.log(playRound(playerPlay(), computerPlay())); 
    // } 

    // if (rounds = 5) {
    //         alert('Game Over!');
    //         winner();
    // } 
    
// };


// game();



