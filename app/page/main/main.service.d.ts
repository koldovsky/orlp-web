import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../orlp.service";
import { CategoryTop } from "../../classes/CategoryDTO/top.category.DTO";
import { CourseTop } from "../../classes/CourseDTO/top.course.DTO";
export declare class MainService {
    private orlp;
    constructor(orlp: ORLPService);
    getCategories(): Observable<CategoryTop[]>;
    getCourses(): Observable<CourseTop[]>;
    private handleError(error);
}
