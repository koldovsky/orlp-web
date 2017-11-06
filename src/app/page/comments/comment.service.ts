import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ORLPService} from '../../services/orlp.service';
import {DTOConverter} from '../../dto/dto.converter';
import {Observable} from 'rxjs/Observable';
import {CommentDTO} from '../../dto/CommentDTO/commentDTO';
import {Link} from '../../dto/link';
import {CreateCommentDTO} from '../../dto/CommentDTO/createCommentDTO';

@Injectable()
export class CommentService {

  constructor(private orlp: ORLPService) {
  }

  public getAllComments(url: string) {
    return this.orlp.get(url + '/comments')
      .map((response: Response) => <CommentDTO[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToCommentDTO, response.json()))
      .catch(this.handleError);
  }

  public addNewComment(url: string, createCommentDTO: CreateCommentDTO) {
    return this.orlp.post(url + '/comments', createCommentDTO).map((response: Response) => response.json())
      .catch(this.handleError);
  }

  public deleteComment(link: Link) {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);
    return this.orlp.delete(shortLink)
      .map((response: Response) => console.log());
  }

  public updateComment(link: Link, commentText: string) {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);
    return this.orlp.put(shortLink, commentText).map((response: Response) => console.log());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
