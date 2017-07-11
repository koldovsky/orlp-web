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
var LoginComponent = (function () {
    function LoginComponent(fb, loginService) {
        this.fb = fb;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [forms_1.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]"), forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required]],
        });
    };
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        this.error = false;
        this.success = false;
        this.loginService.login(this.loginForm.value)
            .subscribe(function () {
            _this.success = true;
            console.log(_this.loginForm);
        }, function (response) { return _this.processError(response); });
    };
    LoginComponent.prototype.processError = function (response) {
        if (response.status === 401) {
            this.error = true;
        }
        else if (response.status === 201) {
            this.success = true;
        }
        else
            this.error = true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: require('app/page/login/login.component.html!text')
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map