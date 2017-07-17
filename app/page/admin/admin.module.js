"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var admin_category_component_1 = require("./categories/admin.category.component");
var admin_category_filter_pipe_1 = require("./categories/admin.category.filter.pipe");
var admin_category_service_1 = require("./categories/admin.category.service");
var admin_users_component_1 = require("./users/admin.users.component");
var admin_users_service_1 = require("./users/admin.users.service");
var admin_user_component_1 = require("./users/user/admin.user.component");
var admin_user_service_1 = require("./users/user/admin.user.service");
var admin_main_component_1 = require("./admin.main.component");
var admin_main_service_1 = require("./admin.main.service");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                // {path: 'admin', component: AdminCategoryComponent},
                { path: 'admin', component: admin_main_component_1.AdminMainComponent },
                { path: 'admin/categories', component: admin_category_component_1.AdminCategoryComponent },
                { path: 'admin/users', component: admin_users_component_1.AdminUsersComponent },
                { path: 'admin/user', component: admin_user_component_1.AdminUserComponent }
            ])
        ],
        exports: [],
        declarations: [
            admin_category_filter_pipe_1.AdminCategoryPipe,
            admin_category_component_1.AdminCategoryComponent,
            admin_users_component_1.AdminUsersComponent,
            admin_main_component_1.AdminMainComponent,
            admin_user_component_1.AdminUserComponent
        ],
        providers: [
            admin_category_service_1.AdminCategoryService,
            admin_users_service_1.AdminUsersService,
            admin_user_service_1.AdminUserService,
            admin_main_service_1.AdminMainService
        ],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map