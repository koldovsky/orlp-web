import {Component, Input, OnInit} from '@angular/core';

import {DeckService} from "./deck.service";
import {ORLPService} from "../../../orlp.service";
import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";

@Component({
    selector: 'deck-table',
    template: require('./deck.component.html!text'),
    styleUrls: ['app/page/categoryInfo/categoryInfo.css']
})
export class DeckComponent implements OnInit {

    public decks: DeckPublic[];
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

    addDeck(value: DeckPublic) {
        this.deckService.addDeck(value, this.url).subscribe(
            data => this.decks.push(data),
            error => console.log(error)
        );
    }
}