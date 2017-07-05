import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IDeck } from "../../../interfaces/deck";
export declare class Table2Service {
    private orlp;
    constructor(orlp: ORLPService);
    getDeck(id: number): Observable<IDeck[]>;
    private handleError(error);
}
