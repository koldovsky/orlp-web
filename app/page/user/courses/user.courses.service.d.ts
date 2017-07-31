import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import { CoursePublic } from "../../../classes/CourseDTO/public.course.DTO";
export declare class UserCoursesService {
    private orlp;
    constructor(orlp: ORLPService);
    getCourses(): Observable<CoursePublic[]>;
    private handleError(error);
}
