# rock-paper-scissors
rock paper scissors project from Odin


first draft contains separate functions to 

1. play a round of paper, scissors, rock 
2. prompt the user to make a valid choice
3. instruct the computer to make a choice

it doesn't work as intended. I think there is a logical error owing to my misunderstanding the concept of function callbacks

I declared the function playRound with the other functions as variables

I called playRound without setting any parameters


I could attempt to solve this by creating a new function, which will set the choices as variables, and call the round function with those.

or it might suffice to call playRound with playerSelection and computerSelection as input parameters
...
the latter worked, but only when the selection functions were called as functions, not as variables i.e. 

playRound (playerSelection(), computerSelection());

has the intended result

while 

playRound (playerSelection, computerSelection);

does not
