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
var User_1 = require("./User");
var forms_1 = require("@angular/forms");
var SignUpComponent = (function () {
    function SignUpComponent(router, signupService, fb) {
        this.router = router;
        this.signupService = signupService;
        this.fb = fb;
        this.error = 'has-danger';
        this.newUser = new User_1.User();
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.userForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
        });
    };
    SignUpComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
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