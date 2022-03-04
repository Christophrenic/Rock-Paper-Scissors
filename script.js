let playerScore = 0;                                    //Decleration of variables
let computerScore = 0;
let drawScore = 0;
let playerselection = '';

let displayPlayerScore = document.querySelector(".dashboard .playerscore") //Displays score
displayPlayerScore.textContent = `Your score: ${playerScore}`

let displayComputerScore = document.querySelector(".dashboard .computerscore")
displayComputerScore.textContent = `Computer score: ${computerScore}`

let displayDrawScore = document.querySelector(".dashboard .draw")
displayDrawScore.textContent = `Draw: ${drawScore}`

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



function evaluation() {   //determines winner and updates score
    if (playerselection === computerselection) {
        console.log('Draw!');
        drawScore++;
        displayDrawScore.textContent = `Draw: ${drawScore}`
        return;
        
    } else if (
    (playerselection == "rock" && computerselection == "scissors") ||   //RPS rules
    (playerselection == "paper" && computerselection == "rock") || 
    (playerselection == "scissors" && computerselection == "paper")) {
        console.log("You win!");
        playerScore++;
        displayPlayerScore.textContent = `Your score: ${playerScore}`
        return;

    } else {
        console.log("You lose");
        computerScore++              //increments score
        displayComputerScore.textContent = `Computer score: ${computerScore}`
    } 
    if (playerScore >= 5) {       //Determines winner (first to 5) and resets score.
        alert('You win!')
        computerScore = 0;
        playerScore = 0;
        drawScore = 0;
        displayComputerScore.textContent = `Computer score: ${computerScore}`
        displayPlayerScore.textContent = `Your score: ${playerScore}`
        displayDrawScore.textContent = `Draw: ${drawScore}`
        return;
    }
    if (computerScore >= 5) {
        alert("You lose!")
        computerScore = 0;
        playerScore = 0;
        drawScore = 0;
        displayComputerScore.textContent = `Computer score: ${computerScore}`;
        displayPlayerScore.textContent = `Your score: ${playerScore}`;
        displayDrawScore.textContent = `Draw: ${drawScore}`
        return;
    }
}
