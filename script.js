
function computerPlay() {
return array[Math.floor(Math.random() * array.length)];
}

function userPlay() {
return prompt('Choose: Rock, Paper or Scissors', 'Choose it! NOW!!');
}

function evaluation(playerselection, computerselection) {
    if (playerselection.toLowerCase() === computerselection.toLowerCase()) {
        console.log('Draw!');

    } else if (
    (playerselection.toLowerCase() == "rock" && computerselection.toLowerCase() == "scissors") ||      //VICTORIES
    (playerselection.toLowerCase() == "paper" && computerselection.toLowerCase() == "rock") || 
    (playerselection.toLowerCase() == "scissors" && computerselection.toLowerCase() == "paper")) {
        console.log("You win!");

    } else {
        console.log("You lose");
    }
}

const array = ['rock', 'paper', 'scissors'];
evaluation(userPlay(), computerPlay());