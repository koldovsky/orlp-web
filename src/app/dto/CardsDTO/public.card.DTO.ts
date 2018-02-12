import {Link} from '../link';
import {CardImage} from '../card-image-dto/card-image';

export class CardPublic {
  cardId: number;
  title: string;
  answer: string;
  question: string;
  rating: number;
  self: Link;
  images: CardImage[];


  constructor(cardId: number, title: string, answer: string, question: string, rating: number, self: Link, images: CardImage[]) {
    this.cardId = cardId;
    this.title = title;
    this.answer = answer;
    this.question = question;
    this.rating = rating;
    this.self = self;
    this.images = images;
  }
}
