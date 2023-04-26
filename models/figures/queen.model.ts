import { CCell } from "../cell.model";
import { Colors } from "../colors.model";
import { CFigure, FigureNames } from "./figure.model";
import blackLogo from "../../src/assets/black-queen.png";
import whiteLogo from "../../src/assets/white-queen.png";

export class CQueen extends CFigure {
  constructor(color: Colors, cell: CCell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: CCell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
