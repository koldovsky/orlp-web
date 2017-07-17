import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

import {AuthService} from "angular2-social-login";

declare const gapi: any;

@Component({
    template: require('app/page/login/login.component.html!text')
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    success: boolean = false;
    error: boolean = false;
    public user;

    constructor(private fb: FormBuilder, private loginService: LoginService, public auth: AuthService) {

    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            password: ['', [Validators.required]],
            username: ['', [Validators.required]],
        })
    }


    login(): void {
        this.loginService.loginServ(this.loginForm.value)
            .subscribe(response => this.processError(response));
    }

    private processError(response){
        this.success = false;
        if (response.status === 401){
            this.error = true;

        }

    }

    signIn(provider: string) {
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