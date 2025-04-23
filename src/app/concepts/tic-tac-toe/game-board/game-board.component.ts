import { reset } from "./../../ngrx-store/store/counter-store/counter.actions";
import { FormsModule } from "@angular/forms";
import { GameService } from "./../game.service";
import { Component, inject } from "@angular/core";

const Turn = {
  PLAYER1: true,
  PLAYER2: false,
};

@Component({
  selector: "app-home",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./game-board.component.html",
  styleUrl: "./game-board.component.scss",
})
export class GameBoardComponent {
  player1!: string;
  player2!: string;
  boardSize = 3;
  isGameStarted = false;
  isGameOver = false;
  numberOfMoves!: number;
  whosTurn!: boolean; // true for player1, false for player2
  Turn = Turn;
  // board with values
  board!: (string | null)[][];

  private gameService = inject(GameService);

  startGame() {
    this.isGameStarted = true;
    this.numberOfMoves = Math.pow(this.boardSize, 2);
    this.whosTurn =
      Math.floor(Math.random() * 10) % 2 === 0 ? Turn.PLAYER1 : Turn.PLAYER2;

    this.board = Array.from({ length: this.boardSize }, () =>
      Array(this.boardSize).fill(null)
    );

    this.gameService.createWinningLines(this.boardSize);
  }

  makeMove(row: number, col: number) {
    if (this.board[row][col] !== null || this.isGameOver) return;

    this.numberOfMoves--;
    const player = this.whosTurn === Turn.PLAYER1 ? "X" : "O";
    this.board[row][col] = player;
    const isWin = this.gameService.checkWinCondition(this.board, player);
    if (isWin) {
      this.isGameOver = true;
      return;
    }
    if (this.numberOfMoves === 0) return;
    this.whosTurn = !this.whosTurn; // switch turn
  }

  resetGame() {
    this.player1 = "";
    this.player2 = "";
    this.boardSize = 3;
    this.isGameStarted = false;
    this.isGameOver = false;
  }
}
