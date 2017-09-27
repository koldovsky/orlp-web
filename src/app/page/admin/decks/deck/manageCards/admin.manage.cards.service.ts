import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../../../services/orlp.service';
import {ImageDTO} from '../../../../../dto/ImageDTO/ImageDTO';
import {DTOConverter} from '../../../../../dto/dto.converter';
import {CategoryLink} from '../../../../../dto/CategoryDTO/link.category.DTO';
import {PrivateCourseDTO} from '../../../../../dto/CourseDTO/private.course.DTO';
import {CreateCardDTO} from '../../../../../dto/CardsDTO/CreateCardDTO';
import {AdminDeck} from '../../../../../dto/AdminDTO/admin.deck.DTO';
import {Link} from "../../../../../dto/link";
import {DeckDTO} from "../../../../../dto/DeckDTO/DeckDTO";

@Injectable()
export class AdminManageCardsService {

  constructor(private orlp: ORLPService) {}

 /* public getUser(): Observable<UserDTO> {
    return this.orlp.get('api/private/user')
      .map((response: Response) => <UserDTO> DTOConverter.jsonToUserDTO(response.json()));
  }*/

  public getCards(deckId: number): Observable<CreateCardDTO[]> {
     return this.orlp.get('/api/decks/' + deckId + '/cards').map((response: Response) =>
      <CreateCardDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminDeckCards, response.json()));
  }

 /* getFullDeckList(): Observable<AdminDeck[]> {
    return this.orlp.get('/api/admin/decks')
      .map((response: Response) => <AdminDeck[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminDeck, response.json()))
      .catch(this.handleError);
  }*/



  public getDeck(url: string): Observable<AdminDeck> {
    return this.orlp.get(url)
      .map((response: Response) => <AdminDeck> DTOConverter.jsonToAdminDeck(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
