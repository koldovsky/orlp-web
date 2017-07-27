import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../../orlp.service";
import { AdminUsers } from "../../../classes/admin.users.DTO";
export declare class AdminUsersService {
    private orlp;
    constructor(orlp: ORLPService);
    getUsers(): Observable<AdminUsers[]>;
    private handleError(error);
}
