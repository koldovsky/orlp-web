import { Injectable } from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {IDeck} from "../../../interfaces/deck";
import {Template} from "../../../interfaces/templateUrl";

@Injectable()
export class DeckService {

    constructor(private orlp: ORLPService) { }

    getDeck(id : number): Observable<IDeck[]> {
        return this.orlp.get('api/category/' + id + '/decks')
            .map((response: Response) => <IDeck[]> response.json())
            .do(data => console.log('Decks: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    addDeck(body: IDeck, id: number): Observable<IDeck> {
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let options = new RequestOptions({headers : headers});

        return this.orlp.post('api/category/' + id + '/decks', body)
            .map((res: Response) =>  res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }

}