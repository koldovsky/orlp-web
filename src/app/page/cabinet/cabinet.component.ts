import {Component, OnInit} from '@angular/core';
import {CabinetService} from './cabinet.service';
import {UsersDTO} from '../../dto/UserDTO/UserDTO';
import {Link} from '../../dto/link';
import {ORLPService} from '../../services/orlp.service';
import {Router} from '@angular/router';
import {DeckLinkByFolder} from '../../dto/DeckDTO/linkByFolder.deck.DTO';

@Component({
  providers: [CabinetService],
  templateUrl: ('./cabinet.component.html'),
  styleUrls: ['./menu.css']
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
