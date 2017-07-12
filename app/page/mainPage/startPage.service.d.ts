import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ICategory } from "../../interfaces/category";
export declare class StartPageService {
    private http;
    constructor(http: Http);
    getCategories(): Observable<ICategory[]>;
    private handleError(error);
}
