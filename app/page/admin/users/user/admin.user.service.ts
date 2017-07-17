import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {IUser} from '../../../../interfaces/user';

@Injectable()
export class AdminUserService {

    constructor(private http: Http) {
    }

    // getUsers(): Observable<IUser[]> {
    //     return this.http.get('http://localhost:8080//api/admin/users')
    //         .map((response: Response) => <IUser[]> response.json())
    //         .do(data => console.log('All: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}