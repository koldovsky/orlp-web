import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {ORLPService} from "../../orlp.service";
import {IUser} from "./User";


@Injectable()
export class SignupService {
    private _controllerUrl = 'http://localhost:8080/api/registration';
    constructor(private _orlp: ORLPService) { }


    registerUser(newUser: IUser): Observable<any[]> {
        return this._orlp.post(this._controllerUrl, newUser).map((response: Response) => {
        response.json()
        }).catch(this.handleError);

    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    
}