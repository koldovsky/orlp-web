import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { ORLPService } from "../../orlp.service";
import { LoginAccount } from "./LoginAccount";
export declare class LoginService {
    private orlp;
    private http;
    private _controllerUrl;
    constructor(orlp: ORLPService, http: Http);
    login(account: LoginAccount): Observable<LoginAccount>;
    private extractData(res);
    private handleErrorObservable(error);
}
