import { CCell } from "./cell.model";
import { Colors } from "./colors.model";
import { CBishop } from "./figures/bishop.model";
import { CFigure } from "./figures/figure.model";
import { CKing } from "./figures/king.model";
import { CKnight } from "./figures/knight.model";
import { CPawn } from "./figures/pawn.model";
import { CQueen } from "./figures/queen.model";
import { CRook } from "./figures/rook.model";

export class CBoard {
  cells: CCell[][] = [];
  lostBlackFigures: CFigure[] = [];
  lostWhiteFigures: CFigure[] = [];
  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: CCell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new CCell(this, j, i, Colors.BLACK, null)); // ЧЕрнные
        } else {
          row.push(new CCell(this, j, i, Colors.WHITE, null)); // белые
        }
      }
      this.cells.push(row);
    }
  }

  public hightLightCells(selectedSell:CCell | null) {
    for(let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for(let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedSell?.figure?.canMove(target)
      }
    }
  }
  public getSell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new CPawn(Colors.BLACK, this.getSell(i, 1));
      new CPawn(Colors.WHITE, this.getSell(i, 6));
    }
  }
  private addKings() {
    new CKing(Colors.BLACK, this.getSell(4, 0));
    new CKing(Colors.WHITE, this.getSell(4, 7));
  }
  private addQueens() {
    new CQueen(Colors.BLACK, this.getSell(3, 0));
    new CQueen(Colors.WHITE, this.getSell(3, 7));
  }
  private addBishops() {
    new CBishop(Colors.BLACK, this.getSell(2, 0));
    new CBishop(Colors.BLACK, this.getSell(5, 0));
    new CBishop(Colors.WHITE, this.getSell(2, 7));
    new CBishop(Colors.WHITE, this.getSell(5, 7));
  }
  private addKnights() {
    new CKnight(Colors.BLACK, this.getSell(1, 0));
    new CKnight(Colors.BLACK, this.getSell(6, 0));
    new CKnight(Colors.WHITE, this.getSell(1, 7));
    new CKnight(Colors.WHITE, this.getSell(6, 7));
  }
  private addRooks() {
    new CRook(Colors.BLACK, this.getSell(0, 0));
    new CRook(Colors.BLACK, this.getSell(7, 0));
    new CRook(Colors.WHITE, this.getSell(0, 7));
    new CRook(Colors.WHITE, this.getSell(7, 7));
  }

  public addFigures() {
    this.addPawns();
    this.addKings();
    this.addQueens();
    this.addBishops();
    this.addKnights();
    this.addRooks();
  }
}
