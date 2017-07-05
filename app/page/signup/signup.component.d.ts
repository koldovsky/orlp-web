import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SignupService } from "./signup.service";
import { User } from "./User";
import { FormBuilder, FormGroup } from "@angular/forms";
export declare class SignUpComponent implements OnInit {
    private router;
    private signupService;
    private fb;
    newUser: User;
    userForm: FormGroup;
    error: string;
    constructor(router: Router, signupService: SignupService, fb: FormBuilder);
    ngOnInit(): void;
    onSubmit({value, valid}: {
        value: User;
        valid: boolean;
    }): void;
}
