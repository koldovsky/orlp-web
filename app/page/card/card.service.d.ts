import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ORLPService } from "../../orlp.service";
import { CardPublic } from "../../classes/CardsDTO/public.card.DTO";
export declare class CardService {
    private orlp;
    constructor(orlp: ORLPService);
    getCards(url: string): Observable<CardPublic[]>;
    private handleError(error);
}
