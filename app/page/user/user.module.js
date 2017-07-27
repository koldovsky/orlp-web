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
var router_1 = require("@angular/router");
var user_categories_component_1 = require("./categories/user.categories.component");
var user_categories_service_1 = require("./categories/user.categories.service");
var user_courses_component_1 = require("./courses/user.courses.component");
var user_courses_service_1 = require("./courses/user.courses.service");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                { path: 'user/categories', component: user_categories_component_1.UserCategoriesComponent },
                { path: 'user/courses', component: user_courses_component_1.UserCoursesComponent }
            ])
        ],
        declarations: [
            user_courses_component_1.UserCoursesComponent,
            user_categories_component_1.UserCategoriesComponent
        ],
        providers: [
            user_categories_service_1.UserCategoriesService,
            user_courses_service_1.UserCoursesService
        ]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map