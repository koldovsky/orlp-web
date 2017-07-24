import { OnInit } from '@angular/core';
import { DeckService } from "./deck.service";
import { ORLPService } from "../../../orlp.service";
import { DeckLinkByCategory } from "../../../classes/DeckDTO/linkByCategory.deck.DTO";
import { Link } from "../../../classes/link";
export declare class DeckComponent implements OnInit {
    private deckService;
    private orlpService;
    decks: DeckLinkByCategory[];
    errorMessage: string;
    url: string;
    constructor(deckService: DeckService, orlpService: ORLPService);
    ngOnInit(): void;
    getCardsLink(link: Link): string;
}
