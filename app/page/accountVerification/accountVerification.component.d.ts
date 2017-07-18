import { OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@angular/http";
export declare class AccountVerificationComponent implements OnInit {
    private activatedRoute;
    private http;
    private router;
    token: string;
    _url: string;
    constructor(activatedRoute: ActivatedRoute, http: Http, router: Router);
    ngOnInit(): void;
    sendTokenToController: () => void;
}
