import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ORLPService} from "../../../orlp.service";

@Injectable()
export class AccountVerificationService {
    private _controllerUrl = 'api/registrationConfirm';

    constructor(private orlp: ORLPService) {
    };

    accountVerificate(token: string): Observable<Response> {
        return this.orlp.post(this._controllerUrl, token);
    }


}