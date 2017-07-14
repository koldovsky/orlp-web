import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ICourse } from "../../../interfaces/course";
export declare class CourseService {
    private orlp;
    constructor(orlp: ORLPService);
    getCourse(id: number): Observable<ICourse[]>;
    addCourse(body: ICourse, id: number): Observable<ICourse>;
    private handleError(error);
}
