import {DeckPublic} from "../../../dto/DeckDTO/public.deck.DTO";
import {DTOConverter} from "../../../dto/dto.converter";
import {Injectable} from "@angular/core";
import {ORLPService} from "../../../services/orlp.service";
import {Response} from "@angular/http";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";
import {DeckLinkByCategory} from "../../../dto/DeckDTO/linkByCategory.deck.DTO";

@Injectable()
export class DeckService {

    constructor(private orlp: ORLPService) {
    }

    getDecks(url: string): Observable<DeckLinkByCategory[]> {
        return this.orlp.get(url)
            .map((response: Response) => <DeckLinkByCategory[]> DTOConverter
              .jsonArrayToCollection(DTOConverter.jsonToDeckLinkByCategory, response.json()))
            .catch(this.handleError);
    }

    addDeckToFolder(deckId: number): Observable<DeckPublic> {
        return this.orlp.put("api/user/folder/add/deck/" + deckId, {})
            .map((response: Response) => {
                response.json();
            })
            .catch(this.handleError);
    }

    getIdDecksInYourFolder(): Observable<number[]> {
        return this.orlp.get("api/private/user/folder/decks/id")
            .map((response: Response) => response.json());
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }

    addDeckRating(deck: DeckPublic){
      console.log(deck);
      return this.orlp.post('/api/private/deck/' + deck.deckId, deck)
          .subscribe((response: Response)=>console.log(response));
    }
}
