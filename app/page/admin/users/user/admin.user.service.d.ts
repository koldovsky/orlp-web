import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../../../orlp.service";
import { AdminUsers } from "../../../../classes/admin.users.DTO";
export declare class AdminUserService {
    private orlp;
    constructor(orlp: ORLPService);
    getUser(url: string): Observable<AdminUsers>;
    updateAccountState(body: AdminUsers, url: string): Observable<AdminUsers>;
<<<<<<< HEAD
    deleteAccountState(url: string): Observable<AdminUsers>;
=======
    deleteAccountState(body: AdminUsers, url: string): Observable<AdminUsers>;
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
    private handleError(error);
}
