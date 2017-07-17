import {Component, OnInit} from '@angular/core';
import {AdminMainService} from "./admin.main.service";

@Component({
    providers: [AdminMainService],
    template: require('app/page/admin/admin.main.component.html!text'),
    styleUrls: ["bootstrap/styles-for-card-page.css"]
})

export class AdminMainComponent implements OnInit {
    errorMessage: string;
    listFilter: string;
    showOneTable: boolean = false;

    constructor(private adminMainService: AdminMainService) {
    }

    ngOnInit(): void {
        // this.adminCategoryService.getCatalogs()
        //     .subscribe(categories => this.categories = categories,
        //         error => this.errorMessage = <any>error);
    }

    toggleOneTable(): void {
        this.showOneTable = !this.showOneTable;
    }
}