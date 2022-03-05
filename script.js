// SCISSORS, PAPER, ROCK GAME CODE BELOW:

// make an array for user picks
var choices = ["Rock", "Paper", "Scissors"];

// make an object to contain the variables for scores
var scores = {
    wins: 0,
    losses: 0,
    ties: 0
}

// make the function to playGame

function askToPlay() {
    // first alert do you want to play the game?
    // if YES, execute playGame function
    if (window.confirm("Would you like to play Scissors, Paper, Rock?")) {
        playGame();
    }
};

function playGame() {
    // playGame mechanics

    // asking for user input

    // convert user input through capitalise function (below) to spit out result named userPick
    var userInput = window.prompt("Choose Scissors, Paper, or Rock:");
    // if user cancels the prompt, end the game
        if (userInput === null) {
            return;
        }

    var userInput = userInput.toLowerCase();

    // make a function to capitalise the first letter of an INPUTTED string
    // NB: this function must be nested inside 'if' or it will throw an error after
    var userPick = capitaliseFirstLetter(userInput);
        function capitaliseFirstLetter(str) {
            let capitalised = str.charAt(0).toUpperCase() + str.slice(1);
            return capitalised;
        };

    // if user input (userPick) is NOT included in array 'choices', say 'invalid input'
    //if user doesn't input anything, same deal
    if (!choices.includes(userPick) || !userInput) {
        window.alert("Invalid input! Please try again.");
        playGame();
        return;
    }

    // calculate computer's pick -- base the length off the original choices array
    let computerPick = Math.floor(Math.random() * choices.length);
    //make sure to set new variable containing random number ^ attached to index of 'choices' array
    let computerChoice = choices[computerPick];

    //show the computer's pick
    window.alert("You chose " + userPick + " and the computer chose " + computerChoice + "!");

    // compare userPick to computerPick
    if (userPick === computerChoice) {
            window.alert("It's a tie!");
            scores.ties++;
    } else if (
        (userPick === "Rock" && computerChoice === "Scissors") ||
        (userPick === "Scissors" && computerChoice === "Paper") ||
        (userPick == "Paper" && computerChoice === "Rock")) {
            window.alert("You won!");
            scores.wins++;
    } else {
            alert("You lost!");
            scores.losses++;
    };

    // display the current tally. \n means line-break in the prompt window
    window.alert("Current game scores:\nWins: " + scores.wins + "\nLosses: " + scores.losses + "\nTies: " + scores.ties);

    // ask user if they want to play again
    if (window.confirm("Play again?")) {
        playGame();
    }
};

//call the function to start the game
askToPlay();



// PRACTICE: make a string input capitalise the first letter

// function capitaliseFirstLetter(str) {
//     const capitalised = str.charAt(0).toUpperCase() + str.slice(1);
//     return capitalised;
// }

// const string = prompt("type something");
// const result = capitaliseFirstLetter(string);

// alert(result);