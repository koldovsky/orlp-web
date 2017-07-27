import { OnInit } from "@angular/core";
import { AdminUsersService } from "./admin.users.service";
import { AdminUsers } from "../../../classes/admin.users.DTO";
import { ORLPService } from "../../../orlp.service";
import { Link } from "../../../classes/link";
export declare class AdminUsersComponent implements OnInit {
    private orlp;
    private adminUsersSevice;
    users: AdminUsers[];
    errorMessage: string;
    constructor(orlp: ORLPService, adminUsersSevice: AdminUsersService);
    ngOnInit(): void;
    getUserLink(link: Link): string;
}
