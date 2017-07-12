import { OnInit } from '@angular/core';
import { AdminService } from "./admin.service";
import { ICategory } from "../../interfaces/category";
export declare class AdminComponent implements OnInit {
    private adminService;
    categories: ICategory[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean;
    constructor(adminService: AdminService);
    ngOnInit(): void;
    toggleTable(): void;
}
