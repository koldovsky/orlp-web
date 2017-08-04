import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ORLPService } from "../../../services/orlp.service";
export declare class AccountVerificationService {
    private orlp;
    private subject;
    private _controllerUrl;
    constructor(orlp: ORLPService);
    accountVerificate(token: string): Observable<Response>;
    sendMessage(): void;
    getMessage(): Observable<any>;
}
