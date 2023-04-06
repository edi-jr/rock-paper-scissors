function start() {
  function game() {
    function playRound(userChoice, computerChoice) {
      switch (userChoice) {
        case "rock":
          if (computerChoice === "scissors") {
            console.log("You chose rock. Computer chose scissors. You won!");
            return "User";
          } else {
            console.log("You chose rock. Computer chose paper. You lost!");
            return "Computer";
          }
        case "paper":
          if (computerChoice === "rock") {
            console.log("You chose paper. Computer chose rock. You won!");
            return "User";
          } else {
            console.log("You chose paper. Computer chose scissors. You lost!");
            return "Computer";
          }
        default:
          if (computerChoice === "paper") {
            console.log("You chose scissors. Computer chose paper. You won!");
            return "User";
          } else {
            console.log("You chose scissors. Computer chose rock. You lost!");
            return "Computer";
          }
      }
    }

    function getComputerChoice() {
      const choices = ["rock", "paper", "scissors"];
      return choices[Math.floor(Math.random() * 3)];
    }

    let userChoice = "";
    while(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
      userChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    }
    const computerChoice = getComputerChoice();
    if(userChoice === computerChoice) {
      console.log(`You chose ${userChoice}. Computer chose ${computerChoice}. It's a tie!`);
    } else {
      const result = playRound(userChoice, computerChoice);
      return result;
    }
  }

  function playGame() {
    console.clear();
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
      let winner = game();
      if (winner === "User") {
        playerScore++;
      } else if (winner === "Computer") {
        computerScore++;
      }
      console.log(
        `Your score: ${playerScore}. Computer score: ${computerScore}`
      );
    }

    if (playerScore > computerScore) {
      console.log("You won the best of five!");
    } else {
      console.log("You lost the best of five!");
    }
  }

  playGame();
}