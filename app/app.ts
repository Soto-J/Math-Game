import { Player } from "./player";
import { Game } from "./game";
import { getInputValue } from "./utility";

const startGameBtn = <HTMLButtonElement>document.getElementById("startGame");
const calculateScoreBtn = <HTMLButtonElement>(
  document.getElementById("calculate")
);
let newGame: Game;

// start game
startGameBtn!.addEventListener("click", () => {
  const newPlayer = new Player();
  newPlayer.name = getInputValue("playerName");

  const problemCount = Number(getInputValue("problemCount"));
  const factor = Number(getInputValue("factor"));

  newGame = new Game(newPlayer, problemCount, factor);
  newGame.displayGame();
});

// calculate score
calculateScoreBtn.addEventListener("click", () => {
  newGame.calculateScore();
});
