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
import {AdminDeckByPage} from '../../../dto/AdminDTO/admin.deck.with.pages.DTO';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class AdminDecksService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getFullDeckList(numberPage: number, selectedSortingParam: string, ascending: boolean) {
    return this.orlp.get('/api/admin/decks?p=' + numberPage + '&sortBy=' + selectedSortingParam + '&asc=' + ascending)
      .map((response: Response) => <AdminDeckByPage>
        DTOConverter.jsonToDeckByPage(response.json()))
      .catch(this.handleError);
  }
  deleteDeck(link: Link) {
    const shortLink: string = this.orlp.decodeLink(this.orlp.getShortLink(link));
    return this.orlp.delete(shortLink)
      .map((response: Response) => this.logger.log(response));
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getCategories(): Observable<CategoryLink[]> {
    return this.orlp.get('api/categories/')
      .map((response: Response) => <CategoryLink[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCategory, response.json()));
  }

  createDeckAdmin (deckAdded: EditDeckDTO ) {
    return this.orlp.post('/api/admin/decks', deckAdded)
      .map((response: Response) => <AdminDeck> DTOConverter.jsonToAdminDeck(response.json()));
  }

  editDeck (link: Link, deckEdit: EditDeckDTO) {
    const shortLink: string = this.orlp.decodeLink(this.orlp.getShortLink(link));
    return this.orlp.put(shortLink, deckEdit)
      .map((response: Response) => <AdminDeck> DTOConverter.jsonToAdminDeck(response.json()));
  }

}
