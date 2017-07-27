import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../orlp.service";
import { DeckPublic } from "../../classes/DeckDTO/public.deck.DTO";
import { UsersDTO } from "../../classes/UserDTO/UserDTO";
import { Link } from "../../classes/link";
export declare class CabinetService {
    private orlp;
    constructor(orlp: ORLPService);
    getUser(): Observable<UsersDTO>;
    getUserDecks(link: Link): Observable<DeckPublic[]>;
    private handleError(error);
}
