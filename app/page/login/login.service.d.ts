import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { LoginAccount } from "./LoginAccount";
export declare class LoginService {
    private http;
    private _controllerUrl;
    constructor(http: Http);
    login(account: LoginAccount): Observable<LoginAccount>;
    private extractData(res);
    private handleErrorObservable(error);
}
