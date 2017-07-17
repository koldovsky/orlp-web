import {Component, OnInit} from "@angular/core";
import {AdminUsersService} from "./admin.users.service";
import {IUser} from "../../../interfaces/user";

@Component({
    providers: [AdminUsersService],
    template: require('app/page/admin/users/admin.users.component.html!text')
})

export class AdminUsersComponent implements OnInit {
    users: IUser[];
    errorMessage: string;
    listFilter: string;
    showTable: boolean = false;

    constructor(private adminUsersService: AdminUsersService) {
    }

    ngOnInit(): void {
        this.adminUsersService.getUsers()
            .subscribe(users => this.users = users,
                error => this.errorMessage = <any>error);
    }

}