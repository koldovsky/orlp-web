import { OnInit } from "@angular/core";
import { AdminUserService } from "./admin.user.service";
import { IUser } from "../../../../interfaces/user";
export declare class AdminUserComponent implements OnInit {
    private adminUserService;
    users: IUser[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean;
    constructor(adminUserService: AdminUserService);
    ngOnInit(): void;
}
