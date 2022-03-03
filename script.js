let playerScore = 0;
let computerScore = 0;
let draw = 0;
let playerselection = '';
const array = ["rock", "paper", "scissors"];
let computerselection = array[Math.floor(Math.random() * array.length)];


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function(e) {
    playerselection = 'rock';
    evaluation(playerselection, computerselection);
})

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function(e) {
    playerselection = 'paper';
    evaluation(playerselection, computerselection);
})

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function(e) {
    playerselection = 'scissors';
    evaluation(playerselection, computerselection);
})



function evaluation() { 
    if (playerselection === computerselection) {
        console.log('Draw!');
        draw++;
        
    } else if (
    (playerselection == "rock" && computerselection == "scissors") ||      //Evaluates winner and adds to either playerscore or computerscore or draw.
    (playerselection == "paper" && computerselection == "rock") || 
    (playerselection == "scissors" && computerselection == "paper")) {
        console.log("You win!");
        playerScore++;

    } else {
        console.log("You lose");
        computerScore++
    }
}

