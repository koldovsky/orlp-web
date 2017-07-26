import {Component, Input, OnInit} from '@angular/core';

import {IDeck} from "../../../interfaces/deck";
import {DeckService} from "./deck.service";
import {ORLPService} from "../../../orlp.service";
import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";
import {DeckLinkByCategory} from "../../../classes/DeckDTO/linkByCategory.deck.DTO";
import {Link} from "../../../classes/link";
import {Router} from "@angular/router";
import {CardPublic} from "../../../classes/CardsDTO/public.card.DTO";
import {CookieService} from "angular2-cookie/core";
import {error} from "util";

@Component({
    selector: 'deck-table',
    template: require('./deck.component.html!text'),
    styleUrls: ['app/page/categoryInfo/categoryInfo.css']
})
export class DeckComponent implements OnInit {

    public decks: DeckLinkByCategory[];
    public errorMessage: string;
    public cookie: string;
    public decksIdInYourFolder: number[];
    @Input() url: string;

    constructor(private deckService: DeckService,
                private orlpService: ORLPService,
                private router: Router,
                private cookieService: CookieService) {
    }

    addDeckToFolder(deckId: number): void {
        this.deckService.addDeckToFolder(deckId).subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    }

    ngOnInit(): void {
        this.url = this.orlpService.decodeLink(this.url);

        this.deckService.getDecks(this.url)
            .subscribe(decks => this.decks = decks,
                error => this.errorMessage = <any>error);

        this.cookie = this.cookieService.get("Authentication");

        this.getIdDecksInYourFolder();
    }

    deckIsInYourFolder(id: number) {
        if (this.decksIdInYourFolder.includes(id)) {
            return true;
        }
        return false;
    }

    getIdDecksInYourFolder() {
        this.deckService.getIdDecksInYourFolder().subscribe(
            id => {
                this.decksIdInYourFolder = id;
                console.log(this.decksIdInYourFolder)
            },
            error => this.errorMessage = <any>error);
    }

    getCardsLink(link: Link): string {
        return this.orlpService.getShortLink(link);
    }

    startLearning(cards: Link): void {
        this.router.navigate(['/cards', this.getCardsLink(cards)]);
    }
}