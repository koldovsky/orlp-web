import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DTOConverter} from '../../../dto/dto.converter';
import {CourseLink} from '../../../dto/CourseDTO/link.course.DTO';
import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';
import {Link} from '../../../dto/link';
import {Rating} from '../../../dto/Rating';
import {CoursesByCategoryAndPageDTO} from '../../../dto/CourseDTO/linkToCoursesByCategoryAndPage';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class CourseService {
  private urlAddCourseToUser = 'api/cabinet/courses/';

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  addCourseToUser(courseId: number) {
    return this.orlp.put(this.urlAddCourseToUser + courseId, {})
      .map((response: Response) => this.logger.log(response))
      .catch(this.handleError);
  }

  getCoursesIdOfTheUser(): Observable<number[]> {
    return this.orlp.get('api/private/cabinet/courses')
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  getCourse(url: string): Observable<CourseLink[]> {
    return this.orlp.get(url)
      .map((response: Response) => <CourseLink[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()))
      .catch(this.handleError);
  }

  getCourses(categoryId: number, numberPage: number,
             selectedSortingParam: string, ascending: boolean): Observable<CoursesByCategoryAndPageDTO> {
    return this.orlp.get('api/categories/' + categoryId + '/courses?p=' + numberPage + '&sortBy=' + selectedSortingParam +
      '&asc=' + ascending)
      .map((response: Response) => <CoursesByCategoryAndPageDTO> DTOConverter
        .jsonToCourseByCategoryAndPage(response.json()))
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
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  addCourseRating(rating: Rating, courseId: number): Observable<Response> {
    return this.orlp.post('/api/courses/' + courseId + '/ratings/',  rating);
  }
}
