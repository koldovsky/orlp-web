import {Component} from "@angular/core";
import {DeckDTO} from "../../../dto/DeckDTO/DeckDTO";
import {UserDecksService} from "./user.decks.service";
import {UserDTO} from "../../../dto/UsersDTO/UserDTO";

@Component({
  templateUrl: ('./user.decks.component.html'),
  styleUrls: ['user.decks.css']
})

export class UserDecksComponent {
  private decks: DeckDTO[];
  private user: UserDTO;

  constructor(private userDecksService: UserDecksService) {}

  ngOnInit() {
    this.userDecksService.getUser().subscribe(user => {
      this.user = user;
      this.decks = null;
      this.userDecksService.getDecks(user.folder).subscribe(decks => {
        // this.decks = this.getOnlyDecksCreatedByTheUser(decks);
        this.decks = decks;
      })
    });
  }

  private getOnlyDecksCreatedByTheUser(decks: DeckDTO[]): DeckDTO[] {
    return decks.filter(deck => deck.ownerId === this.user.id);
  }

  private onDeckClicked(deck: DeckDTO, index: number): void {
    this.selectElement(index);
  }

  private selectElement (index: number): void {
    let element = document.getElementsByClassName("selected")[0];
    if (element !== undefined) {
      element.classList.remove("selected");
    }
    document.getElementsByClassName('decks-list-item')[index].classList.add("selected");
  }
}
