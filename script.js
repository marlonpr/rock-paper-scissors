//Initialize the scores
let playerScore = 0;
let computerScore = 0;
let newGame = false;

//the player chooses (Rock,Paper,Scissor) **input1
let playerSelection = ""; 

const buttons = document.querySelectorAll('button');

function launchGame(e) {
    playerSelection = this.textContent;
    game();
    e.stopPropagation();
}

buttons.forEach(button => button.addEventListener('click', launchGame));
  

//Rock Paper and Scissor game, keeps score.  
function game() {  

    // the pc chooses (Rock,Paper,Scissor) **input 2
    const options = ["Rock", "Paper", "Scissor"];
    random = Math.floor(Math.random()*3);
    let computerSelection = options[random];

    // the program compares the two inputs to determine a winner
    // show the the inputs and the winner **output
    function playRound(playerSelection,computerSelection) {

        if(playerScore == 0 && computerScore == 0 && newGame) {
            container.textContent = "";
            winner.textContent = "";
            newGame = false;
        }
        
        const round = `${playerSelection} vs ${computerSelection}`
        const draw = `${round}, draw!  playerScore = ${playerScore}  computerScore = ${computerScore}`
        
        let lose = () => {
            computerScore +=1;
            return `${round}, you lose!  playerScore = ${playerScore}  computerScore = ${computerScore}`;
        }

        let win = () => {
            playerScore +=1;
            return `${round}, you win!  playerScore = ${playerScore}  computerScore = ${computerScore}`;
        }         
        
        switch(round) {
            case "Rock vs Rock":
                return draw;
            case "Paper vs Paper":
                return draw; 
            case  "Scissor vs Scissor":
                return draw;
            case "Rock vs Paper":
                return lose();
            case "Rock vs Scissor":
                return win();
            case "Paper vs Scissor":
                return lose();
            case "Paper vs Rock":
                return win();
            case "Scissor vs Rock":
                return lose();
            case "Scissor vs Paper":
                return win();
        }
    }
    
    const container = document.querySelector('#container');
    const winner = document.querySelector('#winner')

    const content = document.createElement('p');
    content.textContent = playRound(playerSelection,computerSelection);
    
    container.appendChild(content);

    if(playerScore == 5) {
        container.textContent = "";
        container.appendChild(content);
        winner.textContent = "Player Win!"
        playerScore = 0;
        computerScore = 0;
        newGame = true;
    }   else if(computerScore == 5) {
        container.textContent = "";
        container.appendChild(content);
        winner.textContent = "Computer Win!"
        playerScore = 0;
        computerScore = 0;
        newGame = true;
    }

}




/* repeat the game 5 times report winner at the end.
for (let i=0; i<5; i++) {
    game();    
}
(playerScore == computerScore) ? console.log("draw") : (playerScore > computerScore) ? console.log("You win!") : console.log("You lose");
*/