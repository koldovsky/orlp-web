import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../../services/orlp.service";
import { CategoriesPublic } from "../../../dto/CategoryDTO/public.categories";
export declare class CategoryService {
    private orlp;
    constructor(orlp: ORLPService);
    getCatalogs(): Observable<CategoriesPublic[]>;
    private handleError(error);
}
