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
    // let winner = '';
    if (playerSelection === computerSelection) {
        console.log('Draw! Nobody Wins.');
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log('You WIN! ' + playerSelection + ' beats ' + computerSelection);
    }
    else {
        console.log('You LOSE! ' + computerSelection + ' beats ' + playerSelection);
    }
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

playRound (playerSelection(), computerSelection());
