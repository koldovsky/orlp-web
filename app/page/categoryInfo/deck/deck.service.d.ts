import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { DeckPublic } from "../../../classes/DeckDTO/public.deck.DTO";
<<<<<<< HEAD
import { DeckLinkByCategory } from "../../../classes/DeckDTO/linkByCategory.deck.DTO";
export declare class DeckService {
    private orlp;
    constructor(orlp: ORLPService);
    getDecks(url: string): Observable<DeckLinkByCategory[]>;
    addDeckToFolder(deckId: number): Observable<DeckPublic>;
    getIdDecksInYourFolder(): Observable<number[]>;
=======
export declare class DeckService {
    private orlp;
    constructor(orlp: ORLPService);
    getDecks(url: string): Observable<DeckPublic[]>;
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
    private handleError(error);
}
