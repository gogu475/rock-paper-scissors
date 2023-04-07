// testing reference in index.html
// alert("hello world!")

// game instructions

// the game is played entirely from the console
// basic variables will be defined in the script
// user inputs will be text typed into the console
// a function will play a single round of the game
// the function will take two parameters 'playerSelection' and 'computerSelection'

// first game function pseudocode
// 
// define a function for a single round, with parameters 'playerSelection' and 'computerSelection'.
// if playerSelection and computerSelection are the same declare a draw 
// if 'playerSelection' is paper and 'computerSelection' is rock
// declare user the winner because paper beats rock
// if 'playerSelection' is paper and 'computerSelection' is scissors
// declare computer the winner because scissors beats paper
// if 'playerSelection' is rock and 'computerSelection' is scissors
// declare user the winner because rock beats scissors
// if 'playerSelection' is rock and 'computerSelection' is paper
// declare computer the winner because paper beats rock
// if 'playerSelection' is scissors and 'computerSelection' is paper
// declare user the winner because scissors beats paper
// if 'playerSelection' is scissors and 'computerSelection' is rock
// declare computer the winner because rock beats scissors

// alternate game function pseudocode with additional variable
// 
// define a variable called "winner"
// if playerSelection and computerSelection are the same 
// call nobody the winner, 
// announce a draw
// if 'playerSelection' is paper and 'computerSelection' is rock 
// or 
// if 'playerSelection' is rock and 'computerSelection' is scissors 
// or
// if 'playerSelection' is scissors and 'computerSelection' is paper
// call user the winner
// announce that playerSelection beats computerSelection, and that the user is the winner 
// otherwise 
// call computer the winner
// announce that computerSelection beats playerSelection, and that the computer is the winner


function playRound(playerSelection, computerSelection) {
    let winner = '';
    if (playerSelection === computerSelection) {
        console.log('Draw! Nobody Wins.');
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(playerSelection + ' beats ' + computerSelection + '. Player wins round.');
        winner = 'player'
    }
    else {
        console.log(computerSelection + ' beats ' + playerSelection + '. Computer wins round.');
        winner = 'computer'
    }
    return winner;
}


// function to set playerSelection
// 
// declare a variable playerInput, with no value
// declare a variable result
// prompt user to input 'rock', 'paper', or 'scissors', store in playerInput
// convert the value of playerInput to lowercase
// if the value of playerInput is 'rock', 'paper', or 'scissors', set the value of result to the value of playerInput
// and return result
// if not prompt user for playerInput again

function playerSelection () {
    let playerInput = '';
    playerInput = prompt('Rock, Paper, or Scissors?', '' );
    playerInput = playerInput.toLowerCase();
    while (playerInput !== 'rock' && playerInput !== 'paper' && playerInput !== 'scissors') {
    playerInput = prompt('Invalid input. Please enter Rock, Paper, or Scissors (case-insensitive)', '' );
    playerInput = playerInput.toLowerCase();
    }
    return playerInput;
}

// playerSelection ()

// function to set computerSelection
// 
// declare a variable randomNumber
// assign randomNumber a random value between 1 & 3
// if the randomNumber is 1 return rock
// if the randomNumber is 2 return paper
// if the randomNumber is 3 return scissors

function computerSelection () {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    }
    else if (randomNumber === 2) {
        return 'scissors';
    } else {
        return 'paper';
    }
}
// function call to play a round
// note that 
// playRound (playerSelection, computerSelection);
// did not call the selection functions

// playRound (playerSelection(), computerSelection());

// here I have been instructed to create a new function called game

// this will envelop the previous playRound function call
// (i will need to add a line to the playRound function which declares a winner)


// the game function will 
// declare a variable for the player's score, and set it to 0
// declare a variable for the computer's score, and set it to 0
// call the playRound function five times
// after every round
// increase the winner's score by 1
// after five rounds
// check who has the highest score and declare them the winner
// or if the score is even, declare a draw

function playGame () {
    let latestWinner
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i<5; i++) {
        latestWinner = playRound (playerSelection(), computerSelection());
        // console.log (`latest winner is ${latestWinner}`);
        if (latestWinner === 'player') {
            playerScore += 1;
        }
        else if (latestWinner === 'computer') {
            computerScore +=1;
        }
    }
    if (playerScore > computerScore) {
        console.log(`Player ${playerScore} : ${computerScore} Computer. Player wins!`);
    } else if (playerScore < computerScore) {
        console.log(`Player ${playerScore} : ${computerScore} Computer. Computer wins!`);
    } else if (computerScore === playerScore) {
        console.log(`Player ${playerScore} : ${computerScore} Computer. Draw!`);
    } else {
        console.log(`Error!`);
    }
}

playGame();

