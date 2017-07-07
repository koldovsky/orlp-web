import { OnInit } from '@angular/core';
import { AdminService } from "./admin.service";
import { ICategoryForAdmin } from "../../interfaces/category-for-admin";
export declare class AdminComponent implements OnInit {
    private adminService;
    catalogs: ICategoryForAdmin[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean;
    constructor(adminService: AdminService);
    ngOnInit(): void;
    toggleTable(): void;
}
