window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    function game() {
      let winner = "";

      function playRound(userChoice, computerChoice) {
        if (userChoice == computerChoice) {
          return "It's a tie!";
        }
        switch (userChoice) {
          case "rock":
            if (computerChoice === "scissors") {
              winner = "User";
              return "You won! Rock beats scissors!";
            } else {
              winner = "Computer";
              return "You lost! Paper beats rock!";
            }
          case "paper":
            if (computerChoice === "rock") {
              winner = "User";
              return "You won! Paper beats rock!";
            } else {
              winner = "Computer";
              return "You lost! Scissors beats paper!";
            }
          default:
            if (computerChoice === "paper") {
              winner = "User";
              return "You won! Scissors beats paper!";
            } else {
              winner = "Computer";
              return "You lost! Rock beats scissors!";
            }
        }
      }

      function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
      }

      const userChoice = prompt("Choose rock, paper or scissors").toLowerCase();
      const computerChoice = getComputerChoice();
      const result = `You chose ${userChoice} and computer chose ${computerChoice}. ${playRound(userChoice, computerChoice)}`;
      console.log(result);
      return winner;
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

    let play = true;

    while (play) {
      playGame();
      play = confirm("Play again?");
    }
  });
};