import {Link} from '../link';

export class CommentDTO {
  commentId: number;
  commentText: string;
  commentDate: Date;
  personFirstName: string;
  personLastName: string;
  imageType: string;
  imageBase64: string;
  image: string;
  listOfChildComments: CommentDTO[] = [];
  self: Link;

  constructor(id: number, commentText: string, commentDate: Date, personFirstName: string, personLastName: string, imageType: string, imageBase64: string, image: string, listOfChildComments: CommentDTO[], self: Link) {
    this.commentId = id;
    this.commentText = commentText;
    this.commentDate = commentDate;
    this.personFirstName = personFirstName;
    this.personLastName = personLastName;
    this.imageType = imageType;
    this.imageBase64 = imageBase64;
    this.image = image;
    this.listOfChildComments = listOfChildComments;
    this.self = self;
  }
}
