import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IDeck } from "../../../interfaces/deck";
export declare class DeckService {
    private http;
    constructor(http: Http);
    getDeck(id: number): Observable<IDeck[]>;
    addDeck(body: IDeck, id: number): Observable<IDeck>;
    private handleError(error);
}
