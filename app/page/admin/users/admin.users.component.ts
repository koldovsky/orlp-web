import {Component, Input, OnInit} from "@angular/core";
import {AdminUsersService} from "./admin.users.service";
import {IUser} from "../../../interfaces/user";
import {UsersPublic} from "../../../classes/public.users.DTO";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {ORLPService} from "../../../orlp.service";
import {Link} from "../../../classes/link";
import {AdminUserService} from "./user/admin.user.service";

@Component({
    selector: "admin-all-users",
    providers: [AdminUsersService],
    template: require('app/page/admin/users/admin.users.component.html!text'),
    styleUrls: ['app/page/admin/styles-for-admin-page.css']
})

export class AdminUsersComponent implements OnInit {
    users: UsersPublic[];
    errorMessage: string;

    constructor(private orlp: ORLPService,
                private adminUsersSevice: AdminUsersService) {}

    ngOnInit(): void {
        this.adminUsersSevice.getUsers()
            .subscribe(users => this.users = users,
                error => this.errorMessage = <any>error);
    }

    public getUserLink(link: Link): string {
        console.log('LINK : ' + link.href);
        console.log('Code : ' + this.orlp.getShortLink(link));
        return this.orlp.getShortLink(link);
    }
}