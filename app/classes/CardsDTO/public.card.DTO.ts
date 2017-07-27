import {Link} from "../link";

export class CardPublic {
    answer: string;
    question: string;
    self: Link;


    constructor(answer: string, question: string, self: Link) {
        this.answer = answer;
        this.question = question;
        this.self = self;
    }
}