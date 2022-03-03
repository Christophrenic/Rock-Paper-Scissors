let playerScore = 0;
let computerScore = 0;
let draw = 0;
const array = ["rock", "paper", "scissors"];
game()

function computerPlay() {                                 // Makes choice randomly from the array and returns it.
return array[Math.floor(Math.random() * array.length)];
}

function userPlay() {                                    // Collects user input from prompt and returns it.
return prompt('Choose: Rock, Paper or Scissors', 'Choose it! NOW!!');
}

function evaluation(playerselection, computerselection) { 
    if (playerselection.toLowerCase() === computerselection.toLowerCase()) {
        console.log('Draw!');
        draw++;
        
    } else if (
    (playerselection.toLowerCase() == "rock" && computerselection.toLowerCase() == "scissors") ||      //Evaluates winner and adds to either playerscore or computerscore or draw.
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
        evaluation(userPlay(), computerPlay()); //This collects return from userPlay & computerPLay and takes their return values as paramaters for evaluation function.
        i++;
    } if (playerScore > computerScore) {
        alert(`You win! Your score: ${playerScore} Computer score: ${computerScore} Draws: ${draw}`)            //Plays 5 rounds of the game and declares winner and loser.
        return;
    } else if (computerScore > playerScore); {
        alert(`You lose! Your score: ${playerScore}, Computer score: ${computerScore} Draws: ${draw}`);
    }
        alert("It's a draw!");
        return;
}
        
