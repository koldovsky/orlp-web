export class CardUpdateDTO {
  title: string;
  question: string;
  answer: string;
  images: string[];

  constructor(title: string, question: string, answer: string, image: string[]) {
    this.title = title;
    this.answer = answer;
    this.question = question;
    this.images = image;
  }
}
