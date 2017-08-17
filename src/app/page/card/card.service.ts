import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ORLPService} from '../../services/orlp.service';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {DTOConverter} from '../../dto/dto.converter';
import {UserCardQueuePublicDTO} from "../../dto/CardsDTO/UserCardQueuePublicDTO";

@Injectable()
export class CardService {

  constructor(private orlp: ORLPService) {
  }

  public getCards(url: string): Observable<CardPublic[]> {
    return this.orlp.get(url)
      .map((response: Response) => <CardPublic[]> DTOConverter
        .jsonArrayToCollection(DTOConverter.jsonToPublicCards, response.json()))
      .catch(this.handleError);
  }

  public sendStatus(userCardQueue: UserCardQueuePublicDTO, card_id: number) {
    return this.orlp.post('api/user/deck/1/card/' + card_id + '/queue', userCardQueue);

  }

  private handleError(error: Response) {
    console.error(error);

    return Observable.throw(error.json().error || 'Server error');
  }
}
