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
var forms_1 = require("@angular/forms");
var Person_1 = require("./Person");
var Account_1 = require("./Account");
function passwordMatcher(c) {
    var passwordControl = c.get('password');
    var confirmPassword = c.get('confirmPassword');
    if (passwordControl.value === confirmPassword.value) {
        return null;
    }
    return { 'match': true };
}
var SignUpComponent = (function () {
    function SignUpComponent(router, signupService, formBuilder) {
        this.router = router;
        this.signupService = signupService;
        this.formBuilder = formBuilder;
        this.person = new Person_1.Person();
        this.account = new Account_1.Account();
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            email: ['', [forms_1.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]"), forms_1.Validators.required]],
            passwordGroup: this.formBuilder.group({
                password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
                confirmPassword: ['', [forms_1.Validators.required]],
            }, { validator: passwordMatcher })
        });
    };
    ;
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        template: require('app/page/signup/signup.component.html!text')
    }),
    __metadata("design:paramtypes", [router_1.Router,
        signup_service_1.SignupService,
        forms_1.FormBuilder])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map