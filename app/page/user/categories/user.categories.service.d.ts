import { ORLPService } from "../../../services/orlp.service";
import { Observable } from "rxjs/Observable";
import { CategoriesPublic } from "../../../dto/CategoryDTO/public.categories";
export declare class UserCategoriesService {
    private orlp;
    constructor(orlp: ORLPService);
    getCategories(): Observable<CategoriesPublic[]>;
    private handleError(error);
}
