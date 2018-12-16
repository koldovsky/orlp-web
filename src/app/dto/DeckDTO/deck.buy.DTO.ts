import {Link} from '../link';

export class DeckBuyDTO {
  points: number;
  isBought: boolean;

  constructor(points: number, isBought: boolean) {
    this.points = points;
    this.isBought = isBought;
  }
}
