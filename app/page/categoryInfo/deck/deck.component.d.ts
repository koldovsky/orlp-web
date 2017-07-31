<<<<<<< HEAD
import { OnInit } from "@angular/core";
import { DeckService } from "./deck.service";
import { ORLPService } from "../../../orlp.service";
import { DeckLinkByCategory } from "../../../classes/DeckDTO/linkByCategory.deck.DTO";
import { Link } from "../../../classes/link";
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/core";
import { DeckLinkByFolderWithStatus } from "../../../classes/DeckDTO/linkByFolderWithStatus.deck.DTO";
export declare class DeckComponent implements OnInit {
    private deckService;
    private orlpService;
    private router;
    private cookieService;
    decks: DeckLinkByCategory[];
    decksWithStatus: DeckLinkByFolderWithStatus[];
    errorMessage: string;
    cookie: string;
    decksIdInYourFolder: number[];
    url: string;
    constructor(deckService: DeckService, orlpService: ORLPService, router: Router, cookieService: CookieService);
    addDeckToFolder(deckId: number): void;
    ngOnInit(): void;
    getIdDecksInYourFolder(): void;
    getCardsLink(link: Link): string;
    startLearning(cards: Link): void;
    private createDecksWithStatus();
    private setStatusForDecksThatInFolder();
    private changeDeckStatus(deckId);
=======
import { OnInit } from '@angular/core';
import { DeckService } from "./deck.service";
import { ORLPService } from "../../../orlp.service";
import { DeckPublic } from "../../../classes/DeckDTO/public.deck.DTO";
export declare class DeckComponent implements OnInit {
    private deckService;
    private orlpService;
    decks: DeckPublic[];
    errorMessage: string;
    url: string;
    constructor(deckService: DeckService, orlpService: ORLPService);
    ngOnInit(): void;
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
}
