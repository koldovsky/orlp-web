import { OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@angular/http";
import { AccountVerificationService } from "./accountVerification.service";
export declare class AccountVerificationComponent implements OnInit {
    private accVerify;
    private http;
    private router;
    private activatedRoute;
    token: string;
    error: boolean;
    verificationSuccess: boolean;
    constructor(accVerify: AccountVerificationService, http: Http, router: Router, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
}
