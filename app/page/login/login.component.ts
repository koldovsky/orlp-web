import {Component, Input, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {AuthService} from "angular2-social-login";
<<<<<<< Updated upstream
import {ActivatedRoute, Params, Router} from "@angular/router";
import {error} from "util";
=======
import {Router} from "@angular/router";
import {AccountVerificationService} from "../signup/accountVerification/accountVerification.service";
import {LoginAccount} from "../../classes/LoginAccount";
>>>>>>> Stashed changes

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
    account: LoginAccount;
    captcha: string;

<<<<<<< Updated upstream
    constructor(private fb: FormBuilder, private loginService: LoginService, public auth: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
=======
    constructor(private fb: FormBuilder,
                private loginService: LoginService,
                public auth: AuthService,
                private router: Router,
                private accountVerify: AccountVerificationService) {
>>>>>>> Stashed changes
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
        this.account = this.loginForm.value;
        this.account.captcha = this.captcha;
        this.loginService.signIn(this.account)
            .subscribe((response) => {
                this.success = true;
                console.log(response.status);
                console.log(response.json());
                this.router.navigate(['main']);
                window.location.reload();
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

    handleCorrectCaptcha($event){
        this.captcha = $event;
    }
    validLogin(): boolean{
        return this.loginForm.valid && (this.captcha != null);
    }
}