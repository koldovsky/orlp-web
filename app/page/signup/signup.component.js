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
var router_1 = require("@angular/router");
var signup_service_1 = require("./signup.service");
var signup_alert_service_1 = require("./signup-alert.service");
var SignUpComponent = (function () {
    function SignUpComponent(router, signupService, signupAlert) {
        this.router = router;
        this.signupService = signupService;
        this.signupAlert = signupAlert;
        this.error = 'has-danger';
        this.loading = false;
    }
    SignUpComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.signupService.registerUser(this.newUser)
            .subscribe(function (data) {
            _this.signupAlert.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.signupAlert.error(error);
            _this.loading = false;
        });
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        template: require('app/page/signup/signup.component.html!text')
    }),
    __metadata("design:paramtypes", [router_1.Router,
        signup_service_1.SignupService,
        signup_alert_service_1.SignupAlertService])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map