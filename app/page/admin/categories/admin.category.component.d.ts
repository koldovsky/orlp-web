import { OnInit } from '@angular/core';
import { AdminCategoryService } from "./admin.category.service";
import { CategoriesPublic } from "../../../classes/public.categories";
import { ORLPService } from "../../../orlp.service";
export declare class AdminCategoryComponent implements OnInit {
    private adminCategoryService;
    private orlpService;
    categories: CategoriesPublic[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean;
    constructor(adminCategoryService: AdminCategoryService, orlpService: ORLPService);
    ngOnInit(): void;
    toggleTable(): void;
}
