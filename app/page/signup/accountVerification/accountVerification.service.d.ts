import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
export declare class AccountVerificationService {
    private http;
    private _controllerUrl;
    constructor(http: Http);
    accountVerificate(token: string): Observable<Response>;
}
