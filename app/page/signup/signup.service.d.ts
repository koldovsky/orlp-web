import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../orlp.service";
import { IUser } from "./User";
export declare class SignupService {
    private _orlp;
    private _controllerUrl;
    constructor(_orlp: ORLPService);
    registerUser(newUser: IUser): Observable<any[]>;
    private handleError(error);
}
