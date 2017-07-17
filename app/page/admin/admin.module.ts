import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {AdminCategoryComponent} from "./categories/admin.category.component";
import {AdminCategoryPipe} from "./categories/admin.category.filter.pipe";
import {AdminCategoryService} from "./categories/admin.category.service";
import {AdminUsersComponent} from "./users/admin.users.component";
import {AdminUsersService} from "./users/admin.users.service";
import {AdminUserComponent} from "./users/user/admin.user.component";
import {AdminUserService} from "./users/user/admin.user.service";

import {AdminMainComponent} from "./admin.main.component";
import {AdminMainService} from "./admin.main.service";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            // {path: 'admin', component: AdminCategoryComponent},
            {path: 'admin', component: AdminMainComponent},
            {path: 'admin/categories', component: AdminCategoryComponent},
            {path: 'admin/users', component: AdminUsersComponent},
            {path: 'admin/user', component: AdminUserComponent}
        ])],
    exports: [],
    declarations: [
        AdminCategoryPipe,
        AdminCategoryComponent,
        AdminUsersComponent,
        AdminMainComponent,
        AdminUserComponent
    ],
    providers: [
        AdminCategoryService,
        AdminUsersService,
        AdminUserService,
        AdminMainService
    ],
})

export class AdminModule {
}
