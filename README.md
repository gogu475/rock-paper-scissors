# rock-paper-scissors
rock paper scissors project from Odin

...

first commit 

wrote separate functions to 

1. play a round of paper, scissors, rock 
2. prompt the user to make a valid choice
3. instruct the computer to make a choice

it didn't work as intended. There was a logical error owing to my misunderstanding the concept of function callbacks (I declared the function playRound with the other functions as variables, and I called playRound without setting any parameters)

...

second commit

...

Solution to callback error: 

it sufficed to call playRound with playerSelection and computerSelection as input parameters, but only when the selection functions were called as functions, not as variables i.e. 

playRound (playerSelection(), computerSelection());

has the intended result

while 

playRound (playerSelection, computerSelection);

does not

...

third commit

... added function to play five round game

