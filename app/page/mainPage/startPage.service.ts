import { Injectable } from '@angular/core';
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ICatalog} from "../../interfaces/catalogs";
import {ORLPService} from "../../orlp.service";

@Injectable()
export class StartPageService {

    private catalogsUrl: string = 'app/json/catalogs.json';

    constructor(private orlp: ORLPService) { }

    getCatalogs() : Observable<ICatalog[]> {
        return this.orlp.get(this.catalogsUrl)
            .map((response: Response) => <ICatalog[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)

    }

    getCatalogs2() : Observable<ICatalog[]> {
        return this.orlp.get('http://localhost:8080/api/topcategories')
            .map((response: Response) => <ICatalog[]> response.json())
            .do(data => console.log('TOP CATEGORIES: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}