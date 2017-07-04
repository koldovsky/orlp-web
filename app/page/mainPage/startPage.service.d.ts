import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ICatalog } from "../../interfaces/catalogs";
import { ORLPService } from "../../orlp.service";
export declare class StartPageService {
    private orlp;
    private catalogsUrl;
    constructor(orlp: ORLPService);
    getCatalogs(): Observable<ICatalog[]>;
    private handleError(error);
}
