import { Injectable } from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {IDeck} from "../../../interfaces/deck";
import {ICourse} from "../../../interfaces/course";

@Injectable()
export class Table1Service {
    constructor(private orlp: ORLPService) { }

    getCourse(id : number): Observable<ICourse[]> {
        return this.orlp.get('http://localhost:8080/api/category/' + id + '/courses')
            .map((response: Response) => <ICourse[]> response.json())
            .do(data => console.log('Courses: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}