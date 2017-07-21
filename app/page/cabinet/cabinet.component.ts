import {Component, OnInit} from "@angular/core";
import {CabinetService} from "./cabinet.service";
import {DeckPublic} from "../../classes/public.deck.DTO";

@Component({
    providers: [CabinetService],
    template: require('app/page/cabinet/cabinet.component.html!text'),
    styleUrls: ['app/page/cabinet/menu.css']
})

export class CabinetComponent implements OnInit {
    public decks: DeckPublic[];
    errorMessage: string;

    constructor(private cabinetService: CabinetService) {
    }

    ngOnInit(): void {
        this.cabinetService.getUserDecks()
            .subscribe(decks => this.decks = decks,
                error => this.errorMessage = <any>error);
    }
}