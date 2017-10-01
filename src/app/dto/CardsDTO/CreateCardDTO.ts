import {Link} from '../link';

export class CreateCardDTO {
  title: string;
  question: string;
  answer: string;
  rating: number;
  self: Link;


  constructor(title: string, question: string, answer: string, rating: number, self: Link) {
    this.title = title;
    this.answer = answer;
    this.question = question;
    this.rating = rating;
    this.self = self;
  }
}
