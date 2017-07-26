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
var navbar_component_1 = require("./navbar.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var navbar_filter_pipe_1 = require("./navbar.filter.pipe");
var deck_service_1 = require("./deck.service");
var cabinet_module_1 = require("../cabinet/cabinet.module");
var categoryInfo_module_1 = require("../categoryInfo/categoryInfo.module");
var signup_module_1 = require("../signup/signup.module");
var main_module_1 = require("../main/main.module");
var login_module_1 = require("../login/login.module");
var admin_module_1 = require("../admin/admin.module");
var card_module_1 = require("../card/card.module");
var core_2 = require("angular2-cookie/core");
var orlp_service_1 = require("../../orlp.service");
var angular_star_rating_1 = require("angular-star-rating");
var logout_service_1 = require("../logout/logout.service");
var navbar_service_1 = require("./navbar.service");
var user_module_1 = require("../user/user.module");
var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'main', pathMatch: 'full' },
                { path: '**', redirectTo: 'main', pathMatch: 'full' }
            ]),
            categoryInfo_module_1.CategoryInfoModule,
            signup_module_1.SignUpModule,
            login_module_1.LoginModule,
            main_module_1.MainModule,
            admin_module_1.AdminModule,
            card_module_1.CardModule,
            cabinet_module_1.CabinetModule,
            angular_star_rating_1.StarRatingModule,
            user_module_1.UserModule
        ],
        exports: [],
        declarations: [
            navbar_component_1.NavbarComponent,
            navbar_filter_pipe_1.NavbarFilterPipe,
        ],
        providers: [orlp_service_1.ORLPService, deck_service_1.DeckService, core_2.CookieService, logout_service_1.LogoutService, navbar_service_1.NavbarService],
        bootstrap: [navbar_component_1.NavbarComponent]
    })
], NavbarModule);
exports.NavbarModule = NavbarModule;
//# sourceMappingURL=navbar.module.js.map