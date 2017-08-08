import {Component, Input, OnInit} from '@angular/core';
import {DeckPublic} from '../../dto/DeckDTO/public.deck.DTO';
import {DeckService} from './search/deck.service';
import {LogoutService} from '../logout/logout.service';
import {Router} from '@angular/router';
import {MainService} from './main.service';
import {UserDetailsDto} from '../../dto/UserDetailsDto';

@Component({
  selector: 'app-page',
  templateUrl: ('./main.component.html'),
  styleUrls: ['./main.css', './dropdown.css']
})

export class MainComponent implements OnInit {
    decks: DeckPublic[];
    listFilter: string;
    public errorMessage: string;
    isAuthorized: boolean;
    isAuthorizedAdmin: boolean;
    userDetails: UserDetailsDto;

    constructor(private deckService: DeckService,
                private logoutService: LogoutService,
                private router: Router,
                private navbarService: MainService) {
    }

    ngOnInit(): void {
        this.isAuthorized = this.logoutService.isAuthorized();
        if (this.isAuthorized) {
            this.navbarService.getUserDetails()
                .subscribe(user => {
                    this.userDetails = user;
                    this.isAuthorizedAdmin = user.authorities.includes('ROLE_ADMIN');
                });
        }
        this.deckService.getDecks().subscribe(decks => this.decks = decks,
            error => this.errorMessage = <any>error);
    }

    logoutUser() {
        if (this.logoutService.logout()) {
            this.isAuthorized = false;
            this.isAuthorizedAdmin = false;
            this.router.navigate(['main']);
        }
    }
}
