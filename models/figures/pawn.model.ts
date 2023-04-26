import { CCell } from "../cell.model";
import { Colors } from "../colors.model";
import { CFigure, FigureNames } from "./figure.model";
import blackLogo from "../../src/assets/black-pawn.png";
import whiteLogo from "../../src/assets/white-pawn.png";

export class CPawn extends CFigure {
  isFirstStep: boolean = true;

  constructor(color: Colors, cell: CCell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: CCell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection =
      this.cell.figure?.color === Colors.BLACK ? 2 : -2;
    if (
      (target.y === this.cell.y + direction ||
        (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
      target.x === this.cell.x &&
      this.cell.board.getSell(target.x, target.y).isEmpty()
    ) {
      return true;
    }
    if (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }
    return false;
  }

  moveFigure(target: CCell): void {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
