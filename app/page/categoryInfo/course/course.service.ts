import { Injectable } from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {CoursePublic} from "../../../classes/CourseDTO/public.course.DTO";
import {DTOConverter} from "../../../classes/dto.Converter";

@Injectable()
export class CourseService {
    constructor(private orlp: ORLPService) { }

    getCourse(url : string): Observable<CoursePublic[]> {
        return this.orlp.get(url)
            .map((response: Response) => <CoursePublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCourse, response.json()))
            .catch(this.handleError);
    }

    addCourse(body: CoursePublic, url: string): Observable<CoursePublic> {
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let options = new RequestOptions({headers : headers});

        return this.orlp.post(url, body)
            .map((res: Response) =>  res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}

