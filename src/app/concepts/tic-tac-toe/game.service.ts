import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class GameService {
    private lines: number[][][] = [];

    public createWinningLines(size: number) {
        const diagonel1 = [];
        const diagonel2 = [];
        for (let i = 0; i < size; i++) {
            const row = [];
            const col = [];
            for (let j = 0; j < size; j++) {
                row.push([i, j]); // horizontal lines
                col.push([j, i]); // vertical lines
            }
            this.lines.push(row); // add horizontal line
            this.lines.push(col); // add vertical line

            diagonel1.push([i, i]); // diagonal line 1
            diagonel2.push([i, size - i - 1]); // diagonal line 2
        }
        this.lines.push(diagonel1); // add diagonal line 1
        this.lines.push(diagonel2); // add diagonal line 2
    }

    // check win condition
    public checkWinCondition(
        board: (string | null)[][],
        player: string
    ): boolean {
        for (let line of this.lines) {
            if (line.every((indice) => board[indice[0]][indice[1]] === player)) {
                return true;
            }
        }
        return false;
    }
}
