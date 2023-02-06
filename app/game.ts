import { Scoreboard } from "./scoreboard";
import { Result } from "./result";
import { Player } from "./player";
import { getInputValue, logger } from "./utility";

export class Game {
  private _scoreboard: Scoreboard = new Scoreboard();

  constructor(
    public player: Player,
    public problemCount: number,
    public factor: number
  ) {}

  displayGame(): void {
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

    // Adds game to page
    document.getElementById("game")!.innerHTML = gameForm;

    // enable the calculate score button
    document.getElementById("calculate")!.removeAttribute("disabled");
  }

  calculateScore(): void {
    let score: number = 0;
    // loop through inputs and calculate the number that are correct
    for (let i = 1; i < this.problemCount; i++) {
      const answer = Number(getInputValue(`answer${i}`));

      if (i * this.factor === answer) {
        score++;
      }
    }

    // Create and add new Result object to scoreboard
    const result: Result = {
      playerName: this.player.name,
      score: score,
      problemCount: this.problemCount,
      factor: this.factor,
    };
    this._scoreboard.addResult(result);
    this._scoreboard.updateScoreboard();

    // disable button
    document.getElementById("calculate")!.setAttribute("disabled", "true");
  }
}
