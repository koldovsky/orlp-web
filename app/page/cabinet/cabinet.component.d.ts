import { OnInit } from "@angular/core";
import { CabinetService } from "./cabinet.service";
import { UsersDTO } from "../../classes/UserDTO/UserDTO";
import { Link } from "../../classes/link";
import { ORLPService } from "../../orlp.service";
import { Router } from "@angular/router";
import { DeckLinkByFolder } from "../../classes/DeckDTO/linkByFolder.deck.DTO";
export declare class CabinetComponent implements OnInit {
    private cabinetService;
    private orlpService;
    private router;
    decks: DeckLinkByFolder[];
    user: UsersDTO;
    errorMessage: string;
    constructor(cabinetService: CabinetService, orlpService: ORLPService, router: Router);
    ngOnInit(): void;
    getUserDecks(): void;
    getCardsLink(link: Link): string;
    startLearning(cards: Link): void;
}
