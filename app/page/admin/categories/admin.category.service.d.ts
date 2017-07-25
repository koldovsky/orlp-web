import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../../orlp.service";
import { CategoriesPublic } from "../../../classes/CategoryDTO/public.categories";
export declare class AdminCategoryService {
    private orlp;
    constructor(orlp: ORLPService);
    getCatalogs(): Observable<CategoriesPublic[]>;
    addCategory(body: CategoriesPublic, url: string): Observable<CategoriesPublic>;
    private handleError(error);
}
