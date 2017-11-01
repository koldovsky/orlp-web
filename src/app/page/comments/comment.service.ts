import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ORLPService} from '../../services/orlp.service';
import {DTOConverter} from '../../dto/dto.converter';
import {Observable} from "rxjs/Observable";
import {CommentDTO} from "../../dto/CommentDTO/commentDTO";
import {Link} from "../../dto/link";

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

  public addNewComment(url: string, textOfNewComment: string) {
    return this.orlp.post(url + '/comment', textOfNewComment).map((response: Response) => response.json())
      .catch(this.handleError);
  }

  public deleteComment(link: Link){
    let shortLink: string = this.orlp.getShortLink(link);
    console.log(shortLink);
    shortLink = this.orlp.decodeLink(shortLink);
    console.log(shortLink);
    return this.orlp.delete(shortLink)
      .map((response: Response) => console.log());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
