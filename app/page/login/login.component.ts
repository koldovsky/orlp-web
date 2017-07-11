import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {LoginAccount} from "./LoginAccount";

@Component({
    template: require('app/page/login/login.component.html!text')
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginAcc: LoginAccount;
    errorMessage: String;
    success: boolean;
    error: boolean;


    constructor(private fb: FormBuilder, private loginService: LoginService) {
    }


    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]"), Validators.required]],
            password: ['', [Validators.required]],

        })
    }

    userLogin(): void {
        this.error = false;
        this.success = false;
        this.loginService.login(this.loginForm.value)
            .subscribe(() => {
                    this.success = true;
                    console.log(this.loginForm);
                },

                (response) => this.processError(response));
    }

    private processError(response) {
        if (response.status === 401) {
            this.error = true;
        } else if (response.status === 201) {
            this.success = true;
        } else
            this.error = true;
    }
}




