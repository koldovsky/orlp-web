import {Component, OnInit} from '@angular/core';
import {AdminCategoryService} from "./admin.category.service";
import {ICategory} from "../../../interfaces/category";

@Component({
    providers: [AdminCategoryService],
    template: require('app/page/admin/categories/admin.category.component.html!text')
})

export class AdminCategoryComponent implements OnInit {
    categories: ICategory[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean = false;

    constructor(private adminCategoryService: AdminCategoryService) {
    }

    ngOnInit(): void {
        this.adminCategoryService.getCatalogs()
            .subscribe(categories => this.categories = categories,
                error => this.errorMessage = <any>error);
    }

    toggleTable(): void {
        this.showTable = !this.showTable;
    }
}