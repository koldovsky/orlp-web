import { ORLPService } from "../../../services/orlp.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { DeckPublic } from "../../../dto/DeckDTO/public.deck.DTO";
export declare class DeckService {
    private orlp;
    constructor(orlp: ORLPService);
    getDecks(): Observable<DeckPublic[]>;
    private handleError(error);
}
