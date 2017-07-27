import {Component, Input, OnInit} from '@angular/core';
import {DeckPublic} from "../../classes/DeckDTO/public.deck.DTO";
import {DeckService} from "./search/deck.service";
import {LogoutService} from "../logout/logout.service";
import {Router} from "@angular/router";
import {NavbarService} from "./navbar.service";
import {UserDetailsDto} from "../../classes/UserDetailsDto";

@Component({
    selector: 'page',
    template: require('./navbar.component.html!text'),
    styleUrls: ['app/page/navbar/navbar.css', 'app/page/navbar/dropdown.css']
})

export class NavbarComponent implements OnInit {
    decks: DeckPublic[];
    listFilter: string;
    public errorMessage: string;
    isAuthorized: boolean;
    isAuthorizedAdmin: boolean;
    userDetails: UserDetailsDto;

    constructor(private deckService: DeckService,
                private logoutService: LogoutService,
                private router: Router,
                private navbarService: NavbarService) {
    }

    ngOnInit(): void {
        this.isAuthorized = this.logoutService.isAuthorized();
        if (this.isAuthorized) {
            this.navbarService.getUserDetails()
                .subscribe(user => {
                    this.userDetails = user;
                    this.isAuthorizedAdmin = user.authorities.includes("ROLE_ADMIN");
                    console.log(this.userDetails);
                });
        }
        // this.deckService.getDecks().subscribe(decks => this.decks = decks,
        //         error => this.errorMessage = <any>error);
    }

    logoutUser() {
        if (this.logoutService.logout()) {
            this.isAuthorized = false;
            this.isAuthorizedAdmin = false;
            this.router.navigate(['main']);
        }
    }
}
