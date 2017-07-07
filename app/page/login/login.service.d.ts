import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Account } from "../signup/Account";
import "rxjs/add/operator/map";
import { ORLPService } from "../../orlp.service";
import { FormGroup } from "@angular/forms";
export declare class LoginService {
    private orlp;
    private http;
    private _controllerUrl;
    constructor(orlp: ORLPService, http: Http);
    login(account: FormGroup): Observable<Account>;
    private extractData(res);
    private handleErrorObservable(error);
}
