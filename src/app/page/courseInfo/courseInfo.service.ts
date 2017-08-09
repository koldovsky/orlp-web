import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../services/orlp.service';
import {DTOConverter} from '../../dto/dto.Converter';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';
import {DeckPublic} from '../../dto/DeckDTO/public.deck.DTO';
import {CoursePublic} from '../../dto/CourseDTO/public.course.DTO';

@Injectable()
export class CourseInfoService {
  private url: string = 'api/user/courses/';

  constructor(private orlp: ORLPService) {
  }

  getCourse(url: string): Observable<CourseLink> {
    return this.orlp.get(url)
      .map((response: Response) => DTOConverter.jsonToPublicLinkCourse(response.json()))
      .catch(this.handleError);
  }

  getDecks(course: CourseLink): Observable<DeckPublic[]> {
    const url = this.orlp.decodeLink(this.orlp.getShortLink(course.decks));
    return this.orlp.get(url)
      .map((response: Response) => <DeckPublic[]>(DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json())))
      .catch(this.handleError);
  }

  addCourseToUser(courseId: number): Observable<CoursePublic> {
    return this.orlp.put(this.url + courseId, {})
      .map((response: Response) => {
        response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);

    return Observable.throw(error.json().error || 'Server error');
  }

}
