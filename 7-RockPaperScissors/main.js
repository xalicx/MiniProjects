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

function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector(".numbers span").textContent = ++gameSummary.numbers;

  if (result === "win") {
    document.querySelector(".wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent =
      "you won!:)";
    document.querySelector('[data-summary="who-win"]').style.color = "green";
  } else if (result === "loss") {
    document.querySelector(".losses span").textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      "AI won :/";
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  } else {
    document.querySelector(".draws span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent =
      "it's a draw :<";
    document.querySelector('[data-summary="who-win"]').style.color = "orange";
  }
}

function endGame() {
  document.querySelector(`[data-option = ${game.playerHand}]`).style.boxShadow =
    "";
  game.playerHand = "";
}

function startGame() {
  if (!game.playerHand) {
    alert("Choose hand");
    return;
  }
  game.aiHand = computerChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  console.log(gameResult);
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}

hands.forEach((hand) => hand.addEventListener("click", handSelection));

btn.addEventListener("click", startGame);
