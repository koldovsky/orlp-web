import { OnInit } from '@angular/core';
import { ORLPService } from "../../orlp.service";
import { DeckPublic } from "../../classes/public.deck.DTO";
import { DeckService } from "./deck.service";
export declare class NavbarComponent implements OnInit {
    private deckService;
    private orlpService;
    decks: DeckPublic[];
    listFilter: string;
    url: string;
    errorMessage: string;
    constructor(deckService: DeckService, orlpService: ORLPService);
    ngOnInit(): void;
}
