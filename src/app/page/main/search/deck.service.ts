import {Injectable} from '@angular/core';
import {ORLPService} from "../../../services/orlp.service";
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DeckPublic} from "../../../dto/DeckDTO/public.deck.DTO";
import {DTOConverter} from "../../../dto/dto.Converter";

@Injectable()
export class DeckService {
  constructor(private orlp: ORLPService) {
  }

  getDecks(): Observable<DeckPublic[]> {
    return this.orlp.get('api/decks/ordered')
      .map((response: Response) => <DeckPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json()))
  }
}
