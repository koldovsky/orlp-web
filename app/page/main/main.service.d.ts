import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../services/orlp.service";
import { CategoryTop } from "../../dto/CategoryDTO/top.category.DTO";
import { CourseTop } from "../../dto/CourseDTO/top.course.DTO";
export declare class MainService {
    private orlp;
    constructor(orlp: ORLPService);
    getCategories(): Observable<CategoryTop[]>;
    getCourses(): Observable<CourseTop[]>;
    private handleError(error);
}
