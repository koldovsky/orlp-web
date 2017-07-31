<<<<<<< HEAD
import { OnInit } from "@angular/core";
import { AdminUserService } from "./admin.user.service";
import { AdminUsers } from "../../../../classes/admin.users.DTO";
import { ORLPService } from "../../../../orlp.service";
=======
import { EventEmitter, OnInit } from "@angular/core";
import { AdminUserService } from "./admin.user.service";
import { AdminUsers } from "../../../../classes/admin.users.DTO";
import { ORLPService } from "../../../../orlp.service";
import { Link } from "../../../../classes/link";
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
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
<<<<<<< HEAD
=======
    ok: EventEmitter<any>;
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
    constructor(route: ActivatedRoute, orlp: ORLPService, adminUserSevice: AdminUserService);
    ngOnInit(): void;
    private takeUser();
    private decodeLink();
<<<<<<< HEAD
    updateAccountState(currentUser: AdminUsers): void;
    deleteAccountState(): void;
=======
    getUserLink(link: Link): string;
    updateAccountState(currentUser: AdminUsers): void;
    deleteAccountState(currentUser: AdminUsers): void;
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
    toggleDelete(): void;
    toggleUp(): void;
    onOK(currentUser: AdminUsers): void;
}
