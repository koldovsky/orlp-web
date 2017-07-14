import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { ORLPService } from "../../orlp.service";
import { LoginAccount } from "./LoginAccount";
export declare class LoginService {
    private http;
    private orlp;
    private _controllerUrl;
    constructor(http: Http, orlp: ORLPService);
    sendIdToken(idToken: string): Observable<any>;
    login(account: LoginAccount): Observable<LoginAccount>;
    private extractData(res);
    private handleErrorObservable(error);
}
