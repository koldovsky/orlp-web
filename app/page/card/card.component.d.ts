import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ORLPService } from "../../orlp.service";
import { CardPublic } from "../../classes/CardsDTO/public.card.DTO";
import { CardService } from "./card.service";
export declare class CardComponent implements OnInit {
    private route;
    private router;
    private orlp;
    private cardService;
    routing: boolean;
    questionNumber: number;
    answer: string;
    url: string;
    cards: CardPublic[];
    constructor(route: ActivatedRoute, router: Router, orlp: ORLPService, cardService: CardService);
    ngOnInit(): void;
    onRotate(): void;
    onRotateBack(): void;
    getNextQuestion(): void;
}
