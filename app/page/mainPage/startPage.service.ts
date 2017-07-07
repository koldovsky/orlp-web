import { Injectable } from '@angular/core';
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from "../../orlp.service";
import {ICategory} from "../../interfaces/category";

@Injectable()
export class StartPageService {

    constructor(private orlp: ORLPService) { }


    getCatalogs() : Observable<ICategory[]> {
        return this.orlp.get('app/json/catalogs.json')
            .map((response: Response) => <ICategory[]> response.json())
            .do(data => console.log('TOP CATEGORIES: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCategories() : Observable<ICategory[]> {
        return this.orlp.get('http://localhost:8080/api/topcategories')
            .map((response: Response) => <ICategory[]> response.json())
            .do(data => console.log('TOP CATEGORIES: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}