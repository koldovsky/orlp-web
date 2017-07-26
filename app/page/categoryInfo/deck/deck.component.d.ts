import { OnInit } from '@angular/core';
import { DeckService } from "./deck.service";
import { ORLPService } from "../../../orlp.service";
import { DeckLinkByCategory } from "../../../classes/DeckDTO/linkByCategory.deck.DTO";
import { Link } from "../../../classes/link";
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/core";
export declare class DeckComponent implements OnInit {
    private deckService;
    private orlpService;
    private router;
    private cookieService;
    decks: DeckLinkByCategory[];
    errorMessage: string;
    cookie: string;
    decksIdInYourFolder: number[];
    url: string;
    constructor(deckService: DeckService, orlpService: ORLPService, router: Router, cookieService: CookieService);
    addDeckToFolder(deckId: number): void;
    ngOnInit(): void;
    deckIsInYourFolder(id: number): boolean;
    getIdDecksInYourFolder(): void;
    getCardsLink(link: Link): string;
    startLearning(cards: Link): void;
}
