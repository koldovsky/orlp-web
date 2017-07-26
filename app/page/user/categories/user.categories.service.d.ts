import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import { CategoriesPublic } from "../../../classes/CategoryDTO/public.categories";
export declare class UserCategoriesService {
    private orlp;
    constructor(orlp: ORLPService);
    getCategories(): Observable<CategoriesPublic[]>;
    private handleError(error);
}
