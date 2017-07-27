import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ORLPService } from "../../orlp.service";
import { UserDetailsDto } from "../../classes/UserDetailsDto";
export declare class NavbarService {
    private orlp;
    constructor(orlp: ORLPService);
    getUserDetails(): Observable<UserDetailsDto>;
    private handleError(error);
}
