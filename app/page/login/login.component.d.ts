import { OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "./login.service";
import { LoginAccount } from "./LoginAccount";
export declare class LoginComponent implements OnInit {
    private fb;
    private loginService;
    loginForm: FormGroup;
    loginAcc: LoginAccount;
    errorMessage: String;
    success: boolean;
    error: boolean;
    constructor(fb: FormBuilder, loginService: LoginService);
    ngOnInit(): void;
    userLogin(): void;
    private processError(response);
}
