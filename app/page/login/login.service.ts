import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {ORLPService} from "../../orlp.service";
import {LoginAccount} from "./LoginAccount";
import {Template} from "../../interfaces/templateUrl";


@Injectable()
export class LoginService {
    private _controllerUrl = 'http://localhost:8080/auth';

    constructor(private http: Http,
                private orlp: ORLPService) {
    }

    sendIdToken(idToken: string) {
        return this.orlp.post("api/auth/google", idToken)
            .map((response: Response) => console.log(response))
            .catch(this.handleErrorObservable);
    }

    login(account: LoginAccount): Observable<LoginAccount> {
        console.log(account);
        return this.http.post(this._controllerUrl, account).map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }


}
