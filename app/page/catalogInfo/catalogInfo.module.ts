import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CatalogInfoComponent} from "./catalogInfo.component";
import {Table1Component} from "./table1/table1.component";
import {Table2Component} from "./table2/table2.component";
import {Table1Service} from "./table1/table1.service";
import {Table2Service} from "./table2/table2.service";
import {ORLPService} from "../../orlp.service";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'catalog/:id', component: CatalogInfoComponent}
        ])],
    exports: [],
    declarations: [
        CatalogInfoComponent,
        Table1Component,
        Table2Component ],
    providers: [
        Table1Service,
        Table2Service
    ],
})
export class CatalogInfoModule { }
