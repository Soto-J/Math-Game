"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
const game_1 = require("./game");
const utility_1 = require("./utility");
const startGameBtn = document.getElementById("startGame");
const calculateScoreBtn = (document.getElementById("calculate"));
let newGame;
startGameBtn.addEventListener("click", () => {
    const newPlayer = new player_1.Player();
    newPlayer.name = (0, utility_1.getInputValue)("playerName");
    const problemCount = Number((0, utility_1.getInputValue)("problemCount"));
    const factor = Number((0, utility_1.getInputValue)("factor"));
    newGame = new game_1.Game(newPlayer, problemCount, factor);
    newGame.displayGame();
});
calculateScoreBtn.addEventListener("click", () => {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map