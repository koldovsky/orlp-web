import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";
import "rxjs/add/operator/map";
import { LoginAccount } from "../../classes/LoginAccount";
import { ORLPService } from "../../orlp.service";
export declare class LoginService {
    private orlp;
    constructor(orlp: ORLPService);
    sendGoogleIdToken(idToken: string): Observable<any>;
    sendFacebookToken(token: string): Observable<any>;
    signIn(account: LoginAccount): Observable<Response>;
    private extractData(res);
    private handleErrorObservable(error);
}
