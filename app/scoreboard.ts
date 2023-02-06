import { Result } from "./result";

export class Scoreboard {
  private _results: Result[] = [];

  public addResult(newResult: Result): void {
    this._results.push(newResult);
  }

  public updateScoreboard(): void {
    let output = `<h2>Scoreboard</h2>`;

    this._results.forEach((result) => {
      output += `
        <h4>
          ${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}
        </h4>
      `;
    });

    // document.getElementById("scores")!.insertAdjacentHTML("afterbegin", output);
    document.getElementById("scores")!.innerHTML = output;
  }
}
