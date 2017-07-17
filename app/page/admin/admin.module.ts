import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {AdminCategoryComponent} from "./categories/admin.category.component";
import {AdminCategoryPipe} from "./categories/admin.category.filter.pipe";
import {AdminCategoryService} from "./categories/admin.category.service";
import {AdminUsersComponent} from "./users/admin.users.component";
import {AdminUsersService} from "./users/admin.users.service";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'admin', component: AdminCategoryComponent},
            {path: 'admin/users', component: AdminUsersComponent},
        ])],
    exports: [],
    declarations: [
        AdminCategoryPipe,
        AdminCategoryComponent,
        AdminUsersComponent
    ],
    providers: [
        AdminCategoryService,
        AdminUsersService
    ],
})

export class AdminModule {
}
