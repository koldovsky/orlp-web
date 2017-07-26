import {Component, OnInit} from "@angular/core";
import {CabinetService} from "./cabinet.service";
import {DeckPublic} from "../../classes/DeckDTO/public.deck.DTO";
import {UsersDTO} from "../../classes/UserDTO/UserDTO";

@Component({
    providers: [CabinetService],
    template: require('app/page/cabinet/cabinet.component.html!text'),
    styleUrls: ['app/page/cabinet/menu.css']
})

export class CabinetComponent implements OnInit {
    public decks: DeckPublic[];
    public user: UsersDTO;
    errorMessage: string;

    constructor(private cabinetService: CabinetService) {
    }

    ngOnInit(): void {
        this.cabinetService.getUser()
            .subscribe(user => this.user = user,
                error => this.errorMessage = <any>error);
    }

    getUserDecks(): void {
        let folderUrl: string = this.user.folder.href;
        folderUrl = folderUrl.replace("http://localhost:8080/", "");

        this.cabinetService.getUserDecks(folderUrl)
            .subscribe(decks => this.decks = decks,
                error => this.errorMessage = <any>error);
    }
}
