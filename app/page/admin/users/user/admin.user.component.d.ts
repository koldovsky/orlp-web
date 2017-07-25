import { OnInit } from "@angular/core";
import { AdminUserService } from "./admin.user.service";
import { UsersPublic } from "../../../../classes/public.users.DTO";
import { ORLPService } from "../../../../orlp.service";
import { Link } from "../../../../classes/link";
import { ActivatedRoute } from "@angular/router";
export declare class AdminUserComponent implements OnInit {
    private route;
    private orlp;
    private adminUserSevice;
    user: UsersPublic;
    errorMessage: string;
    private sub;
    private url;
    constructor(route: ActivatedRoute, orlp: ORLPService, adminUserSevice: AdminUserService);
    ngOnInit(): void;
    private takeUser();
    private decodeLink();
    getUserLink(link: Link): string;
    updateAccountState(currentUser: UsersPublic): void;
    deleteAccountState(currentUser: UsersPublic): void;
}
