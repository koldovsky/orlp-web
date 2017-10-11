import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../services/orlp.service';
import {DTOConverter} from '../../../dto/dto.converter';
import {CardPublic} from '../../../dto/CardsDTO/public.card.DTO';
import {AdminDeck} from '../../../dto/AdminDTO/admin.deck.DTO';


@Injectable()
export class ManageCardsService {

  constructor(private orlp: ORLPService) {
  }

  public getCards(deckId: number): Observable<CardPublic[]> {
    return this.orlp.get('/api/decks/' + deckId + '/cards').map((response: Response) =>
      <CardPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminDeckCards, response.json()));
  }

  public getDeck(url: string): Observable<AdminDeck> {
    return this.orlp.get(url)
      .map((response: Response) => <AdminDeck> DTOConverter.jsonToAdminDeck(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  public deleteSelectedCard(cardLink: string) {
    return this.orlp.delete(cardLink).map((response: Response) => console.log());
  }

  public updateSelectedCard(cardLink: string, card: CardPublic) {
    return this.orlp.put(cardLink, card).map((response: Response) => console.log());
  }
}
