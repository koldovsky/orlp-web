import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../orlp.service";
import { UsersDTO } from "../../classes/UserDTO/UserDTO";
import { DeckLinkByFolder } from "../../classes/DeckDTO/linkByFolder.deck.DTO";
export declare class CabinetService {
    private orlp;
    constructor(orlp: ORLPService);
    getUser(): Observable<UsersDTO>;
    getUserDecks(url: string): Observable<DeckLinkByFolder[]>;
    private handleError(error);
}
