import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ORLPService} from '../../services/orlp.service';
import {Subscription} from 'rxjs/Subscription';
import {CommentService} from './comment.service';
import {CommentDTO} from '../../dto/CommentDTO/commentDTO';
import {Link} from '../../dto/link';
import {CreateCommentDTO} from '../../dto/CommentDTO/createCommentDTO';
import {UserRoleDTO} from '../../dto/CommentDTO/UeserRoleDTO';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {AuthenticationService} from '../authentication/authentication.service';

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
  public showFormToAddReply = false;
  public commentId: number;
  public isAuthorized: boolean;
  private isAuthenticated: boolean;
  public person: UserRoleDTO;
  public linkToCommentNeedToDelete: Link;
  private readonly imageType: string = 'data:image/PNG;base64,';

  constructor(private route: ActivatedRoute,
              private orlp: ORLPService,
              private commentService: CommentService,
              private authenticated: AuthenticationService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        this.url = params['url'];
        this.decodeLink();
      }
    );
    this.getAllComments();
    this.isAuthenticated = this.authenticated.isAuthenticated();
    if (this.isAuthenticated === true) {
      this.isAuthorized = true;
    }
    this.getPersonRole();
  }

  private getAllComments(): void {
    this.commentService.getAllComments(this.url).subscribe(comments => {
      this.listOfComments = comments;
    });
  }

  private decodeLink() {
    this.url = this.orlp.decodeLink(this.url);
  }

  addNewComment(parentId: number) {
    this.commentService.addNewComment(this.url, new CreateCommentDTO(this.textOfNewComment, parentId)).subscribe(() => {
      this.getAllComments();
    });
    this.textOfNewComment = null;
  }

  deleteComment() {
    this.commentService.deleteComment(this.linkToCommentNeedToDelete).subscribe(() => {
      this.getAllComments();
    });
  }

  getPersonRole(): void {
    this.commentService.getPersonRole().subscribe(person => this.person = person);
  }

  isCommentOwner(comment: CommentDTO): boolean {
    return comment.personId === this.person.userId || this.person.authorities.includes('ROLE_ADMIN');
  }

  changeVisibilityOfFormToAddReply(commentId: number) {
    this.commentId = commentId;
    if (this.showFormToAddReply === false) {
      this.showFormToAddReply = true;
    } else {
      this.showFormToAddReply = false;
    }
  }

  setCommentNeedToDelete(link: Link) {
    this.linkToCommentNeedToDelete = link;
  }

  closeFormToAddReply() {
    this.showFormToAddReply = false;
    this.textOfNewComment = null;
  }

  getImage(imageBase64: string): SafeUrl {
    const image = this.sanitizer.bypassSecurityTrustUrl(this.imageType + imageBase64);
    return image;
  }
}
