import { CCell } from "../cell.model";
import { Colors } from "../colors.model";
import { CFigure, FigureNames } from "./figure.model";
import blackLogo from "../../src/assets/black-bishop.png";
import whiteLogo from "../../src/assets/white-bishop.png";
export class CBishop extends CFigure {
  constructor(color: Colors, cell: CCell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: CCell): boolean {
    if(!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
