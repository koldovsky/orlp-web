import {Component,  OnInit} from "@angular/core";
import {AdminUserService} from "./admin.user.service";
import {UsersPublic} from "../../../../classes/public.users.DTO";
import {ORLPService} from "../../../../orlp.service";
import {Link} from "../../../../classes/link";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'one-user',
    providers: [AdminUserService],
    template: require('app/page/admin/users/user/admin.user.component.html!text'),
    styleUrls: ['app/page/admin/styles-for-admin-page.css']
})

export class AdminUserComponent implements OnInit {
    user: UsersPublic;
    errorMessage: string;
    private sub: Subscription;
    private url: string;

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

    public getUserLink(link: Link): string {
        return this.orlp.getShortLink(link);
    }

    updateAccountState(currentUser: UsersPublic) {
        this.adminUserSevice.updateAccountState(currentUser, this.url).subscribe(
            user => this.user = user,
            error => console.log(error)
        );
        console.log(currentUser);
    }

    deleteAccountState(currentUser: UsersPublic) {
        this.adminUserSevice.deleteAccountState(currentUser, this.url).subscribe(
            user => this.user = user,
            error => console.log(error)
        );
        console.log(currentUser);
    }
}