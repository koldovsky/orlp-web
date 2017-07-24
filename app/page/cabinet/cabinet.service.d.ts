import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../orlp.service";
import { DeckPublic } from "../../classes/DeckDTO/public.deck.DTO";
export declare class CabinetService {
    private orlp;
    constructor(orlp: ORLPService);
    getUserDecks(): Observable<DeckPublic[]>;
    private handleError(error);
}
