import {Component, OnInit} from '@angular/core';
import {AdminService} from "./admin.service";
import {ICategory} from "../../interfaces/category";

@Component({
    providers: [AdminService],
    template: require('app/page/admin/admin.component.html!text')
})

export class AdminComponent implements OnInit {
    categories: ICategory[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean = false;

    constructor(private adminService: AdminService) {
    }

    ngOnInit(): void {
        this.adminService.getCatalogs()
            .subscribe(categories => this.categories = categories,
                error => this.errorMessage = <any>error);
    }

    toggleTable(): void {
        this.showTable = !this.showTable;
    }
}