//Initialze the scores
let playerScore = 0;
let computerScore = 0;

// repeat the game 5 times report winner at the end.
for (let i=0; i<5; i++) {
    game();    
}
(playerScore == computerScore) ? console.log("draw") : (playerScore > computerScore) ? console.log("You win!") : console.log("You lose");

//rock paper and scissors game, keeps score.  
function game() {
    
    //the player chooses (rock,paper,scissors) **input1
    let playerSelection = prompt("Enter rock, paper or scissor");
    playerSelection = playerSelection.toLowerCase();

    // the pc chooses (rock,paper,scissors) **input 2
    const options = ["rock", "paper", "scissor"];
    random = Math.floor(Math.random()*3);
    let computerSelection = options[random];

    // the program compares the two inputs to determine a winner
    // show the the inputs and the winner **output
    function playRound(playerSelection,computerSelection) {
        
        const round = `${playerSelection} vs ${computerSelection}`
        const draw = `${round} draw \n playerScore = ${playerScore} \n computerScore = ${computerScore}`
        
        let lose = () => {
            computerScore +=1;
            return `${round} you lose! \n playerScore = ${playerScore} \n computerScore = ${computerScore}`;
        }

        let win = () => {
            playerScore +=1;
            return `${round} you win! \n playerScore = ${playerScore} \n computerScore = ${computerScore}`;
        }         
        
        switch(round) {
            case "rock vs rock":
                return draw;
            case "paper vs paper":
                return draw; 
            case  "scissor vs scissor":
                return draw;
            case "rock vs paper":
                return lose();
            case "rock vs scissor":
                return win();
            case "paper vs scissor":
                return lose();
            case "paper vs rock":
                return win();
            case "scissor vs rock":
                return lose();
            case "scissor vs paper":
                return win();
        }
    }
    console.log(playRound(playerSelection, computerSelection));    
}