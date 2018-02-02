import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';
import {DTOConverter} from '../../../dto/dto.converter';
import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {Response} from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Rating} from '../../../dto/Rating';
import {DeckByCategoryAndPageDTO} from '../../../dto/DeckDTO/linkToDeckByCategoryAndPage';
import {NGXLogger} from 'ngx-logger';
import {saveAs} from 'file-saver';

@Injectable()
export class DeckService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getDecks(categoryId: number, numberPage: number,
           selectedSortingParam: string, ascending: boolean): Observable<DeckByCategoryAndPageDTO> {
    return this.orlp.get('/api/category/' + categoryId + '/decks?p=' + numberPage + '&sortBy=' + selectedSortingParam + '&asc=' + ascending)
      .map((response: Response) => <DeckByCategoryAndPageDTO> DTOConverter
        .jsonToDeckByCategoryAndPage(response.json()))
      .catch(this.handleError);
  }

  addDeckToFolder(deckId: number): Observable<DeckPublic> {
    return this.orlp.put('api/users/folder/add/deck/' + deckId, {})
      .map((response: Response) => {
        response.json();
      })
      .catch(this.handleError);
  }

  getIdDecksInYourFolder(): Observable<number[]> {
    return this.orlp.get('api/private/user/folder/decks/id')
      .map((response: Response) => response.json());
  }

  private handleError(error: Response) {
    this.logger.error(error);

    return Observable.throw(error.json().error || 'Server error');
  }

  addDeckRating(rating: Rating, deckId: number) {
    return this.orlp.post('/api/private/deck/' + deckId, rating);
  }

  countCardsThatNeedRepeating(deckId: number): Observable<number> {
    return this.orlp.get('/api/private/decks/' + deckId + '/cards-that-need-repeating/count')
      .map((response: Response) => response.json());
  }

  downloadCards(deckId: number, deckName: string) {
    return this.orlp.get('api/private/download/deck/' + deckId + '/cards')
      .subscribe(
        response => {
          const blob = new Blob([response.text()], {type: 'application/octet-stream'});
          const url = window.URL.createObjectURL(blob);
          saveAs(blob, deckName + '.yml');
        }
      );
  }
}
