import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
export declare class AccountVerificationService {
    private http;
    private _controllerUrl;
    constructor(http: Http);
    verificate(token: string): Observable<Response>;
    private handleErrorObservable(error);
}
