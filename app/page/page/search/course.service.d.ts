import { ORLPService } from "../../../services/orlp.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CourseLink } from "../../../dto/CourseDTO/link.course.DTO";
export declare class CourseService {
    private orlp;
    constructor(orlp: ORLPService);
    getCourses(url: string): Observable<CourseLink[]>;
    private handleError(error);
}
