import { OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountVerificationService } from "./accountVerification.service";
export declare class AccountVerificationComponent implements OnInit {
    private accVerify;
    private router;
    private activatedRoute;
    token: string;
    error: boolean;
    verificationError: boolean;
    constructor(accVerify: AccountVerificationService, router: Router, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
}
