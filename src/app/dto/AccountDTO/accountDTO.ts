import {Link} from "../link";
import {RememberingLevelDTO} from "../remembering.level.dto";

export class AccountDTO {
  rememberingLevels: RememberingLevelDTO[];
  learningRegime: string;
  cardsNumber: number;
  self: Link;


  constructor(learningRegime: string, rememberingLevels: RememberingLevelDTO[], cardsNumber: number, self: Link) {
    this.rememberingLevels = rememberingLevels;
    this.learningRegime = learningRegime;
    this.cardsNumber = cardsNumber;
    this.self = self;
  }

}




