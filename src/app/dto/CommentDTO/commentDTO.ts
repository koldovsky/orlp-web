import {Link} from '../link';

export class CommentDTO {
  id: number;
  commentText: string;
  commentDate: Date;
  personFirstName: string;
  personLastName: string;
  imageType: string;
  imageBase64: string;
  image: string;
  self: Link;


  constructor(id: number, commentText: string, commentDate: Date, personFirstName: string, personLastName: string, imageType: string, imageBase64: string, image: string, self: Link) {
    this.id = id;
    this.commentText = commentText;
    this.commentDate = commentDate;
    this.personFirstName = personFirstName;
    this.personLastName = personLastName;
    this.imageType = imageType;
    this.imageBase64 = imageBase64;
    this.image = image;
    this.self = self;
  }
}
