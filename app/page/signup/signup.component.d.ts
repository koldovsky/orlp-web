import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SignupService } from "./signup.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Person } from "./Person";
import { Account } from "./Account";
export declare class SignUpComponent implements OnInit {
    private router;
    private signupService;
    private formBuilder;
    userForm: FormGroup;
    person: Person;
    account: Account;
    constructor(router: Router, signupService: SignupService, formBuilder: FormBuilder);
    ngOnInit(): void;
}
