import {Component, OnInit} from "@angular/core";
import {CabinetService} from "./cabinet.service";
import {UsersDTO} from "../../classes/UserDTO/UserDTO";
import {DeckLinkByCategory} from "../../classes/DeckDTO/linkByCategory.deck.DTO";
import {Link} from "../../classes/link";
import {ORLPService} from "../../orlp.service";
import {Router} from "@angular/router";
import {DeckLinkByFolder} from "../../classes/DeckDTO/linkByFolder.deck.DTO";

@Component({
    providers: [CabinetService],
    template: require('app/page/cabinet/cabinet.component.html!text'),
    styleUrls: ['app/page/cabinet/menu.css']
})

export class CabinetComponent implements OnInit {
    public decks: DeckLinkByFolder[];
    public user: UsersDTO;
    errorMessage: string;

    constructor(private cabinetService: CabinetService,
                  private orlpService: ORLPService,
                  private router: Router) {
    }

    ngOnInit(): void {
        this.cabinetService.getUser()
            .subscribe(user => this.user = user,
                error => this.errorMessage = <any>error);
    }

    getUserDecks(): void {
        this.cabinetService.getUserDecks(this.user.folder)
            .subscribe(decks => this.decks = decks,
                error => this.errorMessage = <any>error);
    }


    getCardsLink(link: Link): string {
        return this.orlpService.getShortLink(link);
    }

    startLearning(cards: Link): void {
        this.router.navigate(['/cards', this.getCardsLink(cards)]);
    }
}
