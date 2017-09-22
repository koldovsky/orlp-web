import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../services/orlp.service';
import {DTOConverter} from '../../../dto/dto.converter';
import {AdminDeck} from '../../../dto/AdminDTO/admin.deck.DTO';
import {CategoryLink} from '../../../dto/CategoryDTO/link.category.DTO';
import {DeckAddedDTO} from '../../../dto/DeckDTO/deck.added.DTO';

@Injectable()
export class AdminDecksService {

  constructor(private orlp: ORLPService) {
  }

  getFullDeckList(): Observable<AdminDeck[]> {
    return this.orlp.get('/api/admin/decks')
      .map((response: Response) => <AdminDeck[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminDeck, response.json()))
      .catch(this.handleError);
  }


  deleteDeck(deckId: number) {
    return this.orlp.delete('/api/admin/decks/' + deckId);
}

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


  getCategories(): Observable<CategoryLink[]> {
    return this.orlp.get('api/category/')
      .map((response: Response) => <CategoryLink[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCategory, response.json()));
  }

  createDeck (deckAdded: DeckAddedDTO, category_id: number) {
    console.log(deckAdded);
    return this.orlp.post('/api/admin/decks/' + category_id , deckAdded)
      .map((response: Response) => response.json());
  }
  editDeck (deckEdit: DeckAddedDTO, deck_id: number) {
    console.log(deckEdit);
    return this.orlp.put('/api/admin/decks/' + deck_id , deckEdit)
      .map((response: Response) => response.json());
  }

}
