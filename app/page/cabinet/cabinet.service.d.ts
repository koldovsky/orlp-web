import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../orlp.service";
<<<<<<< HEAD
import { UsersDTO } from "../../classes/UserDTO/UserDTO";
import { DeckLinkByFolder } from "../../classes/DeckDTO/linkByFolder.deck.DTO";
=======
import { DeckPublic } from "../../classes/DeckDTO/public.deck.DTO";
import { UsersDTO } from "../../classes/UserDTO/UserDTO";
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
import { Link } from "../../classes/link";
export declare class CabinetService {
    private orlp;
    constructor(orlp: ORLPService);
    getUser(): Observable<UsersDTO>;
<<<<<<< HEAD
    getUserDecks(link: Link): Observable<DeckLinkByFolder[]>;
=======
    getUserDecks(link: Link): Observable<DeckPublic[]>;
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
    private handleError(error);
}
