import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../services/orlp.service";
import { UsersDTO } from "../../dto/UserDTO/UserDTO";
import { DeckLinkByFolder } from "../../dto/DeckDTO/linkByFolder.deck.DTO";
import { Link } from "../../dto/link";
export declare class CabinetService {
    private orlp;
    constructor(orlp: ORLPService);
    getUser(): Observable<UsersDTO>;
    getUserDecks(link: Link): Observable<DeckLinkByFolder[]>;
    private handleError(error);
}
