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
    private activatedRoute;
    loginForm: FormGroup;
    success: boolean;
    error: boolean;
    wrongDetails: boolean;
    user: any;
<<<<<<< HEAD
    verificationError: boolean;
    constructor(activatedRoute: ActivatedRoute, fb: FormBuilder, loginService: LoginService, auth: AuthService, router: Router);
=======
    verificationStat: boolean;
    constructor(fb: FormBuilder, loginService: LoginService, auth: AuthService, router: Router, activatedRoute: ActivatedRoute);
>>>>>>> 03b95e6b153f6db3cb2eba3fede5eeeae0e758a5
    ngOnInit(): void;
    login: () => void;
    private processError(response);
    signInGoogle(provider: string): void;
    signInFacebook(provider: string): void;
    sendFacebookToken(): void;
    sendGoogleToken(): void;
}
