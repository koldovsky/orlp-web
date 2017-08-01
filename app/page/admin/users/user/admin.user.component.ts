import {Component, OnInit, Output} from "@angular/core";
import {AdminUserService} from "./admin.user.service";
import {AdminUsers} from "../../../../classes/admin.users.DTO";
import {ORLPService} from "../../../../orlp.service";
import {Link} from "../../../../classes/link";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'one-user',
    providers: [AdminUserService],
    template: require('app/page/admin/users/user/admin.user.component.html!text'),
    styleUrls: ['app/page/admin/admin.style.css']
})

export class AdminUserComponent implements OnInit {
    private user: AdminUsers;
    private errorMessage: string;
    private sub: Subscription;
    private url: string;
    private clickedButton: boolean;

    constructor(private route: ActivatedRoute,
                private orlp: ORLPService,
                private adminUserSevice: AdminUserService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let url = params['url'];
                this.url = url;
            }
        );
        this.takeUser();
    }

    private takeUser() {
        this.decodeLink();
        this.adminUserSevice.getUser(this.url).subscribe(
            user => this.user = user,
            error => this.errorMessage = <any>error
        );
    }

    private decodeLink() {
        this.url = this.orlp.decodeLink(this.url);
    }

    updateAccountState(currentUser: AdminUsers) {
        this.adminUserSevice.updateAccountState(currentUser, this.url).subscribe(
            user => this.user = user,
            error => console.log(error)
        );
    }

    deleteAccountState() {
        this.adminUserSevice.deleteAccountState(this.url).subscribe(
            user => this.user = user,
            error => console.log(error)
        );
    }

    toggleDelete() {
        this.clickedButton = true;
    }

    toggleUp() {
        this.clickedButton = false;
    }

    onOK(currentUser: AdminUsers) {
        switch (currentUser.accountStatus) {
            case "ACTIVE": {
                if (this.clickedButton) {
                    this.deleteAccountState();
                } else {
                    this.updateAccountState(currentUser);
                }
                break;
            }

            case "DELETED": {
                this.deleteAccountState();
                break;
            }

            case "BLOCKED": {
                this.updateAccountState(currentUser);
                break;
            }
        }
    }
}