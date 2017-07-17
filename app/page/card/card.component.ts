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

}