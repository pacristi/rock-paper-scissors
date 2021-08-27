function computerPlay() {
    var computerSelection = ["Rock", "Paper", "Scissors"];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Rock") {
            return "Its a tie!"
        }
        else if (computerSelection == "Paper") {
            return "You Lose!"
        }
        else if (computerSelection == "Scissors") {
            return "You Win!"
        }
    }

    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Paper") {
            return "Its a tie!"
        }
        else if (computerSelection == "Scissors") {
            return "You Lose!"
        }
        else if (computerSelection == "Rock") {
            return "You Win!"
        }
    }

    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Scissors") {
            return "Its a tie!"
        }
        else if (computerSelection == "Rock") {
            return "You Lose!"
        }
        else if (computerSelection == "Paper") {
            return "You Win!"
        }
    }

    else {
        return "Not a valid input."
    }
}

function game() {
    var playerPoints = 0;
    var computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt();
        var result = playRound(playerSelection, computerPlay());
        if (result == "You Win!") {
            playerPoints++;
        }
        else if (result == "You Lose!") {
            computerPoints++;
        }
        console.log(result + " Your points: " + playerPoints + " Computer points:" + computerPoints);
    }
}