"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var page_component_1 = require("./page/page.component");
var router_1 = require("@angular/router");
var login_component_1 = require("./page/login/login.component");
var http_1 = require("@angular/http");
var signup_component_1 = require("./page/signup/signup.component");
var orlp_service_1 = require("./orlp.service");
var signup_service_1 = require("./page/signup/signup.service");
var signup_alert_service_1 = require("./page/signup/signup-alert.service");
var admin_component_1 = require("./page/admin/admin.component");
var startPage_module_1 = require("./page/mainPage/startPage.module");
var catalogInfo_module_1 = require("./page/catalogInfo/catalogInfo.module");
var PageModule = (function () {
    function PageModule() {
    }
    return PageModule;
}());
PageModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot([
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'registr', component: signup_component_1.SignUpComponent },
                { path: 'admin', component: admin_component_1.AdminComponent },
                { path: '', redirectTo: 'startPage', pathMatch: 'full' },
                { path: '**', redirectTo: 'startPage', pathMatch: 'full' }
            ]),
            catalogInfo_module_1.CategoryInfoModule,
            startPage_module_1.StartPageModule
        ],
        exports: [],
        declarations: [
            page_component_1.PageComponent,
            login_component_1.LoginComponent,
            signup_component_1.SignUpComponent,
            admin_component_1.AdminComponent
        ],
        providers: [orlp_service_1.ORLPService, signup_service_1.SignupService, signup_alert_service_1.SignupAlertService],
        bootstrap: [page_component_1.PageComponent]
    })
], PageModule);
exports.PageModule = PageModule;
//# sourceMappingURL=page.module.js.map