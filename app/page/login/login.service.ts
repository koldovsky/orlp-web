import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {LoginAccount} from "../../classes/LoginAccount";
import {ORLPService} from "../../orlp.service";


@Injectable()
export class LoginService {
    constructor(private http: Http, private orlp: ORLPService) {
    }

    sendIdToken(idToken: string) {
        return this.orlp.post("api/auth/google", idToken)
            .map((response: Response) => console.log(response))
            .catch(this.handleErrorObservable);
    }

    signIn(account: LoginAccount): Observable<Response> {
        return this.orlp.post("api/auth", account);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }
}
