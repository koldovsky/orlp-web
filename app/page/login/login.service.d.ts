import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Account } from "../signup/Account";
import "rxjs/add/operator/map";
import { LoginAccount } from "./LoginAccount";
export declare class LoginService {
    private http;
    private _controllerUrl;
    constructor(http: Http);
    sendIdToken(idToken: string): Observable<any>;
    login(account: LoginAccount): Observable<Account>;
    private extractData(res);
    private handleErrorObservable(error);
}
