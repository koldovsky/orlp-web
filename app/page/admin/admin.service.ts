import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import {ICategory} from "../../interfaces/category";

@Injectable()
export class AdminService {

    constructor(private http: Http) { }

    getCatalogs() : Observable<ICategory[]> {
        return this.http.get('http://localhost:8080/api/category')
            .map((response: Response) => <ICategory[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)

    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}