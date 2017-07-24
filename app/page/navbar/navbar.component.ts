import {Component, Input, OnInit} from '@angular/core';
import {ORLPService} from "../../orlp.service";
import {DeckPublic} from "../../classes/DeckDTO/public.deck.DTO";
import {DeckService} from "./deck.service";

@Component({
    selector: 'page',
    template: require('./navbar.component.html!text'),
    styleUrls: ['app/page/navbar/navbar.css', 'app/page/navbar/dropdown.css']
})

export class NavbarComponent implements OnInit {
    decks: DeckPublic[];
    listFilter: string;
    @Input() url: string;
    public errorMessage: string;

    constructor(private deckService: DeckService,
                private orlpService: ORLPService) {
    }

    ngOnInit(): void {
        this.deckService.getDecks(this.url)
            .subscribe(decks => this.decks = decks,
                error => this.errorMessage = <any>error);
    }
}