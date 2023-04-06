function playGame() {
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

  const userChoice = prompt("Choose rock, paper or scissors");
  const computerChoice = getComputerChoice();
  const result = `You chose ${userChoice} and computer chose ${computerChoice}. ${playRound(userChoice.toLowerCase(), computerChoice)}`;
  console.log(result);
  return winner;
}