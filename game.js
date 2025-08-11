let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === "rock") {
        if(computerChoice === "rock") {
            alert("Tie!");
            console.log("Tie!");
        }
        else if(computerChoice === "paper") {
            alert("You lose! Paper beats rock!");
            console.log("You lose! Paper beats rock!");

            computerScore++;
        }
        else {
            alert("You win! Rock beats scissors!");
            console.log("You win! Rock beats scissors!");

            humanScore++;
        }
    }
    else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            alert("You win! Paper beats rock!");
            console.log("You lose! Paper beats rock!");

            humanScore++;
        }
        else if(computerChoice === "paper") {
            alert("Tie!");
        }
        else {
            alert("You lose! Scissors beats paper!");
            console.log("You lose! Scissors beats paper!");

            computerScore++;
        }
    }
    else if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            alert("You lose! Rock beats scissors!");
            console.log("You lose! Rock beats scissors!");

            computerScore++;
        }
        else if(computerChoice === "paper") {
            alert("You win! Scissors beats paper!");
            console.log("You win! Scissors beats paper!");

            humanScore++;
        }
        else {
            alert("Tie!");
            console.log("Tie!");
        }
    }
    else {
        alert("You did not type any of the available choices.");
        playRound(getHumanChoice(), getComputerChoice());
    }
}

function getComputerChoice() {
    const random = Math.random();
    if(random <= 0.33)
        return "rock";
    else if (random > 0.33 && random <= 0.66)
        return "paper";
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, paper, scissors?");
}

//**Main**\\
for(let i = 0; i<5; i++){
    playRound(getHumanChoice(), getComputerChoice())
}

//Person wins
if(humanScore > computerScore){
    alert("YOU WIN THE GAME!!! Your Score: " + humanScore + " | " + "Computer Score: " + computerScore);
    console.log("YOU WIN THE GAME!!! Your Score: " + humanScore + " | " + "Computer Score: " + computerScore);
}
//Computer Wins
else if (humanScore < computerScore){
    alert("YOU LOSE THE GAME!!! Your Score: " + humanScore + " | " + "Computer Score: " + computerScore);
    console.log("YOU LOSE THE GAME!!! Your Score: " + humanScore + " | " + "Computer Score: " + computerScore);
}
//Tie
else {
    alert("YOU TIED!!! Your Score: " + humanScore + " | " + "Computer Score: " + computerScore);
    console.log("YOU TIED!!! Your Score: " + humanScore + " | " + "Computer Score: " + computerScore);
}