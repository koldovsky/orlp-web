import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ORLPService} from '../../services/orlp.service';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {DTOConverter} from '../../dto/dto.converter';
import {NGXLogger} from 'ngx-logger';
import {DeckSynthaxDTO} from '../../dto/DeckDTO/deckSynthaxDTO';

@Injectable()
export class CardService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  public getCards(url: string): Observable<CardPublic[]> {
    return this.orlp.get(url)
      .map((response: Response) => <CardPublic[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicCards, response.json()))
      .catch(this.handleError);
  }

  public getAdditionalCards(deckId: number): Observable<CardPublic[]> {
    return this.orlp.get('/api/private/decks/' + deckId + '/learn/additional')
      .map((response: Response) => <CardPublic[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicCards, response.json()))
      .catch(this.handleError);
  }

  public areThereNotPostponedCards(deckId: number): Observable<boolean> {
    return this.orlp.get('/api/private/decks/' + deckId + '/not-postponed')
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  public sendStatus(status: string, card_id: number, deckId: number) {
    return this.orlp.put('api/private/decks/' + deckId + '/cards/' + card_id + '/queue', status);
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  public getDeckSynthax(deckId: number): Observable<DeckSynthaxDTO> {
    return this.orlp.get('/api/private/decks/' + deckId + '/synthax')
      .map((response: Response) => DTOConverter.jsonToDeckSynthax(response.json()))
      .catch(this.handleError);
  }
}
