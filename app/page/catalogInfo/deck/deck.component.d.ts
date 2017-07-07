import { OnInit } from '@angular/core';
import { IDeck } from "../../../interfaces/deck";
import { DeckService } from "./deck.service";
export declare class DeckComponent implements OnInit {
    private deckService;
    decks: IDeck[];
    errorMessage: string;
    id: number;
    constructor(deckService: DeckService);
    ngOnInit(): void;
    addDeck(value: IDeck): void;
}
