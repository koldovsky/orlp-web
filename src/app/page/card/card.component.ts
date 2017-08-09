import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ORLPService} from '../../services/orlp.service';
import {CardPublic} from '../../dto/CardsDTO/public.card.DTO';
import {CardService} from './card.service';

@Component({
    templateUrl: ('./card.component.html'),
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    public routing = false;
    public questionNumber = 1;
    public answer = '';

    public url: string;
    public cards: CardPublic[];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private orlp: ORLPService,
                private cardService: CardService) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                let url = params['url'];
                url = this.orlp.decodeLink(url);
                this.url = url;
            }
        );

        this.cardService.getCards(this.url).subscribe(
            cards => {
                this.cards = cards;
                console.log(JSON.stringify(cards));
            }
        );
    }

    onRotate() {
        this.routing = true;
    }

    onRotateBack() {
        this.routing = false;
        this.getNextQuestion();
        this.answer = '';
    }

    getNextQuestion() {
        this.questionNumber++;

        if (this.cards[this.questionNumber] === undefined) {
            alert('The deck is over');
            this.router.navigate(['/main']);
        }
    }
}
