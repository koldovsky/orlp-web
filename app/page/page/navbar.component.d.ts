import { OnInit } from '@angular/core';
import { DeckPublic } from "../../dto/DeckDTO/public.deck.DTO";
import { DeckService } from "./search/deck.service";
import { LogoutService } from "../logout/logout.service";
import { Router } from "@angular/router";
import { NavbarService } from "./page.service";
import { UserDetailsDto } from "../../dto/UserDetailsDto";
export declare class NavbarComponent implements OnInit {
    private deckService;
    private logoutService;
    private router;
    private navbarService;
    decks: DeckPublic[];
    listFilter: string;
    errorMessage: string;
    isAuthorized: boolean;
    isAuthorizedAdmin: boolean;
    userDetails: UserDetailsDto;
    constructor(deckService: DeckService, logoutService: LogoutService, router: Router, navbarService: NavbarService);
    ngOnInit(): void;
    logoutUser(): void;
}
