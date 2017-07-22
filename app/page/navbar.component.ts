import {Component, OnInit} from "@angular/core";
import {LogoutService} from "./logout/logout.service";
import {Route, Router} from "@angular/router";

@Component({
    selector: 'page',
    template: require('./navbar.component.html!text'),
    styleUrls: ['app/page/navbar.css']
})

export class PageComponent implements OnInit {
    pageTitle: string = 'Spaced Repetition';
    isAuthorized: boolean;

    constructor(private logoutService: LogoutService, private router: Router) {
    }

    ngOnInit() {
        this.isAuthorized = this.ifUserIsAuthorized();
    }

    ifUserIsAuthorized(): boolean {
        return this.logoutService.isAuthorized();
    }

    logoutUser() {
       if(this.logoutService.logout()){
           this.isAuthorized = false;
          // this.router.navigate(['main']);
       };

    }
}