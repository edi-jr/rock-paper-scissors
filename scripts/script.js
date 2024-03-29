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
  scoreboardText.textContent = "";
  scoreboardNumbers.textContent = "";
  if(winner === "User") {
    userScore++;
    scoreboardText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else if (winner === "Computer") {
    computerScore++;
    scoreboardText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
  } else {
    scoreboardText.textContent = "It's a tie!";
  }
  scoreboardNumbers.textContent = `Your score: ${userScore}. Computer score: ${computerScore}.`;
  updateChoices(userChoice, computerChoice)
  if(userScore === 5 || computerScore === 5) {
    endGame();
  }
}

function updateChoices(userChoice, computerChoice) {
  scoreboardPlayerChoice.textContent = getEmoji(userChoice);
  scoreboardComputerChoice.textContent = getEmoji(computerChoice);
}

function getEmoji(text) {
  if (text == "rock") {
    return "✊";
  } else if(text == "paper") {
    return "✋";
  } else {
    return "✌️";
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
  result.style.display = "flex";
}

function playAgain() {
  userScore = 0;
  computerScore = 0;
  result.textContent = "";
  result.style.display = "none";
  scoreboardText.textContent = "";
  scoreboardNumbers.textContent = "";
  buttons.forEach(button => button.disabled = false);
  scoreboardText.textContent = "Click the buttons bellow to start.";
  scoreboardNumbers.textContent = "Your score: 0. Computer score: 0.";
  scoreboardPlayerChoice.textContent = "❔";
  scoreboardComputerChoice.textContent = "❔";
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

const scoreboard = document.querySelector("#scoreboard");
const scoreboardText = document.querySelector("#text");
const scoreboardChoices = document.querySelector("#choices");
const scoreboardPlayerChoice = document.querySelector("#player");
const scoreboardComputerChoice = document.querySelector("#computer");
const scoreboardNumbers= document.querySelector("#numbers");
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
