import { OnInit } from "@angular/core";
import { CabinetService } from "./cabinet.service";
import { DeckPublic } from "../../classes/DeckDTO/public.deck.DTO";
export declare class CabinetComponent implements OnInit {
    private cabinetService;
    decks: DeckPublic[];
    errorMessage: string;
    constructor(cabinetService: CabinetService);
    ngOnInit(): void;
    getUserDecks(): void;
}
