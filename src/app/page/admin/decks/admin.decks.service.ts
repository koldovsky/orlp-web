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
import {Link} from '../../../dto/link';
import {EditDeckDTO} from '../../../dto/DeckDTO/deck.edit.DTO';

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
  deleteDeck(link: Link) {
    const shortLink: string = this.orlp.decodeLink(this.orlp.getShortLink(link));
    return this.orlp.delete( shortLink)
      .map((response: Response) => console.log());
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

  createDeckAdmin (deckAdded: EditDeckDTO ) {
    return this.orlp.post('/api/admin/decks', deckAdded)
      .map((response: Response) => response.json());
  }

  editDeck (link: Link, deckEdit: EditDeckDTO) {
    const shortLink: string = this.orlp.decodeLink(this.orlp.getShortLink(link));
    return this.orlp.put(shortLink, deckEdit)
      .map((response: Response) => console.log());
  }

}
