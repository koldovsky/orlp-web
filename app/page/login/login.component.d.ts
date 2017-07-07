import { OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "./login.service";
export declare class LoginComponent implements OnInit {
    private fb;
    private loginService;
    loginForm: FormGroup;
    errorMessage: String;
    success: boolean;
    errorUserExists: string;
    error: boolean;
    errorEmailExists: string;
    constructor(fb: FormBuilder, loginService: LoginService);
    ngOnInit(): void;
    userLogin(): void;
    private processError(response);
}
