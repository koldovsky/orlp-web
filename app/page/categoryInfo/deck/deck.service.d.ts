import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IDeck } from "../../../interfaces/deck";
import { DeckPublic } from "../../../classes/DeckDTO/public.deck.DTO";
export declare class DeckService {
    private orlp;
    constructor(orlp: ORLPService);
    getDecks(url: string): Observable<DeckPublic[]>;
    addDeck(body: IDeck, url: string): Observable<DeckPublic>;
    private handleError(error);
}
