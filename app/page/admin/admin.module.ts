import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminCategoryPipe} from "./admin.category.filter.pipe";
import {AdminService} from "./admin.service";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'admin', component: AdminComponent},
        ])],
    exports: [],
    declarations: [
        AdminCategoryPipe,
        AdminComponent
    ],
    providers: [
        AdminService
    ],
})

export class AdminModule {
}
