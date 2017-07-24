import {Component, Input, OnInit} from '@angular/core';

import {IDeck} from "../../../interfaces/deck";
import {DeckService} from "./deck.service";
import {ORLPService} from "../../../orlp.service";
import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";
import {DeckLinkByCategory} from "../../../classes/DeckDTO/linkByCategory.deck.DTO";
import {Link} from "../../../classes/link";

@Component({
    selector: 'deck-table',
    template: require('./deck.component.html!text')
})
export class DeckComponent implements OnInit {

    public decks: DeckLinkByCategory[];
    public errorMessage: string;
    @Input() url: string;

    constructor(private deckService: DeckService,
                private orlpService: ORLPService) {
    }

    ngOnInit(): void {
        this.url = this.orlpService.decodeLink(this.url);

        this.deckService.getDecks(this.url)
            .subscribe(decks => this.decks = decks,
                error => this.errorMessage = <any>error);
    }

    addDeck(value: DeckLinkByCategory) {
        this.deckService.addDeck(value, this.url).subscribe(
            data => this.decks.push(data),
            error => console.log(error)
        );
    }

    getCardsLink(link: Link): string {
        return this.orlpService.getShortLink(link);
    }
}