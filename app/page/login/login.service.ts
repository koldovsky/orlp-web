import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Account} from "../signup/Account";
import "rxjs/add/operator/map";
import {ORLPService} from "../../orlp.service";
import {FormGroup} from "@angular/forms";
import {LoginAccount} from "./LoginAccount";
import {Template} from "../../interfaces/templateUrl";


@Injectable()
export class LoginService {
    private _controllerUrl = 'http://localhost:8080/auth';

    constructor(private http: Http) {
    }

    sendIdToken(idToken: string) {
        console.log(idToken);
        return this.http.post(Template.url + "/api/auth/google", idToken, {})
            .map((response: Response) => console.log(response))
            .catch(this.handleErrorObservable);
    }

    login(account: LoginAccount): Observable<Account> {
        let bodyString = JSON.stringify(account);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        console.log(account);
        return this.http.post(this._controllerUrl, account, {})
            .map((response: Response) => console.log(response))
            .catch(this.handleErrorObservable);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }


}
