import { ORLPService } from "../../../services/orlp.service";
import { Observable } from "rxjs/Observable";
import { CoursePublic } from "../../../dto/CourseDTO/public.course.DTO";
export declare class UserCoursesService {
    private orlp;
    constructor(orlp: ORLPService);
    getCourses(): Observable<CoursePublic[]>;
    private handleError(error);
}
