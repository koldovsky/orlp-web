import { OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountVerificationService } from "./accountVerification.service";
export declare class AccountVerificationComponent implements OnInit {
    private accVerify;
    private router;
    private activatedRoute;
    token: string;
    error: boolean;
<<<<<<< HEAD
    verificationError: boolean;
    constructor(accVerify: AccountVerificationService, router: Router, activatedRoute: ActivatedRoute);
=======
    verificationStat: boolean;
    constructor(accVerify: AccountVerificationService, http: Http, router: Router, activatedRoute: ActivatedRoute);
>>>>>>> 03b95e6b153f6db3cb2eba3fede5eeeae0e758a5
    ngOnInit(): void;
}
