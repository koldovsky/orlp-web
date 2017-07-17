import {Component, OnInit} from "@angular/core";
import {AdminUserService} from "./admin.user.service";
import {IUser} from "../../../../interfaces/user";

@Component({
    providers: [AdminUserService],
    template: require('app/page/admin/users/user/admin.user.component.html!text')
})

export class AdminUserComponent implements OnInit {
    users: IUser[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean = false;

    constructor(private adminUserService: AdminUserService) {
    }

    ngOnInit(): void {
        // this.adminUserService.getUsers()
        //     .subscribe(users => this.users = users,
        //         error => this.errorMessage = <any>error);
    }

}