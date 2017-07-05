import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../orlp.service";
import { User } from "./User";
export declare class SignupService {
    private _orlp;
    private _controllerUrl;
    constructor(_orlp: ORLPService);
    registerUser(newUser: User): Observable<User>;
    private handleError(error);
}
