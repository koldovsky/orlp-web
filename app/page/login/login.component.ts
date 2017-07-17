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
            password: ['', [Validators.required]],
            username: ['', [Validators.required]],
        })
    }


    userLogin(): void {
        this.loginService.login(this.loginForm.value)
            .subscribe(() =>{console.log(this.loginForm.value)},
                (response) => this.processError(response));
    }

    private processError(response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.error = true;
        }
        console.log("status =" + response.status, "body =" + response.body);
        console.log(response.headers);
        if (response.status === 200) {
            this.success = true;
            console.log(1)
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

