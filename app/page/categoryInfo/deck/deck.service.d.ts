import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { DeckLinkByCategory } from "../../../classes/DeckDTO/linkByCategory.deck.DTO";
export declare class DeckService {
    private orlp;
    constructor(orlp: ORLPService);
    getDecks(url: string): Observable<DeckLinkByCategory[]>;
    addDeck(body: DeckLinkByCategory, url: string): Observable<DeckLinkByCategory>;
    private handleError(error);
}
