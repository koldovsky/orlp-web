import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";
import {DTOConverter} from "../../../classes/dto.Converter";
import {Injectable} from "@angular/core";
import {ORLPService} from "../../../orlp.service";
import {Response} from "@angular/http";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";
import {DeckLinkByCategory} from "../../../classes/DeckDTO/linkByCategory.deck.DTO";

@Injectable()
export class DeckService {

    constructor(private orlp: ORLPService) {
    }

    getDecks(url: string): Observable<DeckLinkByCategory[]> {
        return this.orlp.get(url)
            .map((response: Response) => <DeckLinkByCategory[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToDeckLinkByCategory, response.json()))
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
            .map((response: Response) => response.json())
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}