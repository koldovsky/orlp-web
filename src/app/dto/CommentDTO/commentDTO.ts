import {Link} from '../link';

export class CommentDTO {
  commentId: number;
  commentText: string;
  commentDate: Date;
  personId: number;
  personFirstName: string;
  personLastName: string;
  imageType: string;
  imageBase64: string;
  image: string;
  listOfChildComments: CommentDTO[] = [];
  self: Link;

  constructor(commentId: number, commentText: string, commentDate: Date, personId: number, personFirstName: string,
              personLastName: string, imageType: string, imageBase64: string, image: string, listOfChildComments: CommentDTO[],
              self: Link) {
    this.commentId = commentId;
    this.commentText = commentText;
    this.commentDate = commentDate;
    this.personId = personId;
    this.personFirstName = personFirstName;
    this.personLastName = personLastName;
    this.imageType = imageType;
    this.imageBase64 = imageBase64;
    this.image = image;
    this.listOfChildComments = listOfChildComments;
    this.self = self;
  }
}
