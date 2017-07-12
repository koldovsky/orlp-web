import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from "../../orlp.service";
import {ICategory} from "../../interfaces/category";
import {Template} from "../../interfaces/templateUrl";

@Injectable()
export class StartPageService {

    constructor(private http: Http) { }

    getCategories() : Observable<ICategory[]> {
        return this.http.get(Template.url + '/api/category/top')
            .map((response: Response) => <ICategory[]> response.json())
            .do(data => console.log('TOP CATEGORIES: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}
