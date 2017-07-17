import { OnInit } from "@angular/core";
import { AdminUsersService } from "./admin.users.service";
import { IUser } from "../../../interfaces/user";
export declare class AdminUsersComponent implements OnInit {
    private adminUsersService;
    users: IUser[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean;
    constructor(adminUsersService: AdminUsersService);
    ngOnInit(): void;
}
