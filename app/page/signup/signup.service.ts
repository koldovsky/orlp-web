import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {Response} from '@angular/http';
import {ORLPService} from "../../orlp.service";
import {User} from "./User";


@Injectable()
export class SignupService {
    private _controllerUrl = 'http://localhost:8080/api/registration';
    constructor(private _orlp: ORLPService) { }


    registerUser(newUser: User): Observable<User> {
        return this._orlp.post(this._controllerUrl, newUser).map((response: Response) => <User> response.json());


    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    
}