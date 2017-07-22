import { OnInit } from "@angular/core";
import { LogoutService } from "./logout/logout.service";
import { Router } from "@angular/router";
export declare class PageComponent implements OnInit {
    private logoutService;
    private router;
    pageTitle: string;
    isAuthorized: boolean;
    constructor(logoutService: LogoutService, router: Router);
    ngOnInit(): void;
    ifUserIsAuthorized(): boolean;
    logoutUser(): void;
}
