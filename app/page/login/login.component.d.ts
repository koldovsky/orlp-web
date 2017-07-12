import { OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "./login.service";
import { AuthService } from "angular2-social-login";
export declare class LoginComponent implements OnInit {
    private fb;
    private loginService;
    auth: AuthService;
    loginForm: FormGroup;
    errorMessage: String;
    sub: any;
    success: boolean;
    errorUserExists: string;
    error: boolean;
    errorEmailExists: string;
    user: any;
    constructor(fb: FormBuilder, loginService: LoginService, auth: AuthService);
    ngOnInit(): void;
    userLogin(): void;
    private processError(response);
    signIn(provider: string): void;
    sendToken(): void;
}
