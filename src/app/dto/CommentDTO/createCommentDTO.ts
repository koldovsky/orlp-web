export class CreateCommentDTO {
  commentText: string;
  parentCommentId: number;

  constructor(commentText: string, parentCommentId: number) {
    this.commentText = commentText;
    this.parentCommentId = parentCommentId;
  }
}
