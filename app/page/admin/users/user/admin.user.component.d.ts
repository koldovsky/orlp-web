import { OnInit } from "@angular/core";
import { AdminUserService } from "./admin.user.service";
import { AdminUsers } from "../../../../classes/admin.users.DTO";
import { ORLPService } from "../../../../orlp.service";
import { ActivatedRoute } from "@angular/router";
export declare class AdminUserComponent implements OnInit {
    private route;
    private orlp;
    private adminUserSevice;
    private user;
    private errorMessage;
    private sub;
    private url;
    private clickedButton;
    constructor(route: ActivatedRoute, orlp: ORLPService, adminUserSevice: AdminUserService);
    ngOnInit(): void;
    private takeUser();
    private decodeLink();
    updateAccountState(currentUser: AdminUsers): void;
    deleteAccountState(): void;
    toggleDelete(): void;
    toggleUp(): void;
    onOK(currentUser: AdminUsers): void;
}
