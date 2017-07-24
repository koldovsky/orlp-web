import { OnInit } from '@angular/core';
import { ORLPService } from "../../orlp.service";
import { DeckPublic } from "../../classes/DeckDTO/public.deck.DTO";
import { DeckService } from "./deck.service";
import { LogoutService } from "../logout/logout.service";
import { Router } from "@angular/router";
export declare class NavbarComponent implements OnInit {
    private deckService;
    private orlpService;
    private logoutService;
    private router;
    decks: DeckPublic[];
    listFilter: string;
    url: string;
    errorMessage: string;
    isAuthorized: boolean;
    constructor(deckService: DeckService, orlpService: ORLPService, logoutService: LogoutService, router: Router);
    ngOnInit(): void;
    ifUserIsAuthorized(): boolean;
    logoutUser(): void;
}
