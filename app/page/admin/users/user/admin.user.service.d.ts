import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../../../orlp.service";
import { UsersPublic } from "../../../../classes/public.users.DTO";
export declare class AdminUserService {
    private orlp;
    constructor(orlp: ORLPService);
    getUser(url: string): Observable<UsersPublic>;
    updateAccountState(body: UsersPublic, url: string): Observable<UsersPublic>;
    deleteAccountState(body: UsersPublic, url: string): Observable<UsersPublic>;
    private handleError(error);
}
