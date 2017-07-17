import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Params} from "@angular/router";
import {Http} from "@angular/http";
@Injectable()
export class AccountVerificationService {
    private _controllerUrl = 'http://localhost:8080/api/registrationConfirm';




    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }
}