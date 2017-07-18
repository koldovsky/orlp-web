import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page',
    template: require('./navbar.component.html!text'),
    styleUrls: ['app/page/page.css']
})

export class PageComponent implements OnInit {
    pageTitle: string = 'Spaced Repetition';

    constructor() { }

    ngOnInit() { }
}