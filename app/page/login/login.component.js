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
    function LoginComponent(fb, loginService, auth, router) {
        var _this = this;
        this.fb = fb;
        this.loginService = loginService;
        this.auth = auth;
        this.router = router;
        this.success = false;
        this.error = false;
        this.wrongDetails = false;
        this.login = function () {
            _this.success = false;
            _this.error = false;
            _this.wrongDetails = false;
            _this.loginService.loginServ(_this.loginForm.value)
                .subscribe(function (response) {
                _this.success = true;
                console.log(response.status);
                _this.router.navigate(['registr']);
            }, function (error) {
                _this.processError(error);
            });
        };
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
    LoginComponent.prototype.signIn = function (provider) {
        var _this = this;
        this.auth.login(provider).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.idToken);
            console.log(_this.user.email);
            _this.sendToken();
        });
    };
    LoginComponent.prototype.sendToken = function () {
        this.loginService.sendIdToken(this.user.idToken).subscribe(function (error) { return console.log(error); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: require('app/page/login/login.component.html!text')
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, login_service_1.LoginService, angular2_social_login_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map