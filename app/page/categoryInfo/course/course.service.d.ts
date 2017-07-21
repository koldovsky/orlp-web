import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CoursePublic } from "../../../classes/CourseDTO/public.course.DTO";
export declare class CourseService {
    private orlp;
    constructor(orlp: ORLPService);
    getCourse(url: string): Observable<CoursePublic[]>;
    addCourse(body: CoursePublic, url: string): Observable<CoursePublic>;
    private handleError(error);
}
