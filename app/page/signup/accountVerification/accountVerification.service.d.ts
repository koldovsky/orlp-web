import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../../orlp.service";
export declare class AccountVerificationService {
    private orlp;
    private _controllerUrl;
    constructor(orlp: ORLPService);
    accountVerificate(token: string): Observable<Response>;
}
