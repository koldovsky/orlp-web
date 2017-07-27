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
import {DeckLinkByFolderWithStatus} from "../../../classes/DeckDTO/linkByFolderWithStatus.deck.DTO";
import {tokenName} from "@angular/compiler";

@Component({
    selector: 'deck-table',
    template: require('./deck.component.html!text'),
    styleUrls: ['app/page/categoryInfo/categoryInfo.css']
})
export class DeckComponent implements OnInit {

    public decks: DeckLinkByCategory[];
    public decksWithStatus: DeckLinkByFolderWithStatus[] = [];
    public errorMessage: string;
    public cookie: string;
    public decksIdInYourFolder: number[] = [];
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

        this.changeDeckStatus(deckId);
    }

    ngOnInit(): void {
        this.url = this.orlpService.decodeLink(this.url);

        this.deckService.getDecks(this.url)
            .subscribe(decks => {
                    this.decks = decks;
                    this.getIdDecksInYourFolder();
                    this.createDecksWithStatus();
                },
                error => this.errorMessage = <any>error
            );

        this.cookie = this.cookieService.get("Authentication");
    }

    getIdDecksInYourFolder() {
        this.deckService.getIdDecksInYourFolder().subscribe(
            id => {
                this.decksIdInYourFolder = id;
                this.setStatusForDecksThatInFolder();
            },
            error => this.errorMessage = <any>error);
    }

    getCardsLink(link: Link): string {
        return this.orlpService.getShortLink(link);
    }

    startLearning(cards: Link): void {
        this.router.navigate(['/cards', this.getCardsLink(cards)]);
    }

    private createDecksWithStatus() {
        for (let entry of this.decks) {
            this.decksWithStatus.push(new DeckLinkByFolderWithStatus(entry.name, entry.description, entry.self, entry.cards, entry.deckId, false))
        }
    }

    private setStatusForDecksThatInFolder() {
        for (let entry of this.decksWithStatus) {
            for (let id of this.decksIdInYourFolder) {
                if (entry.deckId === id) {
                    entry.status = true;
                    break;
                }
            }
        }
    }

    private changeDeckStatus(deckId: number) {
        for (let entry of this.decksWithStatus) {
            if (entry.deckId === deckId) {
                entry.status = true;
            }
        }
    }
}