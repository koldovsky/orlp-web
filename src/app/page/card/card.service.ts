import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ORLPService} from '../../services/orlp.service';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {DTOConverter} from '../../dto/dto.converter';

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

  private handleError(error: Response) {
    console.error(error);

    return Observable.throw(error.json().error || 'Server error');
  }
}
