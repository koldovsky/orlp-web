import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
    template: require('app/page/login/login.component.html!text')
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    errorMessage: String;
    success: boolean = false;
    errorUserExists: string;
    error: boolean = false;
    errorEmailExists: string;

    constructor(private fb: FormBuilder, private loginService: LoginService) {
    }


    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]"), Validators.required]],
            password: ['', [Validators.required]],

        })
    }

    userLogin(): void {
        this.loginService.login(this.loginForm.value)
            .subscribe(() => {
                    this.success = true;
                },
                (response) => this.processError(response));
    }

    private processError(response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.errorUserExists = 'ERROR';
        } else if (response.status === 400 && response._body === 'email address already in use') {
            this.errorEmailExists = 'ERROR';
        } else {
            this.error = true;
        }

    }
}

