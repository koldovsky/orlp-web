import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IUser } from "../../../interfaces/user";
export declare class AdminUsersService {
    private http;
    constructor(http: Http);
    getUsers(): Observable<IUser[]>;
    private handleError(error);
}
