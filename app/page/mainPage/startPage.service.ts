import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ICatalog} from "./catalogs";

@Injectable()
export class StartPageService {

    private catalogsUrl = 'app/json/catalogs.json';

    constructor(private http: Http) { }

    getCatalogs() : Observable<ICatalog[]> {
        return this.http.get(this.catalogsUrl)
            .map((response: Response) => <ICatalog[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}