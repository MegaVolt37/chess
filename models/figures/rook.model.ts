import { CCell } from "../cell.model";
import { Colors } from "../colors.model";
import { CFigure, FigureNames } from "./figure.model";
import blackLogo from "../../src/assets/black-rook.png";
import whiteLogo from "../../src/assets/white-rook.png";

export class CRook extends CFigure {
  constructor(color: Colors, cell: CCell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: CCell): boolean {
    if(!super.canMove(target)) {
      return false;
    }
    if(this.cell.isEmptyVertical(target)) {
      return true;
    }
    if(this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    return false;
  }
}