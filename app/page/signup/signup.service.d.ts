import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import { ORLPService } from "../../services/orlp.service";
import { User } from "../../dto/User";
export declare class SignupService {
    private _orlp;
    private http;
    private _controllerUrl;
    constructor(_orlp: ORLPService, http: Http);
    registerUser(newUser: User): Observable<User>;
    private extractData(res);
    private handleErrorObservable(error);
}
