import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {ORLPService} from "../../orlp.service";
import {DeckPublic} from "../../classes/public.deck.DTO";
import {DTOConverter} from "../../classes/dto.Converter";

@Injectable()
export class CabinetService {

    constructor(private orlp: ORLPService) {
    }

    public getUserDecks(): Observable<DeckPublic[]> {
        return this.orlp.get('api/decks/ordered')
            .map((response: Response) => <DeckPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json()))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}