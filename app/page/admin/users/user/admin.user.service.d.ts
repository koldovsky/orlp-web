import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../../../services/orlp.service";
import { AdminUsers } from "../../../../dto/admin.users.DTO";
export declare class AdminUserService {
    private orlp;
    constructor(orlp: ORLPService);
    getUser(url: string): Observable<AdminUsers>;
    updateAccountState(body: AdminUsers, url: string): Observable<AdminUsers>;
    deleteAccountState(url: string): Observable<AdminUsers>;
    private handleError(error);
}
