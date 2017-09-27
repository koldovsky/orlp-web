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
import {NewDeckDTO} from '../../../dto/DeckDTO/deck.added.DTO';

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

  createDeck (deckAdded: NewDeckDTO ) {
    return this.orlp.post('/api/admin/decks/' + deckAdded.categoryId, deckAdded)
      .map((response: Response) => response.json());
  }

  editDeck (deckEdit: NewDeckDTO, deck_id: number ) {
    return this.orlp.put('/api/admin/decks/' + deck_id + '/' + deckEdit.categoryId, deckEdit)
      .map((response: Response) => console.log());
  }

}
