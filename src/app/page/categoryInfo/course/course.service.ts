import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DTOConverter} from '../../../dto/dto.Converter';
import {CourseLink} from '../../../dto/CourseDTO/link.course.DTO';
import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';
import {Link} from '../../../dto/link';

@Injectable()
export class CourseService {
  constructor(private orlp: ORLPService) {
  }

  getCourse(url: string): Observable<CourseLink[]> {
    return this.orlp.get(url)
      .map((response: Response) => <CourseLink[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()))
      .catch(this.handleError);
  }

  getDecks(link: Link): Observable<DeckPublic[]> {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);
    return this.orlp.get(shortLink)
      .map((response: Response) => <DeckPublic[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
