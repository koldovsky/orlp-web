import {Component, Input, OnInit} from '@angular/core';

import {IDeck} from "../../../interfaces/deck";
import {DeckService} from "./deck.service";

@Component({
    selector: 'table2',
    template: require('./deck.component.html!text')
})
export class DeckComponent implements OnInit {

    decks: IDeck[];
    errorMessage: string;
    @Input() id: number;

    constructor(private deckService: DeckService) {
    }

    ngOnInit(): void {
        this.deckService.getDeck(this.id)
            .subscribe(decks => this.decks = decks,
                        error => this.errorMessage = <any>error);
    }

    addDeck(value: IDeck) {
        this.deckService.addDeck(value, this.id).subscribe(
            data => this.decks.push(data),
            error => console.log(error)
        );
    }
}