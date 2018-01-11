import {Link} from '../link';

export class CreateCardDTO {
  title: string;
  question: string;
  answer: string;
  image: any;
  self: Link;

  constructor(title: string, question: string, answer: string, image: any, self: Link) {
    this.title = title;
    this.answer = answer;
    this.question = question;
    this.image = image;
    this.self = self;
  }
}
