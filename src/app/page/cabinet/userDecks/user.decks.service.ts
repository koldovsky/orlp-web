import {Injectable} from "@angular/core";
import {ORLPService} from "../../../services/orlp.service";
import {UserDTO} from "../../../dto/UsersDTO/UserDTO";
import {Observable} from "rxjs";
import {DTOConverter} from "../../../dto/dto.converter";
import {DeckDTO} from "../../../dto/DeckDTO/DeckDTO";
import {Link} from "../../../dto/link";
import {Response} from "@angular/http";

@Injectable()
export class UserDecksService {

  constructor(private orlp: ORLPService) {}

  public getUser(): Observable<UserDTO> {
    return this.orlp.get('api/private/user')
      .map((response: Response) => <UserDTO> DTOConverter.jsonToUserDTO(response.json()));
  }

  public getDecks(link: Link): Observable<DeckDTO[]> {
    let shortLink: string = this.orlp.getShortLink(link);
    shortLink = this.orlp.decodeLink(shortLink);
    return this.orlp.get(shortLink).map((response: Response) =>
      <DeckDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeck, response.json()));
  }
}
