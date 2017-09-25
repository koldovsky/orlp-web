import {Component, OnInit} from '@angular/core';
import {AdminDeckService} from './admin.deck.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ORLPService} from '../../../../services/orlp.service';
import {AdminDeck} from '../../../../dto/AdminDTO/admin.deck.DTO';

@Component({
  providers: [AdminDeckService],
  templateUrl: ('./admin.deck.component.html'),
  styleUrls: ['./admin.deck.css']
})

export class AdminDeckComponent implements OnInit {
  public deck: AdminDeck;
  private sub: Subscription;
  private url: string;
  private clickedButton: boolean;

  constructor(private route: ActivatedRoute,
              private orlp: ORLPService,
              private adminDeckSevice: AdminDeckService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        const url = params['url'];
        this.url = url;
      }
    );
    this.takeDeck();
  }

  private takeDeck(): void {
    this.decodeLink();
    this.adminDeckSevice.getDeck(this.url).subscribe(
      deck => this.deck = deck);
  }

  private decodeLink(): void {
    this.url = this.orlp.decodeLink(this.url);
  }
}
