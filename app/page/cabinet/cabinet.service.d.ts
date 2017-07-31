import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../orlp.service";
import { UsersDTO } from "../../classes/UserDTO/UserDTO";
import { DeckLinkByFolder } from "../../classes/DeckDTO/linkByFolder.deck.DTO";
import { Link } from "../../classes/link";
export declare class CabinetService {
    private orlp;
    constructor(orlp: ORLPService);
    getUser(): Observable<UsersDTO>;
    getUserDecks(link: Link): Observable<DeckLinkByFolder[]>;
    private handleError(error);
}
