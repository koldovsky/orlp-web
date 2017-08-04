import { OnInit } from '@angular/core';
import { AdminCategoryService } from "./admin.category.service";
import { CategoriesPublic } from "../../../dto/CategoryDTO/public.categories";
import { ORLPService } from "../../../services/orlp.service";
export declare class AdminCategoryComponent implements OnInit {
    private adminCategoryService;
    private orlpService;
    categories: CategoriesPublic[];
    errorMessage: string;
    listFilter: string;
    constructor(adminCategoryService: AdminCategoryService, orlpService: ORLPService);
    ngOnInit(): void;
}
