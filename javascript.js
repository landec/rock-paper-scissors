function getComputerChoice() {
    let choice =  Math.floor(Math.random() * 3);
    let hand = "";
    if (choice == 0) {
        hand = "rock";
    } else if (choice == 1) {
        hand = "paper";
    } else {hand = "scissors";}
        
    return [choice, hand]
}

function getHumanChoice() {
    let hand = prompt("Rock \nPaper \nScissors").toLowerCase();
    let choice;
    if (hand == "rock") {
        choice = 0;
    } else if (hand == "paper") {
        choice = 1;
    } else if (hand == "scissors") {
        choice = 2;
    }
    return [choice, hand];
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;

    function playRound(humanChoice, computerChoice) {
        console.log("Human: ", humanChoice[1]);
        console.log("Computer: ", computerChoice[1]);

        if (humanChoice[0] > computerChoice[0]) {
            console.log("You win");
            ++humanScore;
        } else if (humanChoice[0] == computerChoice[0]) {
            console.log("It's a Draw");
        } else { 
            console.log(`You Lose! ${computerChoice[1]} beats ${humanChoice[1]}`);
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
