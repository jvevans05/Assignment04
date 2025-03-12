//declaring some initial variables
let userWins = 0
let compWins = 0
let playAgain

//play more than once, maybe.
do { game() } while (playAgain == 'y') 


function game() {

let userChoice
let compChoice

//User makes a choice. 
userChoice = prompt('Which hand will you throw (rock, paper, or scissors)?').toLowerCase()

//force the user choice to be on of our strings
while (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
    userChoice = prompt('Please enter only \'rock\', \'paper\', or \'scissors\'.').toLowerCase()
}

//Computer makes a choice by splitting a rand into equal sections (and nothing else).
if (compWins > userWins) {
    let compMath = Math.random()

    if (compMath < 0.33) {
        compChoice = 'rock'
    }
    else if (compMath > 0.66){
        compChoice = 'scissors'
    }
    else {
        compChoice = 'paper'
    }   
    //debug
    //console.log('not cheating', compMath, compChoice)

}
else {

    if (userChoice == 'rock') {
            compChoice = 'paper'
        }
        else if (userChoice == 'paper') {
            compChoice = 'scissors'
        }
        else {
            compChoice = 'rock'
        }
        //debug
        //console.log('cheating', compChoice)

}

//A conditional determines who wins. check for tie first to make following if statments shorter.
//use a switch to check user choice, choose the outcome, increment win counters.

if (userChoice == compChoice) {
    alert(`It's a tie! You both chose ${userChoice}.`)
}
else {

    switch (userChoice) {

        case 'rock':
            if (compChoice == 'paper') {
                alert(`You lost! The computer chose ${compChoice}.`)
                compWins++
            }
            else {
                alert(`You win! The computer chose ${compChoice}.`)
                userWins++
            }
            break

        case 'paper':
            if (compChoice == 'scissors') {
                alert(`You lost! The computer chose ${compChoice}.`)
                compWins++
            }
            else {
                alert(`You win! The computer chose ${compChoice}.`)
                userWins++
            }
            break

        case 'scissors':
            if (compChoice == 'rock') {
                alert(`You lost! The computer chose ${compChoice}.`)
                compWins++
            }
            else {
                alert(`You win! The computer chose ${compChoice}.`)
                userWins++
            }
            break

    }

}

//debug
//console.log('user', userWins, 'comp', compWins)

//the eternal question
playAgain = prompt('Would you like to play again?', 'y')

}