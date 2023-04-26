import { CCell } from "../cell.model";
import { Colors } from "../colors.model";
import Logo from "../../src/assets/black-king.png";

export enum FigureNames {
  FIGURE = "Фигура",
  KING = "Король",
  KNIGHT = "Конь",
  PAWN = "Пешка",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "Слон",
}

export class CFigure {
  color: Colors;
  logo: typeof Logo | null;
  cell: CCell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: CCell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: CCell): boolean {
    if(target.figure?.color === this.color) {
      return false;
    }
    if(target.figure?.name === FigureNames.KING) {
      return false;
    }
    return true;
  }
  moveFigure(target:CCell) {

  }
}
