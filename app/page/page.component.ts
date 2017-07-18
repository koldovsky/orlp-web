import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page',
    template: require('./page.component.html!text'),
    styleUrls: ['app/page/page.css']
})

export class PageComponent implements OnInit {
    pageTitle: string = 'Spaced Repetition';

    constructor() { }

    ngOnInit() { }
}