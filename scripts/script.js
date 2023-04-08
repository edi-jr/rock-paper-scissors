function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    updateScoreboard("Tie", userChoice, computerChoice);
    return;
  }
  switch (userChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        updateScoreboard("User", userChoice, computerChoice);
      } else {
        updateScoreboard("Computer", userChoice, computerChoice);
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        updateScoreboard("User", userChoice, computerChoice);
      } else {
        updateScoreboard("Computer", userChoice, computerChoice);
      }
      break;
    default:
      if (computerChoice === "paper") {
        updateScoreboard("User", userChoice, computerChoice);
      } else {
        updateScoreboard("Computer", userChoice, computerChoice);
      }
      break;
  }
}

function updateScoreboard(winner, userChoice, computerChoice) {
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  scoreboardText.textContent = "";
  scoreboardNumbers.textContent = "";
  if(winner === "User") {
    userScore++;
    p.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else if (winner === "Computer") {
    computerScore++;
    p.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
  } else {
    p.textContent = "It's a tie!";
  }
  scoreboardText.appendChild(p);
  p1.textContent = `Your score: ${userScore}. Computer score: ${computerScore}.`;
  scoreboardNumbers.appendChild(p1);

  if(userScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  const p = document.createElement("p");
  const button = document.createElement("button");
  button.textContent = "Play again";
  button.addEventListener("click", playAgain);
  buttons.forEach(button => button.disabled = true);
  p.textContent = userScore > computerScore ? "You won the game!" : "You lost the game!";
  result.appendChild(p);
  result.appendChild(button);
}

function playAgain() {
  userScore = 0;
  computerScore = 0;
  result.textContent = "";
  scoreboardText.textContent = "";
  scoreboardNumbers.textContent = "";
  buttons.forEach(button => button.disabled = false);
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  p.textContent = "Click the buttons bellow to start.";
  p1.textContent = "Your score: 0. Computer score: 0.";
  scoreboardText.appendChild(p);
  scoreboardNumbers.appendChild(p1);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

const scoreboard = document.querySelector("#scoreboard");
const scoreboardText = scoreboard.children[0];
const scoreboardNumbers= scoreboard.children[1];
const buttons = document.querySelectorAll("#buttons > *");
const result = document.querySelector("#result");
let userScore = 0;
let computerScore = 0;

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    let computerChoice = getComputerChoice();
    playRound(button.id, computerChoice);
  })
);
