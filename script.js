
function computerPlay() {
return array[Math.floor(Math.random() * array.length)];
}

function userPlay() {
return prompt('Choose: Rock, Paper or Scissors', 'Choose it! NOW!!');
}

function evaluation(playerselection, computerselection) {
    if (playerselection.toLowerCase() === computerselection.toLowerCase()) {
        console.log('Draw!');
        draw++;

    } else if (
    (playerselection.toLowerCase() == "rock" && computerselection.toLowerCase() == "scissors") ||      //VICTORIES + SCORING
    (playerselection.toLowerCase() == "paper" && computerselection.toLowerCase() == "rock") || 
    (playerselection.toLowerCase() == "scissors" && computerselection.toLowerCase() == "paper")) {
        console.log("You win!");
        playerScore++;

    } else {
        console.log("You lose");
        computerScore++
    }
}

function game() {
    let i = 0;
    while (i < 5) {
        evaluation(userPlay(), computerPlay());
        i++;
    } if (playerScore > computerScore) {
        alert(`You win! Your score: ${playerScore} Computer score: ${computerScore} Draws: ${draw}`)
        return;
    } else if (computerScore > playerScore); {
        alert(`You lose! Your score: ${playerScore}, Computer score: ${computerScore} Draws: ${draw}`);
    }
        alert("It's a draw!");
        return;
}
        

let playerScore = 0;
let computerScore = 0;
let draw = 0;
const array = ["rock", "paper", "scissors"];
game()
