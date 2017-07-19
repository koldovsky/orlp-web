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
var User_1 = require("./User");
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
        this.user = new User_1.User();
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            firstName: ['', [forms_1.Validators.required]],
            lastName: ['', [forms_1.Validators.required]],
            email: ['', [forms_1.Validators.email, forms_1.Validators.required]],
            passwordGroup: this.formBuilder.group({
                password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
                confirmPassword: ['', [forms_1.Validators.required]],
            }, { validator: passwordMatcher })
        });
    };
    ;
    SignUpComponent.prototype.register = function () {
        var _this = this;
        this.error = false;
        this.success = false;
        this.errorEmailExists = false;
        this.mailNotSended = false;
        this.transferingDataFromFormToUserObj();
        console.log(this.user);
        this.signupService.registerUser(this.user)
            .subscribe(function () {
            _this.success = true;
        }, function (response) { return _this.processError(response); });
    };
    SignUpComponent.prototype.transferingDataFromFormToUserObj = function () {
        this.user.account.password = this.userForm.value.passwordGroup.password;
        this.user.account.email = this.userForm.value.email;
        this.user.person.firstName = this.userForm.value.firstName;
        this.user.person.lastName = this.userForm.value.lastName;
    };
    SignUpComponent.prototype.processError = function (response) {
        console.log(response.status);
        console.log(response.body);
        if (response.status === 400) {
            this.errorEmailExists = true;
        }
        else if (response.status === 201) {
            this.success = true;
            console.log(response.status);
        }
        else if (response.status === 404) {
            this.mailNotSended = true;
        }
        else {
            this.error = true;
        }
    };
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