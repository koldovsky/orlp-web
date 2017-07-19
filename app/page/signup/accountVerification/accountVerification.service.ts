import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AccountVerificationService {
    private _controllerUrl = 'http://localhost:8080/api/registrationConfirm';

    constructor(private http: Http) {
    };

    accountVerificate(token: string): Observable<Response> {
        return this.http.post(this._controllerUrl, token);
    }


}