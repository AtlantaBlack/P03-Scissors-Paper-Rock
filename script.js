
// function myFirstFunction() {
//     var x = 5;
//     alert(x * 2);
// }

// myFirstFunction();


// function alertDouble(num) {
//     alert(num * 2);
// }

// alertDouble(18);


// function alertMultiplied(num1, num2) {
//     alert(num1 * num2);
// }

// alertMultiplied(3, 5);
// alertMultiplied(8, 21);

// function introduce() {
//     return("Hello, I'm Ophelia.");
// }

// introduce();

// function triple(num) {
//     return(num * 3);
// }

// alert( triple(7) );

/*

var options = ['R', 'P', 'S']

var wins = 0;
var losses = 0;
var ties = 0;

var result = {
    wins: 0,
    losses: 0,
    ties: 0,
}

function playGame() {
    var userChoice = prompt("Enter R, P or S");
    userChoice = userChoice.toUpperCase();

    if (!options.includes(userChoice)) {
        alert("Invalid input " + userChoice);
        playGame();
        return;
    }

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    alert("userChoice=" + userChoice + " The computer chose " + computerChoice);

    if (userChoice === computerChoice) {
        // tie
        result.ties++;
    } else if (userChoice === "R" && computerChoice === "S") {
        result.wins++;
    } else if (userChoice === "S" && computerChoice === "P") {
        result.wins++;
    } else if (userChoice === "P" && computerChoice === "R") {
        result.wins++;
    } else {
        result.losses++;
    }

    // shorthand way, using OR operator
    
    // if (userChoice === computerChoice) {
    //     result.ties++;
    // } else if (
    //     (userChoice === "R" && computerChoice === "S") || 
    //     (userChoice === "S" && computerChoice === "P") ||
    //     (userChoice === "P" && computerChoice === "R")) {
    //     result.wins++;
    // } else {
    //     result.losses++;
    // }

    alert("Stats:\n\nWins: " + result.wins + "\nLosses: " + result.losses + "\nTies: " + result.ties)

    if (confirm("Would you like to play again?")) {
        playGame();
    }
}

// run the game
playGame();

*/

// SCISSORS, PAPER, ROCK GAME CODE BELOW:

// make an array for user picks
var choices = ["Rock", "Paper", "Scissors"];

// make an object to contain the variables for scores
var scores = {
    wins: 0,
    losses: 0,
    ties: 0
}

// practice: MAKE A STRING INPUT DO A CAPITAL FIRST LETTER

// function capitaliseFirstLetter(str) {
//     const capitalised = str.charAt(0).toUpperCase() + str.slice(1);
//     return capitalised;
// }

// const string = prompt("type something");
// const result = capitaliseFirstLetter(string);

// alert(result);


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
