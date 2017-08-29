import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ORLPService} from '../../services/orlp.service';
import {DTOConverter} from '../../dto/dto.converter';
import {UsersDTO} from '../../dto/UsersDTO/UserDTO';
import {DeckDTO} from '../../dto/DeckDTO/DeckDTO';
import {Link} from '../../dto/link';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';
import {DeckLinkByCategory} from '../../dto/DeckDTO/linkByCategory.deck.DTO';

@Injectable()
export class CabinetService {

  constructor(private orlp: ORLPService) {
  }

  public getUser(): Observable<UsersDTO> {
    return this.orlp.get('api/private/user')
      .map((response: Response) => <UsersDTO> DTOConverter.jsonToUserDTO(response.json()));
  }

  public getDecks(link: Link): Observable<DeckDTO[]> {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);
    return this.orlp.get(shortLink)
      .map((response: Response) =>
        <DeckDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeckLinkByFolder, response.json()));
  }

  public getCourses(link: Link): Observable<CourseLink[]> {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);
    return this.orlp.get(shortLink)
      .map((response: Response) =>
        <CourseLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()));
  }

  updateCourse(course: CourseLink) {
    return this.orlp.put('/api/user/courses/' + course.courseId + '/update/access', course)
      .map((response: Response) => console.log());
  }

  deleteGlobalCourse(course: CourseLink) {
    return this.orlp.delete('api/user/global/courses/' + course.courseId)
      .map((response: Response) => console.log());
  }

  deleteLocalCourse(course: CourseLink) {
    return this.orlp.delete('api/user/local/courses/' + course.courseId)
      .map((response: Response) => console.log());
  }

  getCategoryDecks(categoryId: number): Observable<DeckLinkByCategory[]> {
    return this.orlp.get('/api/category/' + categoryId + '/decks')
      .map((response: Response) => <DeckLinkByCategory[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToDeckLinkByCategory, response.json()));
  }

  addDeckToCourse(courseId: number, deckId: number) {
    return this.orlp.put('api/category/courses/' + courseId + '/decks/' + deckId, {})
      .map((response: Response) => console.log());
  }
}
