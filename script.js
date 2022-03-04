let playerScore = 0;
let computerScore = 0;
let draw = 0;
let playerselection = '';

let displayPlayerScore = document.querySelector(".dashboard .playerscore") //Displays score
displayPlayerScore.textContent = `Your score: ${playerScore}`

let displayComputerScore = document.querySelector(".dashboard .computerscore")
displayComputerScore.textContent = `Computer score: ${computerScore}`

let drawScore = document.querySelector(".dashboard .draw")
drawScore.textContent = `Draw: ${draw}`


const array = ["rock", "paper", "scissors"];      //Array is created and computer makes selection
let computerselection = array[Math.floor(Math.random() * array.length)];


const rockBtn = document.querySelector('#rock');  //Player selection based on button + plays the game
rockBtn.addEventListener('click', function(e) {
    playerselection = 'rock';
    evaluation(playerselection, computerselection);
    computerselection = array[Math.floor(Math.random() * array.length)];
})

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function(e) {
    playerselection = 'paper';
    evaluation(playerselection, computerselection);
    computerselection = array[Math.floor(Math.random() * array.length)];
})

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function(e) {
    playerselection = 'scissors';
    evaluation(playerselection, computerselection);
    computerselection = array[Math.floor(Math.random() * array.length)];
})



function evaluation() { 
    if (playerselection === computerselection) {
        console.log('Draw!');
        draw++;
        drawScore.textContent = `Draw: ${draw}`
        
    } else if (
    (playerselection == "rock" && computerselection == "scissors") ||      //Evaluates winner and adds to either playerscore or computerscore or draw.
    (playerselection == "paper" && computerselection == "rock") || 
    (playerselection == "scissors" && computerselection == "paper")) {
        console.log("You win!");
        playerScore++;
        displayPlayerScore.textContent = `Your score: ${playerScore}`

    } else {
        console.log("You lose");
        computerScore++
        displayComputerScore.textContent = `Computer score: ${computerScore}`
    }
}
