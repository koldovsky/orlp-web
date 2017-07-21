"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var login_service_1 = require("./login.service");
var angular2_social_login_1 = require("angular2-social-login");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
<<<<<<< HEAD
    function LoginComponent(activatedRoute, fb, loginService, auth, router) {
=======
    function LoginComponent(fb, loginService, auth, router, activatedRoute) {
>>>>>>> 03b95e6b153f6db3cb2eba3fede5eeeae0e758a5
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.loginService = loginService;
        this.auth = auth;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.success = false;
        this.error = false;
        this.wrongDetails = false;
        this.verificationStat = false;
        this.login = function () {
            _this.success = false;
            _this.error = false;
            _this.wrongDetails = false;
            _this.loginService.signIn(_this.loginForm.value)
                .subscribe(function (response) {
                _this.success = true;
                console.log(response.status);
                _this.router.navigate(['main']);
            }, function (error) {
                _this.processError(error);
            });
        };
        this.activatedRoute.queryParams.subscribe(function (params) {
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            password: ['', [forms_1.Validators.required]],
            username: ['', [forms_1.Validators.required]],
        });
    };
    LoginComponent.prototype.processError = function (response) {
        this.success = false;
        if (response.status === 401) {
            this.wrongDetails = true;
            console.log(response.status);
        }
        else {
            this.error = true;
            console.log(response.status);
        }
    };
    LoginComponent.prototype.signInGoogle = function (provider) {
        var _this = this;
        this.auth.login(provider).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.idToken);
            console.log(_this.user.email);
            _this.sendGoogleToken();
        });
    };
    LoginComponent.prototype.signInFacebook = function (provider) {
        var _this = this;
        this.auth.login(provider).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.token);
            console.log(_this.user.email);
            _this.sendFacebookToken();
        });
    };
    LoginComponent.prototype.sendFacebookToken = function () {
        this.loginService.sendFacebookToken(this.user.token).subscribe(function (error) { return console.log(error); });
    };
    LoginComponent.prototype.sendGoogleToken = function () {
        this.loginService.sendGoogleIdToken(this.user.idToken).subscribe(function (error) { return console.log(error); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: require('app/page/login/login.component.html!text')
    }),
<<<<<<< HEAD
    __metadata("design:paramtypes", [router_1.ActivatedRoute, forms_1.FormBuilder, login_service_1.LoginService, angular2_social_login_1.AuthService, router_1.Router])
=======
    __metadata("design:paramtypes", [forms_1.FormBuilder, login_service_1.LoginService, angular2_social_login_1.AuthService, router_1.Router, router_1.ActivatedRoute])
>>>>>>> 03b95e6b153f6db3cb2eba3fede5eeeae0e758a5
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map