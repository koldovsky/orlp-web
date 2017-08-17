import {Link} from "../link";

export class CardPublic {
  cardId: number;
  answer: string;
  question: string;
  self: Link;


  constructor(cardId: number, answer: string, question: string, self: Link) {
    this.cardId = cardId;
    this.answer = answer;
    this.question = question;
    this.self = self;
  }
}
