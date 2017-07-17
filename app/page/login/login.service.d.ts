import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { LoginAccount } from "./LoginAccount";
import { ORLPService } from "../../orlp.service";
export declare class LoginService {
    private http;
    private orlp;
    private _controllerUrl;
    constructor(http: Http, orlp: ORLPService);
    sendIdToken(idToken: string): Observable<any>;
    loginServ(account: LoginAccount): Observable<Response>;
    private extractData(res);
    private handleErrorObservable(error);
}
