const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: null,
  aiHand: null,
};

const hands = [...document.querySelectorAll(".select img")];
const btn = document.querySelector(".start");

function handSelection() {
  game.playerHand = this.dataset.option;
  //console.log(game.playerHand);
  hands.forEach((hand) => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 6px pink";
}

function checkResult(player, ai) {
  if (player === ai) {
    return "draw";
  } else if (
    (player === "paper" && ai === "rock") ||
    (player === "rock" && ai === "scissors") ||
    (player === "scissors" && ai === "paper")
  ) {
    return "win";
  } else {
    return "loss";
  }
}

function computerChoice() {
  const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
  return aiHand;
}

function startGame() {
  if (!game.playerHand) {
    alert("Choose hand");
    return;
  }
  game.aiHand = computerChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  console.log(gameResult);
}

hands.forEach((hand) => hand.addEventListener("click", handSelection));

btn.addEventListener("click", startGame);
