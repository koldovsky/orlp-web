import { Injectable } from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {IDeck} from "../../../interfaces/deck";

@Injectable()
export class Table2Service {

    constructor(private orlp: ORLPService) { }

    getDeck(id : number): Observable<IDeck[]> {
        return this.orlp.get('http://localhost:8080/api/category/' + id + '/decks')
            .map((response: Response) => <IDeck[]> response.json())
            .do(data => console.log('Decks: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }

}