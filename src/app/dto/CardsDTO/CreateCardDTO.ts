import {Link} from '../link';

export class CreateCardDTO {
  title: string;
  answer: string;
  question: string;
  rating: string;


  constructor(title: string, answer: string, question: string, rating: string) {
    this.title = title;
    this.answer = answer;
    this.question = question;
    this.rating = rating;
  }
}
