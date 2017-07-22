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
var navbar_component_1 = require("./page/navbar.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var orlp_service_1 = require("./orlp.service");
var main_module_1 = require("./page/main/main.module");
var admin_module_1 = require("./page/admin/admin.module");
var card_module_1 = require("./page/card/card.module");
var login_module_1 = require("./page/login/login.module");
var categoryInfo_module_1 = require("./page/categoryInfo/categoryInfo.module");
var core_2 = require("angular2-cookie/core");
var logout_service_1 = require("./page/logout/logout.service");
var SignUpModule_1 = require("./page/signup/SignUpModule");
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
                // {path: 'admin', component: AdminComponent},
                { path: '', redirectTo: 'main', pathMatch: 'full' },
                { path: '**', redirectTo: 'main', pathMatch: 'full' }
            ]),
            categoryInfo_module_1.CategoryInfoModule,
            main_module_1.MainModule,
            SignUpModule_1.SignUpModule,
            login_module_1.LoginModule,
            main_module_1.MainModule,
            admin_module_1.AdminModule,
            card_module_1.CardModule,
        ],
        exports: [],
        declarations: [
            navbar_component_1.PageComponent,
        ],
        providers: [
            orlp_service_1.ORLPService,
            core_2.CookieService,
            logout_service_1.LogoutService
        ],
        bootstrap: [navbar_component_1.PageComponent,]
    })
], PageModule);
exports.PageModule = PageModule;
//# sourceMappingURL=page.module.js.map