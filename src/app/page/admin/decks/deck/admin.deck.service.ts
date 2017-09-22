import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../../services/orlp.service';
import {DTOConverter} from '../../../../dto/dto.converter';
import {AdminDeck} from '../../../../dto/AdminDTO/admin.deck.DTO';

@Injectable()
export class AdminDeckService {

  constructor(private orlp: ORLPService) {
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
}
