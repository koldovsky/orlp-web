<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 66f07b09b5508f695e1eeb6e4d3b593cac444434
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ORLPService} from "../../orlp.service";
import {CardPublic} from "../../classes/CardsDTO/public.card.DTO";
import {CardService} from "./card.service";

@Component({
    template: require('./card.component.html!text'),
    styleUrls: ['app/page/card/card.component.css']
})
export class CardComponent implements OnInit {
    public routing: boolean = false;
    public questionNumber: number = 1;
    public answer: string = "";

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
                console.log(JSON.stringify(cards))
            }
        );
    }

    onRotate() {
        this.routing = true;
    }

    onRotateBack() {
        this.routing = false;
        this.getNextQuestion();
        this.answer = "";
    }

    getNextQuestion() {
        this.questionNumber++;

        if (this.cards[this.questionNumber] == undefined) {
            alert("The deck is over");
            this.router.navigate(['/main']);
        }
    }
<<<<<<< HEAD
=======
=======
import { Component, OnInit } from '@angular/core';

@Component({
    template: require('./card.component.html!text')
})
export class CardComponent implements OnInit {
    public routing: boolean = false;
    public answer: string = "";

    onRotate() {
        this.routing = true;
    }
    constructor() { }

    ngOnInit() { }

>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
>>>>>>> 66f07b09b5508f695e1eeb6e4d3b593cac444434
}