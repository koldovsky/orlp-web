import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {LoginAccount} from "../../classes/LoginAccount";
import {ORLPService} from "../../orlp.service";


@Injectable()
export class LoginService {
    private _controllerUrl = 'http://localhost:8080/auth';

    constructor(private http: Http, private orlp: ORLPService) {
    }

    sendGoogleIdToken(idToken: string) {
        return this.orlp.post("api/auth/google", idToken)
            .map((response: Response) => console.log(response))
            .catch(this.handleErrorObservable);
    }

    sendFacebookToken(token: string) {
        return this.orlp.post("api/auth/facebook", token)
            .map((response: Response) => console.log(response))
            .catch(this.handleErrorObservable);
    }

    loginServ(account: LoginAccount): Observable<Response> {
        return this.http.post(this._controllerUrl, account);


    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }


}
