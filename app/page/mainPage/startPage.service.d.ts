import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../orlp.service";
import { CategoryTop } from "../../classes/top.category.DTO";
export declare class StartPageService {
    private orlp;
    constructor(orlp: ORLPService);
    getCategories(): Observable<CategoryTop[]>;
    private handleError(error);
}
