import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../services/orlp.service";
import { CategoryLink } from "../../dto/CategoryDTO/link.category.DTO";
export declare class CategoryInfoService {
    private orlp;
    constructor(orlp: ORLPService);
    getCategory(url: string): Observable<CategoryLink>;
    private handleError(error);
}
