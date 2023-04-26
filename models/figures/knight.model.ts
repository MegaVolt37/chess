import { CCell } from "../cell.model";
import { Colors } from "../colors.model";
import { CFigure, FigureNames } from "./figure.model";
import blackLogo from "../../src/assets/black-knight.png";
import whiteLogo from "../../src/assets/white-knight.png";

export class CKnight extends CFigure {
  constructor(color: Colors, cell: CCell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }

  canMove(target: CCell): boolean {
    if(!super.canMove(target)) {
      return false;
    }
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);
    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}