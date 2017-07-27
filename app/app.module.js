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
var navbar_component_1 = require("./page/navbar/navbar.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var cabinet_module_1 = require("./page/cabinet/cabinet.module");
var categoryInfo_module_1 = require("./page/categoryInfo/categoryInfo.module");
var signup_module_1 = require("./page/signup/signup.module");
var main_module_1 = require("./page/main/main.module");
var login_module_1 = require("./page/login/login.module");
var admin_module_1 = require("./page/admin/admin.module");
var card_module_1 = require("./page/card/card.module");
var core_2 = require("angular2-cookie/core");
var orlp_service_1 = require("./orlp.service");
var angular_star_rating_1 = require("angular-star-rating");
var logout_service_1 = require("./page/logout/logout.service");
var cabinet_service_1 = require("./page/cabinet/cabinet.service");
var navbar_service_1 = require("./page/navbar/navbar.service");
var deck_service_1 = require("./page/navbar/search/deck.service");
var deck_filter_pipe_1 = require("./page/navbar/search/deck.filter.pipe");
var category_service_1 = require("./page/navbar/search/category.service");
var category_filter_pipe_1 = require("./page/navbar/search/category.filter.pipe");
var course_service_1 = require("./page/navbar/search/course.service");
var course_filter_pipe_1 = require("./page/navbar/search/course.filter.pipe");
var user_module_1 = require("./page/user/user.module");
var user_categories_service_1 = require("./page/user/categories/user.categories.service");
var user_courses_service_1 = require("./page/user/courses/user.courses.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
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
            category_filter_pipe_1.CategoryFilterPipe,
            course_filter_pipe_1.CourseFilterPipe,
            deck_filter_pipe_1.DeckFilterPipe,
        ],
        providers: [orlp_service_1.ORLPService, category_service_1.CategoryService, course_service_1.CourseService, deck_service_1.DeckService, core_2.CookieService, logout_service_1.LogoutService, navbar_service_1.NavbarService, cabinet_service_1.CabinetService, user_categories_service_1.UserCategoriesService, user_courses_service_1.UserCoursesService],
        bootstrap: [navbar_component_1.NavbarComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map