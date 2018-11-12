export class ContactUsEmail {
  name: string;
  email: string;
  subject: string;
  text: string;


  constructor(name: string, email: string, subject: string, text: string) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.text = text;
  }
}
