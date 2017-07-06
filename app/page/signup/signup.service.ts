import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {RequestOptions, Response} from '@angular/http';
import {ORLPService} from "../../orlp.service";
import {User} from "./User";


@Injectable()
export class SignupService {
    private _controllerUrl = 'http://localhost:8080/api/registration';
    constructor(private _orlp: ORLPService) { }


    registerUser(newUser: User): Observable<User> {
      /*  let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers : headers });
        return this._orlp.post(this._controllerUrl, newUser, options).map(this.);*/
        return new Observable<User>();


    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    
}