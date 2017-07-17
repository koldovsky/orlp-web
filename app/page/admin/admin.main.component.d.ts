import { OnInit } from '@angular/core';
import { AdminMainService } from "./admin.main.service";
export declare class AdminMainComponent implements OnInit {
    private adminMainService;
    errorMessage: string;
    listFilter: string;
    showOneTable: boolean;
    constructor(adminMainService: AdminMainService);
    ngOnInit(): void;
    toggleOneTable(): void;
}
