import { DeckPublic } from "../../../classes/DeckDTO/public.deck.DTO";
import { ORLPService } from "../../../orlp.service";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { DeckLinkByCategory } from "../../../classes/DeckDTO/linkByCategory.deck.DTO";
export declare class DeckService {
    private orlp;
    constructor(orlp: ORLPService);
    getDecks(url: string): Observable<DeckLinkByCategory[]>;
    addDeckToFolder(deckId: number): Observable<DeckPublic>;
    getIdDecksInYourFolder(): Observable<number[]>;
    private handleError(error);
}
