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
import {CardImage} from "../../../dto/card-image-dto/card-image";


@Injectable()
export class ManageCardsService {

  constructor(private orlp: ORLPService) {
  }

  public getCards(deckId: number): Observable<CardPublic[]> {
    return this.orlp.get('/api/decks/' + deckId + '/cards').map((response: Response) =>
      <CardPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCards, response.json()));
  }

  public getDeck(url: string): Observable<AdminDeck> {
    return this.orlp.get(url)
      .map((response: Response) => <AdminDeck> DTOConverter.jsonToAdminDeck(response.json()))
      .catch(this.handleError);
  }

  public deleteSelectedCard(cardLink: string) {
    return this.orlp.delete(cardLink).map((response: Response) => {});
  }

  public updateSelectedCard(cardLink: string, card: any) {
    return this.orlp.post(cardLink, card).subscribe(next => {}, error => console.log(error));
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

  public deleteCardImage(cardImageId: number) {
    return this.orlp.delete('api/private/cardImage/' + cardImageId)
      .subscribe(next => {}, error => console.log(error));
  }
}
