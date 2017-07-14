import {Component, NgZone, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {AuthService} from "angular2-social-login";
import {User} from "../signup/User";

declare const gapi: any;

@Component({
    template: require('app/page/login/login.component.html!text')
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    errorMessage: String;
    sub: any;
    success: boolean = false;
    errorUserExists: string;
    error: boolean = false;
    errorEmailExists: string;
    public user;

    constructor(private fb: FormBuilder, private loginService: LoginService, public auth: AuthService) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]"), Validators.required]],
            password: ['', [Validators.required]],

        })
    }


    userLogin(): void {
        this.loginService.login(this.loginForm.value)
            .subscribe(() => {
                    this.success = true;
                    console.log(this.loginForm.value);
                },

                (response) => this.processError(response));
    }

    private processError(response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.error = true;
        }
    }

    signIn(provider:string) {
        this.auth.login(provider).subscribe(
            (data) => {
                this.user = data;
                console.log(this.user.idToken);
                console.log(this.user.email);
                this.sendToken();
            }
        )
    }

    sendToken() {
        this.loginService.sendIdToken(this.user.idToken).subscribe(
            error => console.log(error)
        );
    }
}

