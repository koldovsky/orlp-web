import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ORLPService} from '../../services/orlp.service';
import {DTOConverter} from '../../dto/dto.Converter';
import {UsersDTO} from '../../dto/UserDTO/UserDTO';
import {DeckLinkByFolder} from '../../dto/DeckDTO/linkByFolder.deck.DTO';
import {Link} from '../../dto/link';
import {DeckPublic} from '../../dto/DeckDTO/public.deck.DTO';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';

@Injectable()
export class CabinetService {

  constructor(private orlp: ORLPService) {
  }

  public getUser(): Observable<UsersDTO> {
    return this.orlp.get('api/private/user')
      .map((response: Response) => <UsersDTO> DTOConverter.jsonToUserDTO(response.json()))
      .catch(this.handleError);
  }

  public getUserDecks(link: Link): Observable<DeckLinkByFolder[]> {

    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);

    return this.orlp.get(shortLink)
      .map((response: Response) =>
        <DeckLinkByFolder[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeckLinkByFolder, response.json()))
      .catch(this.handleError);
  }

  getCourse(url: string): Observable<CourseLink[]> {
    return this.orlp.get(url)
      .map((response: Response) => <CourseLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()))
      .catch(this.handleError);
  }

  getCourseDecks(link: Link): Observable<DeckPublic[]> {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);

    return this.orlp.get(shortLink)
      .map((response: Response) => <DeckPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
