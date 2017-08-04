import { OnInit } from "@angular/core";
import { AdminUsersService } from "./admin.users.service";
import { AdminUsers } from "../../../dto/admin.users.DTO";
import { ORLPService } from "../../../services/orlp.service";
import { Link } from "../../../dto/link";
export declare class AdminUsersComponent implements OnInit {
    private orlp;
    private adminUsersSevice;
    users: AdminUsers[];
    errorMessage: string;
    constructor(orlp: ORLPService, adminUsersSevice: AdminUsersService);
    ngOnInit(): void;
    getUserLink(link: Link): string;
}
