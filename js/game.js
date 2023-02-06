"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const scoreboard_1 = require("./scoreboard");
const utility_1 = require("./utility");
class Game {
    constructor(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this._scoreboard = new scoreboard_1.Scoreboard();
    }
    displayGame() {
        let gameForm = ``;
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += `
        <div class="form-group">
          <label for="answer${i}" id="answer${i}" class="col-sm-2 control-label">
            ${this.factor} x ${i} =
          </label>
          <div class="col-sm-1">
            <input type="text" class="form-control" id="answer" size="5" />
          </div>
        </div>
      `;
        }
        document.getElementById("game").innerHTML = gameForm;
        document.getElementById("calculate").removeAttribute("disabled");
    }
    calculateScore() {
        let score = 0;
        for (let i = 1; i < this.problemCount; i++) {
            const answer = Number((0, utility_1.getInputValue)(`answer${i}`));
            if (i * this.factor === answer) {
                score++;
            }
        }
        const result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor,
        };
        this._scoreboard.addResult(result);
        this._scoreboard.updateScoreboard();
        document.getElementById("calculate").setAttribute("disabled", "true");
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map