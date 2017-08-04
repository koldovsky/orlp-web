import {Injectable} from '@angular/core';
import {ORLPService} from "../../../services/orlp.service";
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DTOConverter} from "../../../dto/dto.Converter";
import {CourseLink} from "../../../dto/CourseDTO/link.course.DTO";

@Injectable()
export class CourseService {
    constructor(private orlp: ORLPService) {
    }

    getCourses(url: string): Observable<CourseLink[]> {
        return this.orlp.get(url)
            .map((response: Response) => <CourseLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCourse, response.json()))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}