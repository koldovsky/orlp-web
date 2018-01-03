import {Link} from '../link';

export class CardPublic {
  cardId: number;
  title: string;
  answer: string;
  question: string;
  rating: number;
  self: Link;
  image: string;


  constructor(cardId: number, title: string, answer: string, question: string, rating: number, self: Link, image: string) {
    this.cardId = cardId;
    this.title = title;
    this.answer = answer;
    this.question = question;
    this.rating = rating;
    this.self = self;
    this.image = image;
  }
}
