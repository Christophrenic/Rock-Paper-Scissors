array = ['rock', 'paper', 'scissors'];

let computerselection;
let playerselection;
computerPlay();
userPlay();
evaluation(playerselection, computerselection);

function computerPlay(computerselection) {
computerselection = array[Math.floor(Math.random() * array.length)];
}

function userPlay(playerselection) {
playerselection = prompt('Choose: Rock, Paper or Scissors', 'Choose it! NOW!!');
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