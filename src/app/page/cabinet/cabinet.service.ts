import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ORLPService} from '../../services/orlp.service';
import {DTOConverter} from '../../dto/dto.Converter';
import {UsersDTO} from '../../dto/UsersDTO/UserDTO';
import {DeckDTO} from '../../dto/DeckDTO/DeckDTO';
import {Link} from '../../dto/link';
import {CourseLink} from '../../dto/CourseDTO/link.course.DTO';

@Injectable()
export class CabinetService {

  constructor(private orlp: ORLPService) {
  }

  public getUser(): Observable<UsersDTO> {

    return this.orlp.get('api/private/user')
      .map((response: Response) => <UsersDTO> DTOConverter.jsonToUserDTO(response.json()))
  }

  public getDecks(link: Link): Observable<DeckDTO[]> {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);

    return this.orlp.get(shortLink)
      .map((response: Response) => <DeckDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeckLinkByFolder, response.json()))
  }

  public getCourse(link: Link): Observable<CourseLink[]> {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);

    return this.orlp.get(shortLink)
      .map((response: Response) => <CourseLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()))
  }
}
