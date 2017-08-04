import {Component, Input, OnInit} from "@angular/core";
import {DeckService} from "./deck.service";
import {ORLPService} from "../../../services/orlp.service";
import {DeckLinkByCategory} from "../../../dto/DeckDTO/linkByCategory.deck.DTO";
import {Link} from "../../../dto/link";
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/core";
import {DeckLinkByFolderWithStatus} from "../../../dto/DeckDTO/linkByFolderWithStatus.deck.DTO";

@Component({
    selector: 'deck-table',
    template: require('./deck.component.html!text'),
    styleUrls: ['app/page/categoryInfo/categoryInfo.css']
})
export class DeckComponent implements OnInit {

    public decks: DeckLinkByCategory[];
    public decksWithStatus: DeckLinkByFolderWithStatus[] = [];
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
            data => {
                this.changeDeckStatus(deckId);
            },
            error => console.log(error)
        );
    }

    ngOnInit(): void {
        this.url = this.orlpService.decodeLink(this.url);

        this.deckService.getDecks(this.url)
            .subscribe(decks => {
                    this.decks = decks;
                    this.createDecksWithStatus();
                },
            );

        this.cookie = this.cookieService.get("Authentication");

        if (this.cookie !== undefined)
            this.getIdDecksInYourFolder();
    }

    getIdDecksInYourFolder() {
        this.deckService.getIdDecksInYourFolder().subscribe(
            id => {
                this.decksIdInYourFolder = id;
                this.setStatusForDecksThatInFolder();
            })
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