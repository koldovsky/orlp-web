import {Component, Input, OnInit} from '@angular/core';
import {AdminCategoryService} from "./admin.category.service";
import {ICategory} from "../../../interfaces/category";
import {CategoriesPublic} from "../../../classes/CategoryDTO/public.categories";
import {ORLPService} from "../../../orlp.service";

@Component({
    selector: "admin-all-category",
    providers: [AdminCategoryService],
    template: require('app/page/admin/categories/admin.category.component.html!text'),
    styleUrls: ['app/page/admin/admin.style.css']
})

export class AdminCategoryComponent implements OnInit {
    categories: CategoriesPublic[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean = false;

    constructor(private adminCategoryService: AdminCategoryService, private orlpService: ORLPService) {
    }

    ngOnInit(): void {
        this.adminCategoryService.getCatalogs()
            .subscribe(categories => this.categories = categories,
                error => this.errorMessage = <any>error);
    }

    toggleTable(): void {
        this.showTable = !this.showTable;
    }

    addCategory(value: CategoriesPublic) {
        this.adminCategoryService.addCategory(value, 'api/admin/add/category').subscribe(
            data => this.categories.push(data),
            error => console.log(error)
        );
    }
}