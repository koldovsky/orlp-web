import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page',
    template: require('./registernavbar.component.html!text')
})

export class PageComponent implements OnInit {
    pageTitle: string = 'Spaced Repetition';

    constructor() { }

    ngOnInit() { }
}