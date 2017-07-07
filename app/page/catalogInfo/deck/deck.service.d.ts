import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IDeck } from "../../../interfaces/deck";
export declare class DeckService {
    private orlp;
    private http;
    constructor(orlp: ORLPService, http: Http);
    getDeck(id: number): Observable<IDeck[]>;
    addDeck(body: IDeck, id: number): Observable<IDeck>;
    private handleError(error);
}
