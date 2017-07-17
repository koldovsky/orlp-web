import { Injectable } from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {IDeck} from "../../../interfaces/deck";
import {ICourse} from "../../../interfaces/course";
import {Template} from "../../../interfaces/templateUrl";

@Injectable()
export class CourseService {
    constructor(private orlp: ORLPService) { }

    getCourse(id : number): Observable<ICourse[]> {
        return this.orlp.get('api/category/' + id + '/courses')
            .map((response: Response) => <ICourse[]> response.json())
            .do(data => console.log('Courses: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    addCourse(body: ICourse, id: number): Observable<ICourse> {
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let options = new RequestOptions({headers : headers});

        return this.orlp.post('api/category/' + id + '/courses', body)
            .map((res: Response) =>  res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}

