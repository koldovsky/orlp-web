"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var signup_component_1 = require("./signup.component");
var router_1 = require("@angular/router");
var signup_service_1 = require("./signup.service");
var accountVerification_component_1 = require("./accountVerification/accountVerification.component");
var accountVerification_service_1 = require("./accountVerification/accountVerification.service");
var SignUpModule = (function () {
    function SignUpModule() {
    }
    return SignUpModule;
}());
SignUpModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot([
                { path: 'registr', component: signup_component_1.SignUpComponent },
                { path: 'registrationConfirm', component: accountVerification_component_1.AccountVerificationComponent }
            ])
        ],
        exports: [],
        declarations: [
            signup_component_1.SignUpComponent, accountVerification_component_1.AccountVerificationComponent
        ],
        providers: [
            signup_service_1.SignupService, accountVerification_service_1.AccountVerificationService
        ],
    })
], SignUpModule);
exports.SignUpModule = SignUpModule;
//# sourceMappingURL=signup.module.js.map