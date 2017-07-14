import { OnInit } from '@angular/core';
import { AdminCategoryService } from "./admin.category.service";
import { ICategory } from "../../../interfaces/category";
export declare class AdminCategoryComponent implements OnInit {
    private adminCategoryService;
    categories: ICategory[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean;
    constructor(adminCategoryService: AdminCategoryService);
    ngOnInit(): void;
    toggleTable(): void;
}
