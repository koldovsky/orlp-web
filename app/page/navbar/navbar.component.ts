import {Component, Input, OnInit} from '@angular/core';
import {ORLPService} from "../../orlp.service";
import {DeckPublic} from "../../classes/DeckDTO/public.deck.DTO";
import {DeckService} from "./deck.service";
import {LogoutService} from "../logout/logout.service";
import {Router} from "@angular/router";

@Component({
    selector: 'page',
    template: require('./navbar.component.html!text'),
    styleUrls: ['app/page/navbar/navbar.css', 'app/page/navbar/dropdown.css']
})

export class NavbarComponent implements OnInit {
    decks: DeckPublic[];
    listFilter: string;
    @Input() url: string;
    public errorMessage: string;
    isAuthorized: boolean;
<<<<<<< Updated upstream
=======
    isAuthorizedAdmin: boolean;
    userDetails: UserDetailsDto;
>>>>>>> Stashed changes

    constructor(private deckService: DeckService,
                private orlpService: ORLPService, private logoutService: LogoutService, private router: Router) {
    }

    ngOnInit(): void {
<<<<<<< Updated upstream
        this.isAuthorized = this.ifUserIsAuthorized();
        console.log(this.isAuthorized);
        this.deckService.getDecks(this.url)
            .subscribe(decks => this.decks = decks,
                error => this.errorMessage = <any>error);
    }

    ifUserIsAuthorized(): boolean {
        return this.logoutService.isAuthorized();
=======
        this.isAuthorized = this.logoutService.isAuthorized();
        if (this.isAuthorized) {
            this.navbarService.getUserDetails()
                .subscribe(user => {
                    this.userDetails = user;
                    this.isAuthorizedAdmin = user.authorities.includes("ROLE_ADMIN");
                });
        }
        this.deckService.getDecks(this.url).subscribe(decks => this.decks = decks,
                error => this.errorMessage = <any>error);
>>>>>>> Stashed changes
    }

    logoutUser() {
        if (this.logoutService.logout()) {
            this.isAuthorized = false;
            this.isAuthorizedAdmin = false;
            this.router.navigate(['main']);
        }
    }

}