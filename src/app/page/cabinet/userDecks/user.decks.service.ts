import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {UserDTO} from '../../../dto/UsersDTO/UserDTO';
import {Observable} from 'rxjs/Observable';
import {DTOConverter} from '../../../dto/dto.converter';
import {DeckDTO} from '../../../dto/DeckDTO/DeckDTO';
import {Link} from '../../../dto/link';
import {Response, ResponseContentType} from '@angular/http';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {NewDeckDTO} from '../../../dto/DeckDTO/deck.added.DTO';
import {saveAs} from 'file-saver';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class UserDecksService {

  constructor(private orlp: ORLPService, private logger: NGXLogger) {
  }

  getUser(): Observable<UserDTO> {
    return this.orlp.get('api/private/user')
      .map((response: Response) => <UserDTO> DTOConverter.jsonToUserDTO(response.json()));
  }

  getCategories(): Observable<CategoryLink[]> {
    return this.orlp.get('api/category').map((response: Response) =>
      <CategoryLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCategory, response.json()));
  }

  getOnlyDecksCreatedByTheUser(): Observable<DeckDTO[]> {
    return this.orlp.get('api/users/folders/decks/own').map((response: Response) =>
      <DeckDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeck, response.json()));
  }

  getDeckCreatedByTheUser(deckId: number): Observable<DeckDTO> {
    return this.orlp.get('api/users/folders/decks/own/' + deckId).map((response: Response) =>
      <DeckDTO> DTOConverter.jsonToDeck(response.json()));
  }

  createDeck(deck: NewDeckDTO) {
    return this.orlp.post('api/categories/' + deck.categoryId + '/decks', deck)
      .map((response: Response) => response.json());
  }

  editDeck(deck: NewDeckDTO, deckId: number) {
    return this.orlp.put('api/categories/' + deck.categoryId + '/decks/' + deckId, deck)
      .map((response: Response) => response.json());
  }

  deleteDeck(deckId: number) {
    return this.orlp.delete('api/decks/' + deckId)
      .map((response: Response) => response.json());
  }

  downloadCardsTemplate() {
    return this.orlp.get('api/private/download/template/cards')
      .subscribe(
        response => {
          const blob = new Blob([response.text()], { type: 'application/octet-stream'});
          const url = window.URL.createObjectURL(blob);
          saveAs(blob, 'CardsTemplate.yml');
        }
      );
  }

  uploadCards(file: any, deckId: number) {
    return this.orlp.post('api/private/upload/deck/' + deckId + '/cards', file)
      .map((response: Response) => this.logger.log(response));
  }
}
