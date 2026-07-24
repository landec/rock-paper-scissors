function getComputerChoice() {
    let choice =  Math.floor(Math.random() * 3);
    let hand = "";
    if (choice == 0) {
        hand = "rock";
    } else if (choice == 1) {
        hand = "paper";
    } else {hand = "scissors";}
        
    return hand;
}

function getHumanChoice() {
    let hand = prompt("Rock \nPaper \nScissors").toLowerCase();
    return hand;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;

    function playRound(humanChoice, computerChoice) {
        console.log("Human: ", humanChoice);
        console.log("Computer: ", computerChoice);

        if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win");
            ++humanScore;
        } else if (humanChoice == computerChoice) {
            console.log("It's a Draw");
        } else { 
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            ++computerScore;
        }
        console.log("Human Score: ", humanScore);
        console.log("Computer Score: ", computerScore);
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        
        console.log(`Rounds: ${--rounds}/5`);
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        if (rounds == 0) {
            if (humanScore > computerScore) {
                console.log("You Are The Winner!");
            } else if (humanScore == computerScore) {
                console.log("It's a Draw");
            } else {console.log("You Lost!");}
        }
    }
}

playGame()
