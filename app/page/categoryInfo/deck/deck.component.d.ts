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
}
