import { OnInit } from "@angular/core";
import { CabinetService } from "./cabinet.service";
import { UsersDTO } from "../../dto/UserDTO/UserDTO";
import { Link } from "../../dto/link";
import { ORLPService } from "../../services/orlp.service";
import { Router } from "@angular/router";
import { DeckLinkByFolder } from "../../dto/DeckDTO/linkByFolder.deck.DTO";
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
