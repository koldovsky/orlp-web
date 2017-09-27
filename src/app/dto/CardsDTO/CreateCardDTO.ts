import {Link} from '../link';

export class CreateCardDTO {
  title: string;
  question: string;
  answer: string;
  rating: string;


  constructor(title: string, question: string, answer: string, rating: string) {
    this.title = title;
    this.answer = answer;
    this.question = question;
    this.rating = rating;
  }
}
