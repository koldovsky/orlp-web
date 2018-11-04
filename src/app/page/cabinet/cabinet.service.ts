import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ORLPService} from '../../services/orlp.service';
import {DTOConverter} from '../../dto/dto.converter';
import {UserDTO} from '../../dto/UsersDTO/UserDTO';
import {Link} from '../../dto/link';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';
import {DeckLinkByCategory} from '../../dto/DeckDTO/linkByCategory.deck.DTO';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class CabinetService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  public getUser(): Observable<UserDTO> {
    return this.orlp.get('api/user')
      .map((response: Response) => <UserDTO> DTOConverter.jsonToUserDTO(response.json()));
  }

  public getDecks(link: Link): Observable<DeckLinkByCategory[]> {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);
    return this.orlp.get(shortLink)
      .map((response: Response) =>
        <DeckLinkByCategory[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeckLinkByCategory, response.json()));
  }

  public getCourses(link: Link): Observable<CourseLink[]> {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);
    return this.orlp.get(shortLink)
      .map((response: Response) =>
        <CourseLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()));
  }

  public getCategoryDecks(categoryId: number): Observable<DeckLinkByCategory[]> {
    return this.orlp.get('/api/categories/' + categoryId + '/decks')
      .map((response: Response) => <DeckLinkByCategory[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToDeckLinkByCategory, response.json()));
  }

  public updateCourse(course: CourseLink) {
    return this.orlp.put('/api/cabinet/' + course.courseId + '/update/access', course)
      .map((response: Response) => this.logger.log(response));
  }

  public toggleDeck(deck: DeckLinkByCategory) {
    return this.orlp.put('/api/cabinet/decks/' + deck.deckId + '/toggle/access', {})
      .map((response: Response) => this.logger.log(response));
  }

  public addDeckToCourse(courseId: number, deckId: number) {
    return this.orlp.put('api/categories/courses/' + courseId + '/decks/' + deckId, {})
      .map((response: Response) => this.logger.log(response));
  }

  public deleteGlobalCourse(course: CourseLink) {
    return this.orlp.delete('api/cabinet/global/courses/' + course.courseId)
      .map((response: Response) => this.logger.log(response));
  }

  public deleteLocalCourse(course: CourseLink) {
    return this.orlp.delete('api/cabinet/local/courses/' + course.courseId)
      .map((response: Response) => this.logger.log(response));
  }

  public deleteDeck(deckId: number) {
    return this.orlp.delete('api/user/folder/decks/' + deckId)
      .map((response: Response) => this.logger.log(response));
  }
}
