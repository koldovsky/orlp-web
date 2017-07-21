import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

import {AuthService} from "angular2-social-login";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {error} from "util";

@Component({
    template: require('app/page/login/login.component.html!text')
})


export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    success: boolean = false;
    error: boolean = false;
    wrongDetails: boolean = false;
    public user;
    verificationStat: boolean = false;

    constructor(private fb: FormBuilder, private loginService: LoginService, public auth: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            password: ['', [Validators.required]],
            username: ['', [Validators.required]],
        })
    }

    login = () => {
        this.success = false;
        this.error = false;
        this.wrongDetails = false;
        this.loginService.signIn(this.loginForm.value)
            .subscribe((response) => {
                this.success = true;
                console.log(response.status);
                this.router.navigate(['main']);
            }, (error) => {
                this.processError(error);
            });
    }

    private processError(response) {
        this.success = false;
        if (response.status === 401) {
            this.wrongDetails = true;
            console.log(response.status)
        } else {
            this.error = true;
            console.log(response.status)
        }
    }

    signInGoogle(provider: string) {
        this.auth.login(provider).subscribe(
            (data) => {
                this.user = data;
                console.log(this.user.idToken);
                console.log(this.user.email);
                this.sendGoogleToken();
            }
        )
    }

    signInFacebook(provider: string) {
        this.auth.login(provider).subscribe(
            (data) => {
                this.user = data;
                console.log(this.user.token);
                console.log(this.user.email);
                this.sendFacebookToken();
            }
        )
    }

    sendFacebookToken() {
        this.loginService.sendFacebookToken(this.user.token).subscribe(
            error => console.log(error)
        )
    }

    sendGoogleToken() {
        this.loginService.sendGoogleIdToken(this.user.idToken).subscribe(
            error => console.log(error)
        );
    }
}