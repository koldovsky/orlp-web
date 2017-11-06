import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ORLPService} from '../../services/orlp.service';
import {Subscription} from 'rxjs/Subscription';
import {CommentService} from './comment.service';
import {CommentDTO} from '../../dto/CommentDTO/commentDTO';
import {Link} from '../../dto/link';
import {CreateCommentDTO} from '../../dto/CommentDTO/createCommentDTO';


@Component({
  selector: 'app-course-comments',
  templateUrl: ('./comment.component.html'),
  styleUrls: ['./comment.component.css']

})
export class CommentComponent implements OnInit {
  private sub: Subscription;
  private url: string;
  public textOfNewComment: string;
  public listOfComments: CommentDTO[] = [];
  public showFormToAddReply: boolean = false;

  constructor(private route: ActivatedRoute, private orlp: ORLPService, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        this.url = params['url'];
      }
    );
    this.getAllComments();
  }

  private getAllComments(): void {
    this.decodeLink();
    this.commentService.getAllComments(this.url).subscribe(comments => {
      this.listOfComments = comments;
    });
  }

  private decodeLink() {
    this.url = this.orlp.decodeLink(this.url);
  }

  addNewComment() {
    this.commentService.addNewComment(this.url, new CreateCommentDTO(this.textOfNewComment, null)).subscribe();
  }

  deleteChildComment(comment: any) {
    this.commentService.deleteComment(comment._links.self).subscribe();
  }

  deleteComment(link: Link) {
    this.commentService.deleteComment(link).subscribe();
  }


  createReply(commentId: number) {
    this.commentService.addNewComment(this.url, new CreateCommentDTO(this.textOfNewComment, commentId)).subscribe();
  }

  updateComment(link: Link) {
    this.commentService.updateComment(link, this.textOfNewComment).subscribe();
  }

  addNewReply() {
    this.showFormToAddReply = true;
  }
}
