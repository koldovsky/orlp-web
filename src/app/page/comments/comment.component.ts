import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ORLPService} from '../../services/orlp.service';
import {Subscription} from 'rxjs/Subscription';
import {CommentService} from './comment.service';
import {CommentDTO} from "../../dto/CommentDTO/commentDTO";
import {Link} from "../../dto/link";


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
    console.log(this.url);
    this.commentService.getAllComments(this.url).subscribe(comments => {
      this.listOfComments = comments;
      /*  if (user.imageType === 'BASE64') {
          this.imageProfile = user.self.href + '/image' + '?' + new Date().getTime();
        } else {
          this.imageProfile = user.image;*/
    });
  }

  private decodeLink() {
    this.url = this.orlp.decodeLink(this.url);
  }

  addNewComment() {
    console.log(this.url);
    console.log(this.url);
    this.commentService.addNewComment(this.url, this.textOfNewComment).subscribe();

  }

  deleteComment(link: Link){
    console.log(link);
    this.commentService.deleteComment(link).subscribe();
  }


}
