import { OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "./login.service";
import { AuthService } from "angular2-social-login";
import { ActivatedRoute, Router } from "@angular/router";
export declare class LoginComponent implements OnInit {
    private activatedRoute;
    private fb;
    private loginService;
    auth: AuthService;
    private router;
    loginForm: FormGroup;
    success: boolean;
    error: boolean;
    wrongDetails: boolean;
    user: any;
    verificationError: boolean;
    constructor(activatedRoute: ActivatedRoute, fb: FormBuilder, loginService: LoginService, auth: AuthService, router: Router);
    ngOnInit(): void;
    login: () => void;
    private processError(response);
    signInGoogle(provider: string): void;
    signInFacebook(provider: string): void;
    sendFacebookToken(): void;
    sendGoogleToken(): void;
}
